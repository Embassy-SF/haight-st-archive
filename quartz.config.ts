import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { DashboardTiles } from "./quartz/plugins/transformers/dashboardTiles"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Home",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "www.haight.place",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "rgb(248, 249, 238)",
          lightgray: "rgb(218, 215, 202)",
          gray: "rgb(137, 137, 137)",
          darkgray: "rgb(70, 70, 70)",
          dark: "rgb(19, 19, 19)",
          secondary: "rgb(63, 156, 187)",
          tertiary: "rgb(112, 205, 236)",
          highlight: "rgba(112, 232, 236, 0.12)",
          textHighlight: "rgba(112, 232, 236, 0.19)",
        },
        darkMode: {
          light: "rgb(19, 19, 19)",
          lightgray: "rgb(70, 70, 70)",
          gray: "rgb(137, 137, 137)",
          darkgray: "rgb(218, 215, 202)",
          dark: "rgb(248, 249, 238)",
          secondary: "rgb(63, 156, 187)",
          tertiary: "rgb(112, 205, 236)",
          highlight: "rgba(112, 232, 236, 0.12)",
          textHighlight: "rgba(112, 232, 236, 0.19)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      DashboardTiles(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
