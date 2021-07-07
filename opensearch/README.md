## DNB Hugo Components / Open Search

This is a Hugo theme component that adds an open search configuration file to your website. 

### Installing

Enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/opensearch"
```

The next time you run `hugo` it will download the latest version of the module.

To make this component work you need to add some lines to your config.toml.

```toml
[outputFormats]
[outputFormats.OpenSearch]
  mediatype = "application/opensearchdescription+xml"
  baseName = "opensearch"
  isPlainText = true
  notAlternative = true

[mediaTypes]
[mediaTypes."application/opensearchdescription+xml"]
  suffixes = ["xml"]
  delimiter = ""
```

:warning: Careful: Do not add a second `[outputFormats]` or `[mediaTypes]` section. If you already have one of these sections then add the subitems to the existing sections.

Add OpenSearch to your home output formats:

```toml
[outputs]
home = [ ... others ... , "OpenSearch" ]
```

You should already have an `[output]` section, add `"OpenSearch"` to it. Add them only to the `home` parameter.

This will add a file opensearch.xml to your Website. You should now add a meta tag to your header that helps with automatically finding this file:

```gotemplate
{{ partial "head/opensearch.html" . }}
```

### Configuration

The configuration for this component is located in `data/dnb/opensearch/config.toml`. If you have no configuration file in your own repository then this component works with sensible defaults. If you want to overwrite one configuration parameter, you need to copy the entire configuration file over, because your local copy will override the default settings and leaves configuration paramters undefined.

| Parameter | Description |
| --- | --- |
| `title` | Search title. MUST be shorter than 16 characters and MUST NOT contain markup. Default is `SITETITLE`. |
| `description` | Search description, MUST be shorter than 1024 characters and MUST NOT contain markup. Default is `Search on SITETITLE`. |
| `query_url` | Url to the search result page. Replace the location of the searchterm with `{searchterms}`. Default is `search/?q={searchTerms}`. This variable will be prefixed with the `baseUrl` |
| `search_form` | Url to the search form. Default is `search/`. This variable will be prefixed with the `baseUrl` and is used by Firefox to link to the page with the search form. |
| `output_encoding` | Encoding of the output of the search. Default is `UTF-8`. |
| `input_encoding` | Encoding of the input of the search. Default is `UTF-8`. |
| `enable_autoupdate` | Enable auto update for the search update. Default is `true`. At this time, addons.mozilla.org (AMO) doesn't support automatic updating of OpenSearch plugins. If you want to put your search plugin on AMO, then set this parameter to `false`.  |
| `hookLink` | Link to the component's README file for warnings and errors. |

### Updating

To update this module:

```
hugo mod get -u github.com/dnb-hugo/components/opensearch
```

To update all modules:

```
hugo mod get -u
```

### Other components in DNB Hugo components

| Component | Description |
| :--- | :--- |
| [auditor](https://github.com/dnb-hugo/components/tree/main/auditor) | |
| [favicon](https://github.com/dnb-hugo/components/tree/main/favicon) | |
| [functions](https://github.com/dnb-hugo/components/tree/main/functions) | |
| [netlification](https://github.com/dnb-hugo/components/tree/main/netlification) | a collection of tools that optimize your site on Netlify |
| [opensearch](https://github.com/dnb-hugo/components/tree/main/opensearch) | configuration for Open Search |
| [pwa](https://github.com/dnb-hugo/components/tree/main/pwa) | Automatically turns your site into a PWA |
| [renderhooks](https://github.com/dnb-hugo/components/tree/main/renderhooks) | render hooks for Markdown markup |
| [robots](https://github.com/dnb-hugo/components/tree/main/robots) | configure the content of your robots.txt with front matter |
| [search-algolia](https://github.com/dnb-hugo/components/tree/main/search-algolia) | |
| [search-lunrjs](https://github.com/dnb-hugo/components/tree/main/search-lunrjs) | |
| [sitemap](https://github.com/dnb-hugo/components/tree/main/sitemap) | |
| [social](https://github.com/dnb-hugo/components/tree/main/social) | |
| [welcomments](https://github.com/dnb-hugo/components/tree/main/welcomments) | |

### Other elements in DNB Hugo

[DNB Hugo](https://github.com/dnb-hugo) are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-hugo/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-hugo/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [configurations](https://github.com/dnb-hugo/configurations) | A collection of configuration packages used in dnb-hugo |
| [debug](https://github.com/dnb-hugo/debug) | Debugging for your Hugo layout files. |
| [hooks](https://github.com/dnb-hugo/hooks) | Template hooks for Hugo themes |
| [libraries](https://github.com/dnb-hugo/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-hugo/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-hugo/testcontent) | Testcontent is a collection of testing content. Obviously. |
