## DNB Hugo Component / Welcomments

This is a Hugo theme component with helpers to add the [Welcomments](https://welcomments.io/) system to your Hugo website.

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
path = "github.com/dnb-org/components/welcomments"
disabled = false
```

or in `config/_default/module.toml`:

```toml
[[imports]]
path = "github.com/dnb-org/components/welcomments"
disabled = false
```

The next time you run `hugo` it will download the latest version of this module.

#### Setup layouts

In your single layout file(s) add the following at the place where you wish to display your comments:

```gotemplate
{{ partial "welcomments/comments" (dict "context" . "websiteId" site.Params.welcommentsId) }}
```

#### Setup Welcomments

On the welcomments website add a new site. This will create a PR in your websites repository. You can close this PR without merging it. Then go back to the welcomments website and copy the Website ID from the settings section. In your configuration under `[params]` add the following parameter with that ID:

```toml
[params]
welcommentsId = "welcomments id"
```

Your comments are good to go. Give it a try!

Note: Currently you have to contact Iiro at welcomments.io to set the data directory path to another directory. I have set it hard to `data/welcomments/comments` here, because it clashes with all my other modules for Hugo. If you are using only welcomments then set `dataDirectory` to "welcomments" and go with it. If you are using any other plugin or module that is mounting inside of the data directory then you need to change the path to the data directory.

#### Detailed configuration

The system has an easy overridable data configuration setup with sensible defaults for unexperienced users. If you wish to change the setup, then copy the complete file `data/dnb/welcomments/config.toml` into your own data folder (at the same location, `data/dnb/welcomments/config.toml`).

The available options are explained in that file itself. 

### Updating

Hugo itself will check on a regular base for updates. To force an update of this module run one of the following commands on your CLI. 

```shell
hugo mod get -u github.com/dnb-org/components/welcomments
hugo mod get -u # update all modules
```

### Available modules and usage instruction

| Component | Description |
| :--- | :--- |
| [favicon](https://github.com/dnb-org/components/tree/main/favicon) ||
| [functions](https://github.com/dnb-org/components/tree/main/functions) ||
| [humans.txt](https://github.com/dnb-org/components/tree/main/humans.txt) ||
| [netlification](https://github.com/dnb-org/components/tree/main/netlification) | a collection of tools that optimize your site on Netlify |
| [opensearch](https://github.com/dnb-org/components/tree/main/opensearch) ||
| [pwa](https://github.com/dnb-org/components/tree/main/pwa) ||
| [renderhooks](https://github.com/dnb-org/components/tree/main/renderhooks) | render hooks for Markdown markup |
| [robots](https://github.com/dnb-org/components/tree/main/robots) | configure the content of your robots.txt with front matter |
| [search-algolia](https://github.com/dnb-org/components/tree/main/search-algolia) ||
| [search-lunrjs](https://github.com/dnb-org/components/tree/main/search-lunrjs) ||
| [sitemap](https://github.com/dnb-org/components/tree/main/sitemap) ||
| [social](https://github.com/dnb-org/components/tree/main/social) ||

### Other elements in DNB Hugo

DNB Hugo are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-org/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-org/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [libraries](https://github.com/dnb-org/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-org/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-org/testcontent) | Testcontent is a collection of testing content. Obviously. |
