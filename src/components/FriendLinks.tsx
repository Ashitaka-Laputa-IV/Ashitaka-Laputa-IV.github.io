import { Button, Card } from "animal-island-ui";

export function FriendLinks() {
  return (
    <section className="content-section friends-section" id="friends">
      <div className="section-heading-center">
        <p className="section-kicker">Friends Ferry</p>
        <h2>邻岛航线</h2>
        <p>把喜欢的小岛系在码头边，海风一吹，就可以去朋友那里串门。</p>
      </div>
      <div className="ghibli-island-wrap">
        <a
          className="ghibli-island"
          href="https://www.ghibli.jp/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="打开 スタジオジブリ（Studio Ghibli）官网"
        >
          <Card type="dashed" className="ghibli-card">
            <div className="ghibli-frame">
              <img
                src="https://www.ghibli.jp/img/totoro.png"
                alt="スタジオジブリ 龙猫"
              />
            </div>
            <div className="ghibli-meta">
              <span className="ghibli-lang">日本語</span>
              <h3>スタジオジブリ</h3>
              <p className="ghibli-name-en">Studio Ghibli · 吉卜力工作室</p>
              <p className="ghibli-desc">
                停泊在邻岛航线深处的温柔小岛，藏着龙猫、天空与一整片会呼吸的海。
              </p>
            </div>
            <Button>坐小船去看看吉卜力</Button>
          </Card>
        </a>
      </div>
    </section>
  );
}
