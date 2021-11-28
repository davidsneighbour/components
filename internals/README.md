---
lastmod: '2021-11-28T01:28:44.500Z'
---

# DNB GoHugo Component / Better Internals

This is a GoHugo theme component that solves the old question "what tags belong into the `<head>` tag of my website. Set it up, configure it, forget it's there. This component adds a multitude of tags and is extensively configurable.

## Installing

First enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-org/components/internals"
```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```shell
# update this module
hugo mod get -u github.com/dnb-org/components/internals
# update all modules
hugo mod get -u #
```

## Configuration parameters

- All configuration is located in the params section below `params.dnb.internals`.
- All samples in this document are documented in TOML and assume the section header is already present above them.

```toml
[params]
[params.dnb]
[params.dnb.head]
parameter = value
```

## Hooks

-

<!-- other_components -->

## Other components in DNB Hugo components

| Component                                                                        | Description                                                |
| :------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [auditor](https://github.com/dnb-org/components/tree/main/auditor)               |                                                            |
| [favicon](https://github.com/dnb-org/components/tree/main/favicon)               |                                                            |
| [functions](https://github.com/dnb-org/components/tree/main/functions)           |                                                            |
| [internals](https://github.com/dnb-org/components/tree/main/internals) | Better internal templates for GoHugo |
| [netlification](https://github.com/dnb-org/components/tree/main/netlification)   | a collection of tools that optimize your site on Netlify   |
| [opensearch](https://github.com/dnb-org/components/tree/main/opensearch)         | configuration for Open Search                              |
| [pwa](https://github.com/dnb-org/components/tree/main/pwa)                       | Automatically turns your site into a PWA                   |
| [renderhooks](https://github.com/dnb-org/components/tree/main/renderhooks)       | render hooks for Markdown markup                           |
| [robots](https://github.com/dnb-org/components/tree/main/robots)                 | configure the content of your robots.txt with front matter |
| [search-algolia](https://github.com/dnb-org/components/tree/main/search-algolia) |                                                            |
| [search-lunrjs](https://github.com/dnb-org/components/tree/main/search-lunrjs)   |                                                            |
| [sitemap](https://github.com/dnb-org/components/tree/main/sitemap)               |                                                            |
| [social](https://github.com/dnb-org/components/tree/main/social)                 |                                                            |
| [welcomments](https://github.com/dnb-org/components/tree/main/welcomments)       |                                                            |

<!-- /other_components -->

<!-- other_elements -->

## Other elements in DNB Hugo

[DNB Hugo](https://github.com/dnb-org) are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element                                                     | Description                                                                                                       |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [blocks](https://github.com/dnb-org/blocks)                 | Blocks are reusable page elements like headers, footers, content display etc.                                     |
| [components](https://github.com/dnb-org/components)         | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [configurations](https://github.com/dnb-org/configurations) | A collection of configuration packages used in dnb-org                                                            |
| [debug](https://github.com/dnb-org/debug)                   | Debugging for your Hugo layout files.                                                                             |
| [hooks](https://github.com/dnb-org/hooks)                   | Template hooks for Hugo themes                                                                                    |
| [libraries](https://github.com/dnb-org/libraries)           | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo.          |
| [shortcodes](https://github.com/dnb-org/shortcodes)         | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on.     |
| [testcontent](https://github.com/dnb-org/testcontent)       | Testcontent is a collection of testing content. Obviously.                                                        |

<!-- /other_elements -->
