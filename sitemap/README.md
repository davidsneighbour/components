## DNB Hugo Components / Sitemap

This is a Hugo theme component with layouts to add a configurable sitemap to your website. Hugo itself has internal templates that add sitemaps, but this component has additional setup options per page.

### Installing

Step 1: enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-org/components/sitemap"
```

The next time you run `hugo` it will download the latest version of the module.

### Updating

```shell
hugo mod get -u github.com/dnb-org/components/robots
hugo mod get -u # update all modules
```

### Usage

There is no need to configure anything if you don't have any special needs. Add the module to your repository structure and run it. Once you ran `hugo` you will find a file `sitemap.xml` in your `public` directory. This is the file you want to submit to search engines. 

If you are using the [Robots component of DNB Hugo](https://github.com/dnb-org/components/tree/main/robots), then your resulting `robots.txt` will have a pointer to the sitemap file as well.

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
