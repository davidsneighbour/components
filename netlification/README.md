# DNB Hugo Netlification

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
path = "github.com/davidsneighbour/dnb-hugo/netlification"
```

The next time you run hugo it will download the latest version of the module.

Step 3: To make this component work you need to add some lines to your config.toml. 

```toml
[outputFormats]

[outputFormats.REDIR]
  mediatype = "text/netlify"
  baseName = "_redirects"
  isPlainText = true
  notAlternative = true

[outputFormats.HEADERS]
  mediatype = "text/netlify"
  baseName = "_headers"
  isPlainText = true
  notAlternative = true

[mediaTypes]

[mediaTypes."text/netlify"]
  suffixes = [""]
  delimiter = ""
```

Add REDIR and HEADERS to your home output formats:

```toml
[outputs]
home = [ ... others ... , "REDIR", "HEADERS" ]
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

### Content Security Policy

A quite new feature. Have a look in [data/netlification.toml](https://github.com/davidsneighbour/dnb-hugo/blob/main/netlification/data/netlification-sample.toml) to learn more. 

## Sample Configuration

```toml
################################################################################
# |\| [- ~|~ |_ | /= | ( /\ ~|~ | () |\|
# Setup for the DNB Hugo Netlification module
################################################################################
# Copy to /data/netlification.toml and edit to your needs. Lines with # in the
# beginning are comments and can be removed.
################################################################################

################################################################################
# Caching Setup
################################################################################
[cache.duration]
################################################################################
# set the amount of years/months/days that static assets should be cached for
#
# remove to have everything cached for 1 year
################################################################################
years = 1
months = 0
days = 0

################################################################################
# Content Security Policy Setup
################################################################################
[csp]
################################################################################
# see https://content-security-policy.com/ for info about CSP
# see https://report-uri.com/account/setup/ for a reporting tool
################################################################################
# Reporting is a feature of CSP that sends the evaluation of CSP lines to a
# server address. This is useful if you want to see, what activities are blocked
# due to your resulting settings.
# Set reportOnly to true to leave the "normal" website running as if no CSP is
# in place. This will show you what the current setup might prohibit and lets
# you fine tune the ruleset. Comment out or remove once you are done
# reportOnly = true
# Reporting URI - if reportOnly is not set it will report fails to the URI
reportUri = ""
# Force https even if http links are called
upgradeInsecureRequests = true
################################################################################
# Rulesets
#
# Each CSP ruleset (also future rules that are not in this sample yet) can be
# added by camelcasing the rule (default-src > defaultSrc etc.). Then add the
# hosts as an array. Keywords like self, eval-inline etc. need to be set in
# additional hyphens ("'self'").
#
# You can add every CSP rule type by using camel case names instead of dashed
# names. iframeSrc instead of iframe-src, scriptSrc instead of script-src etc.
#
# The default setting is to accept only local scripts/sources
################################################################################
defaultSrc = [
    "'self'"
]
```
