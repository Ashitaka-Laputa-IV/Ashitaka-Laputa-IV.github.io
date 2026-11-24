# Ashitaka

Ashitaka 的个人主页：AI agent、RAG 和开发者工具。

页面在 [`site/`](site/)：纯静态 HTML/CSS/JS，无构建步骤。内容包括简介、博客入口、代表项目和联系方式。

## 本地预览

```bash
python -m http.server 8000 --directory site
```

然后打开 <http://localhost:8000/>。

## 部署

GitHub Pages 通过 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 部署 `site/`：

- push 到 `main`；
- 或在 Actions 里手动运行 `Deploy GitHub Pages`。

线上地址：<https://ashitaka-laputa-iv.github.io/>
