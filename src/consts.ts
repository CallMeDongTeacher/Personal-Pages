import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "个人主页",
  DESCRIPTION: "DHY的个人主页",
  AUTHOR: "DHY",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "首页", 
    HREF: "/", 
  },
  { 
    TEXT: "工作", 
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
    NAME: "Email",
    ICON: "email", 
    TEXT: "donghanying20120408@outlook.com",
    HREF: "mailto:donghanying20120408@outlook.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "CallMeDongTeacher",
    HREF: "https://github.com/CallMeDongTeacher/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "no",
    HREF: "no",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "no",
    HREF: "no",
  },
]

