import { defineConfig } from "vitepress";
import { generateSidebarItems } from "./help.mjs";

const adminItems = generateSidebarItems("../admin");
const uniappItems = generateSidebarItems("../uniapp");

export default defineConfig({
  title: "LLM Notes",
  description: "Happy FullStack Coding",
  vite: {
    server: {
      port: 5178,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/admin/" },
    ],

    sidebar: [
      {
        text: "Web Admin",
        collapsed: false,
        items: adminItems,
      },
      {
        text: "Uniapp",
        collapsed: false,
        items: uniappItems,
      },
    ],

    outline: {
      label: "目录",
      level: "deep",
    },

    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>',
        },
        link: "https://gitee.com/pkmer/llm-job-prep",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    toc: {
      level: [2, 3],
      shouldAllowNested: true,
      listTag: "ol",
    },
  },
});
