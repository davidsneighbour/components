# dnb-hugo-netlification

This is a Hugo theme component with helpers for Netlify redirects and headers. This type of redirection is faster and SEO wise better than Hugo's method of adding `meta-refresh` commands. The default headers added by this component contain proper content security policies, caching directives and improve security. 

## Installing

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/davidsneighbour/dnb-hugo/robots"
```

The next time you run hugo it will download the latest version of the module.

Step 3: To make this component work you need to add some lines to your config.toml. This is not too complicated, but you need to be careful where to add them. Don't add these lines below the `[params]` or any other section. 

```
[outputs]
home = [ "HTML", "RSS", "REDIR", "HEADERS" ]
```

You already should have an `[output]` section, add `"REDIR", "HEADERS"` to it.

## Updating

To update this module:

```
hugo mod get -u github.com/davidsneighbour/dnb-hugo/robots
```

To update all modules:

```
hugo mod get -u
```

## Redirects

### Per post

Redirection takes aliases that are defined in the pages frontmatter and creates a 301 redirect for them. This is done via HTTP headers as opposed to the redirects via HTML meta tags that Hugo is doing. This is faster and might be better for SEO.

Just keep defining them via frontmatter and let `dnb-hugo-netlification` do the rest. 

```
aliases:
    - url1
    - url2
    - url3
```

### Additional Redirects

- A redirect for 404 errors to Hugo's 404 page (`/layouts/404.html`) - no action by you required
- A redirect for your default netlify.com URL to your live URL via config parameter:
  ```
  [params]
  [params.redirects]
  netlify = "https://eloquent-morse-196fd2.netlify.com/"
  ```
  The URL will be redirected to your baseURL.
  Right now this feature requires a trailing slash on both, baseURL and netlify parameter

## Headers

Netlification uses considerate caching options. Stylesheets, javascripts, images and other media files are cached for a full year. Netlification expects you to use Hugo pipes to create those files, which will result in unique URLs after you change the content of the files. 

## robots.txt

__(new in 2020.1.2)__

Netlification creates a robots.txt file. The default robots.txt without any interactions looks like the following sample:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

Where `yourdomain.com` is the domain name configured in `baseURL` in your configuration. If you want
to explicitly remove a page from being allowed for robots then add front matter to the page as follows:

```
robot_disallow: true
```

and Netlification will add a line `Disallow: URL` to the robots.txt.

## Note

This is work in progress, so some points might not work with your site yet. 
