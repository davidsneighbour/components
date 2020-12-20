## DNB Hugo Components / +++pLACEHOLDER+++

This is a Hugo theme component that helps with ...

### Installing

Enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/+++PLACEHOLDER+++"
```

The next time you run `hugo` it will download the latest version of the module.

### Updating

To update this module:

```
hugo mod get -u github.com/dnb-hugo/components/+++PLACEHOLDER+++
```

To update all modules:

```
hugo mod get -u
```

### Other components in DNB Hugo components

-   [favicon](https://github.com/dnb-hugo/components/tree/main/favicon)
-   [functions](https://github.com/dnb-hugo/components/tree/main/functions)
-   [netlification](https://github.com/dnb-hugo/components/tree/main/netlification): a collection of tools that optimize your site on Netlify
-   [renderhooks](https://github.com/dnb-hugo/components/tree/main/renderhooks): render hooks for Markdown markup
-   [robots](https://github.com/dnb-hugo/components/tree/main/robots): configure the content of your robots.txt with front matter
-   [search-algolia](https://github.com/dnb-hugo/components/tree/main/search-algolia)
-   [sitemap](https://github.com/dnb-hugo/components/tree/main/sitemap)

### Other elements in DNB Hugo

[DNB Hugo](https://github.com/dnb-hugo) are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-hugo/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-hugo/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [libraries](https://github.com/dnb-hugo/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-hugo/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-hugo/testcontent) | Testcontent is a collection of testing content. Obviously. |
