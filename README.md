# dnb-hugo-netlification

This is a Hugo theme component with helpers for Netlify redirects and headers. This type of redirection is faster and SEO wise better than Hugo's method of adding `meta-refresh` commands. The default headers added by this component contain proper content security policies, caching directives and improve security. 

## Installation

To make this component work you need to add some lines to your config.toml. This is not too complicated, but you need to be careful where to add them. Don't add these lines below the `[params]` or any other section. 

```
theme = ["dnb-hugo-netlification", "your-theme"]

[outputs]
home = [ "HTML", "RSS", "REDIR", "HEADERS" ]
```

1. Add `dnb-hugo-netlification` at the left side of your theme setup. 
2. You already have the `[output]` section, add `"REDIR", "HEADERS"` to it.
3. Done.

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

## Note

This is work in progress, so some points might not work with your site yet. 
