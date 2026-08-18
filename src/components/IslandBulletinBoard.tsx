import { useEffect, useState } from "react";
import { Card, Table, type TableColumn } from "animal-island-ui";
import { islandTasks, type IslandTask } from "../data/profile";

const taskColumns: TableColumn[] = [
  {
    title: "小岛任务",
    dataIndex: "task",
    width: 210,
    render: (value) => <strong className="task-name">{String(value)}</strong>,
  },
  {
    title: "状态",
    dataIndex: "state",
    width: 140,
    render: (value) => <span className="task-state">{String(value)}</span>,
  },
  {
    title: "工具",
    dataIndex: "tool",
    width: 160,
  },
  {
    title: "发光点",
    dataIndex: "sparkle",
  },
];

export function IslandBulletinBoard() {
  const [tasks, setTasks] = useState<IslandTask[]>(islandTasks);

  useEffect(() => {
    fetch("/island-tasks.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data: IslandTask[]) => {
        if (Array.isArray(data) && data.length > 0) setTasks(data);
      })
      .catch(() => {
        // 找不到外部 json 时，继续用内置任务板
      });
  }, []);

  return (
    <section className="content-section bulletin-section" id="bulletin">
      <div className="section-heading-center">
        <p className="section-kicker">Bulletin Board</p>
        <h2>岛上公告板</h2>
        <p>把一些还在发光的想法，钉成几张会被海风翻动的便签。</p>
      </div>
      <Card type="dashed" className="task-board-card">
        <div className="task-board-heading">
          <div>
            <p className="section-kicker">Island board</p>
            <h3>今日小岛任务板</h3>
          </div>
          <span>把愿望拆成可以动手的小木牌。</span>
        </div>
        <Table
          columns={taskColumns}
          dataSource={tasks}
          rowKey="key"
          striped
          scroll={{ x: 720 }}
        />
      </Card>
    </section>
  );
}
