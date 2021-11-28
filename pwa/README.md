---
lastmod: "2021-11-28T08:50:38.793Z"
---

## DNB Hugo Component / PWA

This is a Hugo theme component with helpers to convert your static [GoHugo](https://gohugo.io/) website into a PWA.

This is work in progress and while many parts are already working, some changes to the setup will occur. Please watch the releases of this repository to be alerted about changes.

### Features

- :heavy_check_mark: Favicon for apps and sites
- :heavy_check_mark: simple PWA setup
- :x: Happy Google lighthouse testing
- :x: Improvements for easier "drop in" to other websites/modules
- :x: Add layout system for offline page creation
- :x: Add configuration system
- :x: improve configuration of implemented functionality in the service worker
- :x: add detailed documentation for all configuration options

### Installing

#### Setup module and output formats

First, if not already done, enable modules in your _own_ repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in `config.toml`:

```toml
[module]

[[module.imports]]
path = "github.com/dnb-org/components/pwa"
disabled = false

```

or in `config/_default/module.toml`:

```toml
[[imports]]
path = "github.com/dnb-org/components/pwa"
disabled = false

```

The next time you run `hugo` it will download the latest version of this module.

To make this component work you need to add the manifest to your _home_ output formats in `config.toml`:

```toml
[outputs]
home = [ ... others ... , "manifest" ]
```

or in `config/_default/outputs.toml`:

```toml
home = [ ... others ... , "manifest"]
```

You already should have an `[output]` section, add `"manifest"` to it. Do not add it anywhere other than in the `home` directive.

#### Setup layouts

In your themes header (before `</head>`):

```gotemplate
{{ partialCached "head/pwa.html" . }}
```

This will add a link to the automatically created webmanifest with options to install the PWA. Check [Detailed configuration](#detailed-configuration) for information how to configure the contents of this file.

In your footer layout (before `</body>`):

```gotemplate
{{ partialCached "footer/service-worker.html" . }}
```

This will set up the service worker script in the footer of your website.

Notes:

- both layouts can be cached and contain no page-individual information
- check out the [todo section of the readme](#todo) for missing parts or open an issue.

#### Detailed configuration

... to be written ...

### Updating

Hugo itself will check on a regular base for updates. To force an update of this module run one of the following commands on your CLI.

```shell
hugo mod get -u github.com/dnb-org/components/pwa # or
hugo mod get -u # update all modules
```

### Other components

| Component                                                                        | Description                                                |
| :------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [auditor](https://github.com/dnb-org/components/tree/main/auditor)               |                                                            |
| [functions](https://github.com/dnb-org/components/tree/main/functions)           |                                                            |
| [netlification](https://github.com/dnb-org/components/tree/main/netlification)   | a collection of tools that optimize your site on Netlify   |
| [opensearch](https://github.com/dnb-org/components/tree/main/opensearch)         | configuration for Open Search                              |
| [pwa](https://github.com/dnb-org/components/tree/main/pwa)                       | Automatically turns your site into a PWA                   |
| [renderhooks](https://github.com/dnb-org/components/tree/main/renderhooks)       | render hooks for Markdown markup                           |
| [robots](https://github.com/dnb-org/components/tree/main/robots)                 | configure the content of your robots.txt with front matter |
| [search-algolia](https://github.com/dnb-org/components/tree/main/search-algolia) |                                                            |
| [security](https://github.com/dnb-org/components/tree/main/security)             | Security related features for Hugo.                        |
| [sitemap](https://github.com/dnb-org/components/tree/main/sitemap)               |                                                            |
| [social](https://github.com/dnb-org/components/tree/main/social)                 |                                                            |

### Other elements

[Hugo elements by David's Neighbour](https://github.com/dnb-org) are modules that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element                                                     | Description                                                                                                       |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [components](https://github.com/dnb-org/components)         | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [configurations](https://github.com/dnb-org/configurations) | A collection of configuration packages used in dnb-org                                                            |
| [debugprint](https://github.com/dnb-org/debugprint)         | Debugging for your Hugo layout files.                                                                             |
| [hooks](https://github.com/dnb-org/hooks)                   | Template hooks for Hugo themes                                                                                    |
| [libraries](https://github.com/dnb-org/libraries)           | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo.          |
| [shortcodes](https://github.com/dnb-org/shortcodes)         | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on.     |
| [testcontent](https://github.com/dnb-org/testcontent)       | Testcontent is a collection of testing content. Obviously.                                                        |
