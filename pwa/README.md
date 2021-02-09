## DNB Hugo Component / PWA

This is a Hugo theme component with helpers to convert your static [Hugo](https://gohugo.io/) website into a PWA.

This is work in progress and while many parts are already working, some changes to the setup will occur. Please watch the releases of this repository to be alerted about changes.

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
path = "github.com/dnb-hugo/components/pwa"
disabled = false
```

or in `config/_default/module.toml`:

```toml
[[imports]]
path = "github.com/dnb-hugo/components/pwa"
disabled = false
```

The next time you run `hugo` it will download the latest version of this module.

To make this component work you need to add some new `outputFormats` to your configuration in `config.toml`: 

```toml
[outputFormats]

[outputFormats.manifest]
mediaType = "text/webmanifest"
baseName = "manifest"
isPlainText = true
notAlternative = true
```

or in your `config/_default/outputformats.toml`:

```toml
[manifest]
mediaType = "text/webmanifest"
baseName = "manifest"
isPlainText = true
notAlternative = true
```

Add the manifest to your _home_ output formats in `config.toml`:

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
hugo mod get -u github.com/dnb-hugo/components/robots
hugo mod get -u # update all modules
```

### ToDo

- Improvements for easier "drop in" to other websites/modules
- Add layout system for offline page creation
- Add configuration system
- make sure, that Lighthouse shows full PWA capabilities (currently only installability shows up)
- improve configuration of implemented functionality in the service worker 
- add detailed documentation for all configuration options

### Available modules and usage instruction

| Component | Description |
| :--- | :--- |
| [favicon](https://github.com/dnb-hugo/components/tree/main/favicon) ||
| [functions](https://github.com/dnb-hugo/components/tree/main/functions) ||
| [humans.txt](https://github.com/dnb-hugo/components/tree/main/humans.txt) ||
| [netlification](https://github.com/dnb-hugo/components/tree/main/netlification) | a collection of tools that optimize your site on Netlify |
| [opensearch](https://github.com/dnb-hugo/components/tree/main/opensearch) ||
| [pwa](https://github.com/dnb-hugo/components/tree/main/pwa) ||
| [renderhooks](https://github.com/dnb-hugo/components/tree/main/renderhooks) | render hooks for Markdown markup |
| [robots](https://github.com/dnb-hugo/components/tree/main/robots) | configure the content of your robots.txt with front matter |
| [search-algolia](https://github.com/dnb-hugo/components/tree/main/search-algolia) ||
| [search-lunrjs](https://github.com/dnb-hugo/components/tree/main/search-lunrjs) ||
| [sitemap](https://github.com/dnb-hugo/components/tree/main/sitemap) ||
| [social](https://github.com/dnb-hugo/components/tree/main/social) ||

### Other elements in DNB Hugo

DNB Hugo are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-hugo/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-hugo/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [libraries](https://github.com/dnb-hugo/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-hugo/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-hugo/testcontent) | Testcontent is a collection of testing content. Obviously. |
