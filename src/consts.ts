import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "个人主页",
  DESCRIPTION: "DHY的个人主页",
  AUTHOR: "DHY",
}

// Work Page
export const WORK: Page = {
  TITLE: "经历",
  DESCRIPTION: "我的那些经历",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "博客",
  DESCRIPTION: "一些闲聊和我热爱的话题",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "项目",
  DESCRIPTION: "我最近的和以前的项目",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "搜索",
  DESCRIPTION: "搜索本网站的所有内容",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "首页", 
    HREF: "/", 
  },
  { 
    TEXT: "经历", 
    HREF: "/work", 
  },
  { 
    TEXT: "博客", 
    HREF: "/blog", 
  },
  { 
    TEXT: "项目", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "电子邮件（个人）",
    ICON: "email", 
    TEXT: "donghanying20120408@outlook.com",
    HREF: "mailto:donghanying20120408@outlook.com",
  },
  { 
    NAME: "电子邮件（MCJPG）",
    ICON: "email", 
    TEXT: "Call_Me_DongT@mcjpg.org",
    HREF: "mailto:Call_Me_DongT@mcjpg.org",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "CallMeDongTeacher",
    HREF: "https://github.com/CallMeDongTeacher"
  },
  { 
    NAME: "Bilibili",
    ICON: "bilibili",
    TEXT: "叫我董老实-元气TaskMgr",
    HREF: "https://space.bilibili.com/1655020702",
  },
  { 
    NAME: "QQ、微信",
    ICON: "wechat",
    TEXT: "暂不公开",
    HREF: "https://www.bilibili.com/video/BV1GJ411x7h7",
  },
]

