# dnb-hugo-sitemap

A sitemap template for Hugo

## Installing

Step 1: enable modules in your own repository (skip if already done)

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add this module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/sitemap"
```

The next time you run hugo it will download the latest version of the module.

## Updating

To update this module:

```
hugo mod get -u github.com/davidsneighbour/dnb-hugo/sitemap
```

To update all modules:

```
hugo mod get -u ./...
```

## Usage

There is no need to configure anything if you don't have any special needs. Add the module to your repository structure and run it. Once you ran `hugo` you will find a file `sitemap.xml` in your `public` directory. This is the file you want to submit to search engines. 

If you are using the Robots module of this repository, then your resulting `robots.txt` will have a pointer to the sitemap file as well.

