import type { CardColor, IconName } from "animal-island-ui";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type DockItem = LinkItem & {
  key: string;
  description: string;
  color: CardColor;
  iconName: IconName;
};

export type NotePreview = {
  title: string;
  status: "drafting" | "idea" | "coming soon";
  category: "tutorial" | "experiment" | "frontend";
  summary: string;
};

export type IslandTask = {
  key: string;
  task: string;
  state: string;
  tool: string;
  sparkle: string;
};

export type FriendLink = {
  name: string;
  description: string;
  href: string;
  avatar: string;
  tag: string;
  note: string;
};

export type IslandMoodReport = {
  weather: string;
  mood: string;
  status: string;
  slowStatus: string;
};

export const profile = {
  name: "Ashitaka的小岛工作台",
  title: "Agent 工程师的小岛工作台",
  subtitle:
    "这是一座Ashitaka幻想岛屿, 记录着自己学习, 实验抑或感想. 当你造访于此, 就知道这个开源的世界Ashitaka来过.",
  status: "Island dream lab online",
  links: {
    github: "https://github.com/Ashitaka-Laputa-IV",
    tutorial: "https://github.com/didilili/ai-agents-from-zero",
    email: "mailto:dili@outlook.com",
  },
  avatar: "https://github.com/Ashitaka-Laputa-IV.png",
  email: "dili@outlook.com",
  about:
    "虽然只是知识不是饱满, 工程能力不是夯实, 但是一直渴望以清澈的双眼去看这个世界.",
  skills: [
    "LangChain",
    "LangGraph",
    "DeepAgents",
    "Harness",
    "Python",
    "C/C++",
  ],
};

export const dockItems: DockItem[] = [
  {
    key: "about",
    label: "关于我",
    description: "一个还在发光的普通人",
    href: "#about",
    color: "app-teal",
    iconName: "icon-map",
  },
  {
    key: "contact",
    label: "联系我",
    description: "给岛主递一封信",
    href: "#contact",
    color: "app-blue",
    iconName: "icon-chat",
  },
  {
    key: "pr",
    label: "PR",
    description: "开源社区的贡献痕迹",
    href: "#pr",
    color: "app-pink",
    iconName: "icon-design",
  },
  {
    key: "resources",
    label: "资源收藏",
    description: "邻岛航线和工具贝壳",
    href: "https://github.com/Ashitaka-Laputa-IV?tab=stars",
    external: true,
    color: "app-yellow",
    iconName: "icon-shopping",
  },
  {
    key: "new-route",
    label: "新航线",
    description: "下一片正在勘探的海域",
    href: "#top",
    color: "app-yellow",
    iconName: "icon-design",
  },
  {
    key: "new-idea",
    label: "灵感贝壳",
    description: "还在海底慢慢长大的念头",
    href: "#top",
    color: "app-pink",
    iconName: "icon-miles",
  },
];

export const islandMoodReports: IslandMoodReport[] = [
  {
    weather: "海面微微北风",
    mood: "适合按照方向学习, 不骄不躁",
    status: "正在一步步走向目标",
    slowStatus: "剔除杂念, 坚持不放弃",
  },
  {
    weather: "海上大风",
    mood: "适合追求新鲜的技术",
    status: "开阔视野",
    slowStatus: "大胆体验, 主动尝试",
  },
];

export const notes: NotePreview[] = [
  {
    title: "Agent 魔法手账",
    status: "drafting",
    category: "experiment",
    summary: "把零散实验晒成一张能复现的藏宝图，从最小可用 agent 开始。",
  },
  {
    title: "前端旧船票",
    status: "coming soon",
    category: "frontend",
    summary:
      "从前端时代带来的手艺还在发光：体验、状态、组件和工程化，都能继续给 agents 造桥。",
  },
  {
    title: "从零登岛路线",
    status: "drafting",
    category: "tutorial",
    summary:
      "把 ai-agents-from-zero 整理成更温柔的航线图，让第一次登岛的人也不迷路。",
  },
];

export const friendLinks: FriendLink[] = [
  {
    name: "Chiikawa 吉伊卡哇情报站",
    description: "乌萨奇的好朋友，停靠在这条温柔又热闹的邻岛航线。",
    href: "https://www.anime-chiikawa.jp/",
    avatar:
      "https://i0.wp.com/chiikawahk.com/wp-content/uploads/2023/12/image-3.png?resize=300%2C295&ssl=1",
    tag: "Neighbor island",
    note: "坐小船去看看吉伊卡哇的可爱情报。",
  },
];

export const islandTasks: IslandTask[] = [
  {
    key: "minimum-agent",
    task: "孵化最小可用 agent",
    state: "正在发芽",
    tool: "Python / Workflow",
    sparkle: "让概念先跑起来",
  },
  {
    key: "tutorial-map",
    task: "整理从零教程航线",
    state: "已经上岸",
    tool: "Markdown / GitHub",
    sparkle: "给后来者留路标",
  },
  {
    key: "tool-calling",
    task: "观察工具调用潮汐",
    state: "潮汐观察中",
    tool: "Dify / Coze",
    sparkle: "找到可靠的编排节奏",
  },
  {
    key: "frontend-spells",
    task: "把前端体验变成 agent 手艺",
    state: "慢慢打磨",
    tool: "React / TypeScript",
    sparkle: "让界面也会照顾人",
  },
];

export type PullRequest = {
  repo: string;
  number: number;
  title: string;
  url: string;
  mergedAt: string;
};

export const pullRequests: PullRequest[] = [
  {
    repo: "datawhalechina/deepagents-in-action",
    number: 77,
    title: "fix: 修复第9章 md 格式问题（中文的 <中文的> 与 ** 贴合导致强调失败）",
    url: "https://github.com/datawhalechina/deepagents-in-action/pull/77",
    mergedAt: "2026-07-12T09:48:52Z",
  },
  {
    repo: "datawhalechina/deepagents-in-action",
    number: 75,
    title: "feat: 新增暗色模式支持，完善全站主题适配",
    url: "https://github.com/datawhalechina/deepagents-in-action/pull/75",
    mergedAt: "2026-07-11T02:35:55Z",
  },
  {
    repo: "datawhalechina/deepagents-in-action",
    number: 73,
    title: "docs: 更新子 Agent 中间件参数说明",
    url: "https://github.com/datawhalechina/deepagents-in-action/pull/73",
    mergedAt: "2026-07-10T08:25:30Z",
  },
];
