## DNB Hugo Component / Search Algolia

This is a Hugo theme component with helpers to add an [Algolia powered search](https://www.algolia.com/) to your website.

### Installing

First enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/search-algolia"
```

The next time you run `hugo` it will download the latest version of the module.

To make this component work you need to add some lines to your config.toml. 

```toml
[outputFormats]

[outputFormats.Algolia]
baseName = "algolia"
isPlainText = true
mediaType = "application/json"
notAlternative = true
```

Add Algolia to your home output formats:

```toml
[outputs]
home = [ ... others ... , "Algolia" ]
```

You already should have an `[output]` section, add `"Algolia"` to it. Do not add it anywhere other than in the `home` directive.

Adding the search to your content

`content/search/index.md`

```markdown
---
title: Search
description: Search in all articles
url: /search
---

{{< search >}}
```

Add your items to the search index

Install `atomic-algolia`:

```shell
npm install -D atomic-algolia
```

Once you configured your search index at algolia you can add new items in your deploy script. Add the following lines to your package.json (the sections might exist, so don't re-create them). 

Add a script to your package.json configuration

```json
{
  "scripts": {
    "algolia": "hugo --quiet && atomic-algolia && rm -rf public"
  }
}
```

Add the index creation to your deployment process:

```shell
npm run algolia
```

### Updating

```shell
hugo mod get -u github.com/dnb-hugo/components/robots
hugo mod get -u # update all modules
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
