# dnb-hugo-shortcodes

Shortcodes I use in multiple themes for Hugo

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/packages/shortcodes"
```

The next time you run hugo it will download the latest version of the module.

## Updating

To update this module:

```
hugo mod get -u github.com/davidsneighbour/dnb-hugo/packages/shortcodes
```

To update all modules:

```
hugo mod get -u
```

## Overriding shortcodes

To override shortcodes just add a file in your own shortcode directory with the name you want to replace.

[Read more about theme components](https://gohugo.io/themes/theme-components/).

## Shortcodes

Documentation of the shortcodes this repository implements is forthcoming.
