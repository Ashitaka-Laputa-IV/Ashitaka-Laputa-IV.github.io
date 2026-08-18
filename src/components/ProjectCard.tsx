import { Button, Card } from "animal-island-ui";
import { profile } from "../data/profile";

export function ProjectCard() {
  return (
    <section className="content-section project-section" id="project">
      <div className="project-row">
        {[0, 1, 2].map((i) => (
          <Card type="dashed" className="project-card" key={i}>
            <p className="section-kicker">Main project</p>
            <h2>ai-agents-from-zero</h2>
            <p className="section-copy">
              如果要在岛上插一面小旗，目前最像小旗的就是它：一份从零开始理解 AI
              agents
              的教程仓库。它不是宏伟纪念碑，更像我一边赶海一边铺下的路标，
              希望后来的人少绕一点弯，也多保留一点好奇。
            </p>
            <div className="project-tags">
              <span>AI Agents</span>
              <span>Tutorial</span>
              <span>From Zero</span>
            </div>
            <div className="project-actions">
              <Button
                onClick={() => window.open(profile.links.tutorial, "_blank")}
              >
                打开教程仓库
              </Button>
              <Button
                onClick={() => window.open(profile.links.github, "_blank")}
              >
                查看更多代码
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
