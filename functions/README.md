## DNB Hugo Component / Functions

This is a Hugo theme component with helper functions for several other components.

### Installing

First enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/functions"
```

The next time you run `hugo` it will download the latest version of the module.

### Working principle

While being named `functions` this component adds merely partials that return values. In these partials calculations are done, so we might un-nerdily call them functions. 

### Available Functions

#### getReadingTime

```gotemplate
{{ $readingtime := partial "func/getReadingTime" . }}
```

- Context: a dictionary containing at least `.Content` to be counted. 
- Returns: a dictionary with `minutes` (int), `seconds` (int), `words` (int)
- Configuration options in `data/functions/readingtime/config.toml`:
  - wordsperminute (default 220.0) - Words that are read per minute. This must be a float value, not an integer! (no quotation marks and at least ending in .0 to typecast it as float)
  - minutesandseconds (default true) - should the function return minutes and seconds or only minutes (the latter will be rounded up for the seconds in addition)
  
### Update

```shell
hugo mod get -u github.com/dnb-hugo/components/functions # update this module
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
