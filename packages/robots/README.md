# dnb-hugo-robots

Configuration for a customized robots.txt

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/packages/robots"
```

The next time you run hugo it will download the latest version of the module.

## Updating

To update this module:

```
hugo mod get -u github.com/davidsneighbour/dnb-hugo/packages/robots
```

To update all modules:

```
hugo mod get -u
```
