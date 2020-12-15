## DNB Hugo Components / Favicon

This is a Hugo theme component with helpers to create and add favicons to your website.

### Installing

Step 1: enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/favicons"
```

The next time you run `hugo` it will download the latest version of the module.

Step 2: set up individual favicon generation:

```bash
npm install -D cli-real-favicon
```

and add to your scripts-section in package.json:

```json
{
    "scripts": {  
        "favicon-generate": "real-favicon generate faviconDescription.json ./resources/_gen/assets/faviconData.json static/images/favicon/",
        "favicon-update": "real-favicon check-for-update --fail-on-update ./resources/_gen/assets/faviconData.json"
    }
}
```

Step 3: Go to [realfavicongenerator.net](https://realfavicongenerator.net/) and set up your favicon once. After you generated your favicon (or ran with a test favicon) click the "Node CLI" tab and copy/paste the content of the configuration section (Step 2 on the website) into `faviconDescription.json` in your root directory. 

Step 4: Copy your original favicon to `assets/favicon/favicon.png`. The image should be in PNG format and as large as possible. 260x260 pixel is enough, but the more the better. Then create a folder `static/images/favicon` and you are set.

Step 5: Add the favicon partial to your site. If you are using a hook system like [garuda](https://github.com/dnb-hugo/garuda) then add the following to `layouts/partials/hooks/head-end-cached.html`:

```gotemplate
{{ partialCached "favicons.html" . }}
```

If you are not using the hook system then put this line somewhere near the end of the `<head>` section of your default layout.

Step 6: Either create your favicon-set manually by running `npm run favicon-generate` or add this command to your build process. You probably won't need to do this every time you build though. Speed... ya'know?

### Updating

To update this module:

```
hugo mod get -u github.com/dnb-hugo/components/favicon
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
