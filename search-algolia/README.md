# DNB Hugo Search Algolia

This is a Hugo theme component with helpers to add an Algolia search to your website.

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/netlification"
```

The next time you run hugo it will download the latest version of the module.

Step 3: To make this component work you need to add some lines to your config.toml. 

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

Step 4: Adding the search to your layouts:

Search page content:

```gotemplate
{{< search >}}
```

Step 5: Add your items to the search index

Once you configured your search index at algolia you can add new items in your deploy script. Add the following lines to your package.json (the sections might exist, so don't re-create them). After running `hugo` to create your site run `npm run algolia`:

```
"scripts": {
    "algolia": "hugo --quiet && atomic-algolia && rm -rf public"
},
"dependencies": {
    "atomic-algolia": "0.3.19"
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
