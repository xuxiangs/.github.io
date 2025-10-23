# XuXiang 的技术博客

基于 Vue 构建的个人技术博客，托管在 `xuxiang.github.io` 形式的 GitHub Pages 仓库中。项目聚焦于前端工程化、云原生和效率工具的实战分享。

## 本地预览

由于使用了 Vue CDN 版本，无需安装依赖即可预览：

```bash
# 使用任意静态服务器，例如 Python 内置的 http.server
python3 -m http.server 4000
# 然后访问 http://localhost:4000
```

## 部署说明

这是一个 `USERNAME.github.io` 仓库，推送到默认分支后 GitHub Pages 会自动刷新最新内容。

1. 在本地提交并推送代码。
2. 打开仓库的 **Settings → Pages**，确认 Source 选择了默认分支（通常是 `main`）。
3. 约 1 分钟后即可通过 `https://USERNAME.github.io` 访问到更新后的站点。

如需接入自定义域名，可在同一页面中设置自定义域并在 DNS 里增加 `CNAME` 记录。

## 自定义内容

- `js/app.js` 中的 `posts`、`featuredProjects`、`timeline` 数组用于配置文章、项目和时间线。
- `css/style.css` 用于自定义页面视觉风格，可根据个人喜好调整色彩和布局。
- `index.html` 中的 `navLinks`、联系方式等信息都在 Vue 实例的数据中维护，便于后续扩展。
