import { Button, Card } from "animal-island-ui";

type RepoCard = {
  name: string;
  desc: string;
  tags: string[];
  url: string;
};

const repos: RepoCard[] = [
  {
    name: "LangLoop",
    desc: "LangGraph 实现的 Generator–Discriminator（Ralph Loop）迭代“生成—评估”循环，持续精炼内容直到满足质量阈值。",
    tags: ["Python", "LangGraph", "Agent Loop"],
    url: "https://github.com/Ashitaka-Laputa-IV/LangLoop",
  },
  {
    name: "text-to-sql-agent",
    desc: "把自然语言问题转成 SQL 查询的 agent 实验，探索工具调用与数据库之间的编排节奏。",
    tags: ["Python", "Text-to-SQL", "Agent"],
    url: "https://github.com/Ashitaka-Laputa-IV/text-to-sql-agent",
  },
  {
    name: "html2md",
    desc: "一个功能强大的 Python 库，将 HTML 转为 Markdown，支持嵌套列表、表格、代码块等复杂结构。",
    tags: ["Python", "HTML", "Markdown"],
    url: "https://github.com/Ashitaka-Laputa-IV/html2md",
  },
];

export function ProjectCard() {
  return (
    <section className="content-section project-section" id="project">
      <div className="project-row">
        {repos.map((repo) => (
          <Card type="dashed" className="project-card" key={repo.name}>
            <p className="section-kicker">Project</p>
            <h2>{repo.name}</h2>
            <p className="section-copy">{repo.desc}</p>
            <div className="project-tags">
              {repo.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-actions">
              <Button onClick={() => window.open(repo.url, "_blank")}>
                打开仓库
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
