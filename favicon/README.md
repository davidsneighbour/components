# DNB Hugo Favicon

This is a Hugo theme component with helpers to create and add favicons to your website.

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/favicons"
```

The next time you run hugo it will download the latest version of the module.

Step 3: set up individual favicon

```shell script
npm install -D cli-real-favicon
```

Step 4: setup npm scripts to (re)create favicons. Add the following lines to your package.json:

```json
{
    "scripts": {  
        "favicon-create": "real-favicon generate faviconDescription.json ./resources/_gen/assets/faviconData.json static/images/favicon/",
        "favicon-update": "real-favicon check-for-update --fail-on-update ./resources/_gen/assets/faviconData.json"
    }
}
```

## Updating

To update this module:

```
hugo mod get -u github.com/davidsneighbour/dnb-hugo/robots
```

To update all modules:

```
hugo mod get -u
```

## Note

This is work in progress, so some points might not work with your site yet. 
