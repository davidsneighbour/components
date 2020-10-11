# dnb-hugo

David's Neighbour's repo of Hugo goodness

## Available modules and usage instruction

- [Netlification](/davidsneighbour/dnb-hugo/tree/main/packages/netlification): a collection of tools that optimize your site on Netlify
- [Shortcodes](/davidsneighbour/dnb-hugo/tree/main/packages/shortcodes): David's Neighbour's Hugo shortcodes
- [Robots](/davidsneighbour/dnb-hugo/tree/main/packages/robots): configure the content of your robots.txt with front matter

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add one of the modules to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/packages/netlification"
```

The next time you run hugo it will download the latest version of the hugo-dnb.

## Updating

To update one module:

```
hugo mod get -u github.com/davidsneighbour/dnb-hugo/packages/netlification
hugo mod get -u github.com/davidsneighbour/dnb-hugo/packages/robots
hugo mod get -u github.com/davidsneighbour/dnb-hugo/packages/shortcodes
```

To update all:

```
hugo mod get -u
```
