import { Card } from "animal-island-ui";
import { profile } from "../data/profile";

export function AboutSection() {
  return (
    <section className="content-section two-column" id="about">
      <div>
        <p className="section-kicker">About</p>
        <h2>我想以清澈的双眼去看这个世界。</h2>
      </div>
      <Card color="app-yellow">
        <div className="profile-postcard">
          <a
            className="profile-avatar-link"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="打开 Ashitaka 的 GitHub 主页"
          >
            <img
              className="profile-avatar"
              src={profile.avatar}
              alt="Ashitaka 的 GitHub 头像"
            />
          </a>
          <p className="section-copy">{profile.about}</p>
        </div>
        <div className="skill-cloud">
          {profile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Card>
    </section>
  );
}
