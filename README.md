# dnb-hugo-netlification

Theme component with Netlify helpers. Redirection (faster and SEO wise better than Hugo's (we still love you Hugo)). Headers (content security policies, caching, security). And more (soon).

# Installation

To make this component work you need to add some lines to your config.toml. This is not too hard, but you should be careful where to add.

```
theme = ["dnb-hugo-netlification", "your-theme"]

[outputs]
home = [ "HTML", "RSS", "REDIR", "HEADERS" ]
```

1. `Add "dnb-hugo-netlification"` at the left side of your theme setup. 
2. You already have the `[output]` section, add `"REDIR", "HEADERS"` to it.
3. Done.

# Individual Setup

## Per post

Redirection takes aliases that are defined in the pages frontmatter and creates a 301 redirect for them. This is done via HTTP headers as opposed to the redirects via HTML meta tags that Hugo is doing. This is faster and better for SEO (which is an opinion, probably not provable).

Just keep defining them via frontmatter and let `dnb-hugo-netlification` do the rest. 

```
aliases:
    - url1
    - url2
    - url3
```

## Additional Redirects

- A redirect for 404 errors to Hugo's 404 page (/layouts/404.html)
- A redirect for your netlify URL to your live URL (double content... baaaad) via config parameter:
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
