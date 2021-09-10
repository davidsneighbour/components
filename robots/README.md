## DNB Hugo Components / Robots

Configuration for a customized robots.txt.

### Installing

Enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-org/components/robots"
```

The next time you run `hugo` it will download the latest version of the module.

### Updating

```shell
hugo mod get -u github.com/dnb-org/components/robots
hugo mod get -u # update all modules
```

### Usage

This component can be used as drop-in without much configuration. However, robots.txt generation needs to be enabled in your configuration, eg. config.toml:

```toml
enableRobotsTXT = true
```

You can add configuration parameters per page in the frontmatter:

```yaml
robotsdisallow: true
```

This will add a `Disallow` line for the current URL. Please note that with clean URLs this will disallow bot-access for all sub-folders and sub-urls of the current item. 

### Other components in DNB Hugo components

-   [favicon](https://github.com/dnb-org/components/tree/main/favicon)
-   [functions](https://github.com/dnb-org/components/tree/main/functions)
-   [netlification](https://github.com/dnb-org/components/tree/main/netlification): a collection of tools that optimize your site on Netlify
-   [renderhooks](https://github.com/dnb-org/components/tree/main/renderhooks): render hooks for Markdown markup
-   [robots](https://github.com/dnb-org/components/tree/main/robots): configure the content of your robots.txt with front matter
-   [search-algolia](https://github.com/dnb-org/components/tree/main/search-algolia)
-   [sitemap](https://github.com/dnb-org/components/tree/main/sitemap)

### Other elements in DNB Hugo

[DNB Hugo](https://github.com/dnb-org) are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-org/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-org/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [libraries](https://github.com/dnb-org/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-org/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-org/testcontent) | Testcontent is a collection of testing content. Obviously. |
