# DNB Hugo Search Algolia

This is a Hugo theme component with helpers to add an Algolia search to your website.

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/netlification"
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

Step 4: Adding the search to your content

`content/search/index.md`

```markdown
---
title: Search
description: Search in all articles
url: /search
---

{{< search >}}
```

Step 5: Add your items to the search index

Install `atomic-algolia`:

```shell
npm install -D atomic-algolia
```

Once you configured your search index at algolia you can add new items in your deploy script. Add the following lines to your package.json (the sections might exist, so don't re-create them). 

Add a script to your package.json configuration

```json
{
  "scripts": {
    "algolia": "hugo --quiet && atomic-algolia && rm -rf public"
  }
}
```

Add the index creation to your deployment process:

```shell
npm run algolia
```

## Updating

```shell
hugo mod get -u github.com/dnb-hugo/components/robots
hugo mod get -u # update all modules
```
