const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      navLinks: [
        { label: "首页", href: "#hero" },
        { label: "文章", href: "#posts" },
        { label: "项目", href: "#projects" },
        { label: "历程", href: "#timeline" },
        { label: "联系", href: "#contact" },
      ],
      posts: [
        {
          slug: "vue3-best-practices",
          title: "Vue 3 组件设计实践：从 Options 到 Composition API",
          date: "2025-05-01",
          readTime: 12,
          excerpt:
            "结合真实项目总结 Vue 3 的组件拆分与状态管理技巧，帮助你写出更优雅的业务代码。",
          tags: ["Vue", "前端工程化", "Composition API"],
          link: "https://github.com/xuxiang/blog-notes/vue3-best-practices.md",
        },
        {
          slug: "typescript-patterns",
          title: "TypeScript 实战：构建可靠的前端类型系统",
          date: "2025-04-18",
          readTime: 10,
          excerpt:
            "聚焦常用的类型体操、工具类型与团队协作约定，完善前端项目的类型保障。",
          tags: ["TypeScript", "工程规范"],
          link: "https://github.com/xuxiang/blog-notes/typescript-patterns.md",
        },
        {
          slug: "vite-deploy-guide",
          title: "Vite + GitHub Pages 自动化部署指南",
          date: "2025-03-30",
          readTime: 8,
          excerpt:
            "一份开箱即用的部署流水线教程，涵盖 CI 配置、缓存优化与自定义域名绑定。",
          tags: ["Vite", "CI/CD", "GitHub Pages"],
          link: "https://github.com/xuxiang/blog-notes/vite-deploy-guide.md",
        },
        {
          slug: "cloud-native-notes",
          title: "前端与云原生的融合：Kubernetes 中的微前端",
          date: "2025-03-08",
          readTime: 14,
          excerpt:
            "分享我在 K8s 环境下实践微前端的经验，包括部署策略与可观测性方案。",
          tags: ["云原生", "微前端", "Kubernetes"],
          link: "https://github.com/xuxiang/blog-notes/cloud-native-notes.md",
        },
        {
          slug: "devtool-weekly",
          title: "开发者工具周刊：提效利器精选",
          date: "2025-02-23",
          readTime: 6,
          excerpt:
            "每周日推荐三款提效工具，涵盖调试、文档与自动化测试等多个场景。",
          tags: ["效率工具", "提效", "周刊"],
          link: "https://github.com/xuxiang/blog-notes/devtool-weekly.md",
        },
      ],
      featuredProjects: [
        {
          name: "FeHelper Pro",
          stack: "Vue 3 · Vite · PWA",
          description:
            "一款聚焦于前端调试的浏览器工具集，集成接口 Mock、网络抓包与 JSON Diff。",
          repo: "https://github.com/xuxiang/fehelper-pro",
          stars: 128,
        },
        {
          name: "DeployFlow",
          stack: "GitHub Actions · Docker",
          description:
            "用于前端项目的部署工作流模板，预设缓存策略与多环境发布机制。",
          repo: "https://github.com/xuxiang/deployflow",
          stars: 86,
        },
        {
          name: "Story Kit",
          stack: "Vue · Markdown",
          description:
            "基于组件驱动的技术文章写作模板，支持实时预览与多主题导出。",
          repo: "https://github.com/xuxiang/story-kit",
          stars: 64,
        },
      ],
      timeline: [
        {
          year: "2025",
          title: "技术博客全新升级",
          description:
            "完成博客架构重构，引入 Vue 交互与自动化部署流程，持续输出原创内容。",
        },
        {
          year: "2024",
          title: "深入云原生生态",
          description:
            "牵头团队完成前端微服务改造，落地基于 Kubernetes 的可观测方案。",
        },
        {
          year: "2023",
          title: "专注前端工程化",
          description:
            "推进项目脚手架统一，沉淀组件库与质量保障体系。",
        },
        {
          year: "2022",
          title: "开启技术分享",
          description:
            "在社区发布第一篇技术文章，与更多开发者建立联系。",
        },
      ],
      selectedTag: "all",
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    tags() {
      const tagSet = new Set();
      this.posts.forEach((post) => {
        post.tags.forEach((tag) => tagSet.add(tag));
      });
      return Array.from(tagSet).sort();
    },
    filteredPosts() {
      if (this.selectedTag === "all") {
        return this.posts;
      }
      return this.posts.filter((post) => post.tags.includes(this.selectedTag));
    },
    topTags() {
      const tagUsage = this.posts.reduce((acc, post) => {
        post.tags.forEach((tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
      }, {});
      return Object.keys(tagUsage)
        .sort((a, b) => tagUsage[b] - tagUsage[a])
        .slice(0, 4);
    },
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = tag;
    },
    scrollToSection(id) {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
});

app.component("post-card", {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const date = new Date(this.post.date + "T00:00:00");
      return new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    },
  },
  template: "#post-card-template",
});

app.mount("#app");
