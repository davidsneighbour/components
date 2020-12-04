# DNB Hugo Favicon

This is a Hugo theme component with helpers to create and add favicons to your website.

## Installing

Step 1: enable modules in your own repository and add this module to your required modules in config.toml.

```shell script
hugo mod init github.com/username/reponame
```

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/favicons"
```

The next time you run hugo it will download the latest version of the module.

Step 2: set up individual favicon generation

```shell script
npm install -D cli-real-favicon
```

```json
{
    "scripts": {  
        "favicon-generate": "real-favicon generate faviconDescription.json ./resources/_gen/assets/faviconData.json static/images/favicon/",
        "favicon-update": "real-favicon check-for-update --fail-on-update ./resources/_gen/assets/faviconData.json"
    }
}
```

Step 3: Go to [realfavicongenerator.net](https://realfavicongenerator.net/) and set up your favicon once. After you generated your favicon (or ran with a test favicon) click the "Node CLI" tab and copy/paste the content of the configuration section (Step 2 on the website) into `faviconDescription.json` in your root directory. 

Step 4: Copy your original favicon to `assets/favicon/favicon.png`. The image should be in PNG format and as large as possible. 260x260 pixel is enough, but the more the better. Then create a folder `static/images/favicon` and you are set.

Step 5: Add the favicon partial to your site. If you are using a hook system like dnb-hugo-garuda then add the following to `layouts/partials/hooks/head-end-cached.html`:

```gotemplate
{{ partialCached "favicons.html" . }}
```

If you are not using the hook system then put this line somewhere near the end of the `<head>` section of your default layout.

Step 6: Either create your favicon-set manually by running `npm run favicon-generate` or add this command to your build process. 

## Updating

To update this module:

```
hugo mod get -u github.com/dnb-hugo/components/robots
```

To update all modules:

```
hugo mod get -u
```

## Note

This is work in progress, so some points might not work with your site yet. 
