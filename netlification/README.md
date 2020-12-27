## DNB Hugo Netlification

This is a Hugo theme component with helpers for hosting your site on [Netlify](https://www.netlify.com/). 

**Redirects:** Adds redirects via HTTP headers. This type of redirection is faster and SEO wise better than Hugo's method of adding `meta-refresh` commands in dedicated files. 

**Headers:** Adds headers that contain content security policies, caching directives and improves security and speed. 

### Installation

Step 1: enable modules in your own repository

```shell script
hugo mod init github.com/username/reponame
```

Step 2: add the module to your required modules in config.toml

```
[module]
[[module.imports]]
path = "github.com/dnb-hugo/components/netlification"
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

Careful: Do not add a second `[outputFormats]` or `[mediaTypes]` section. If you already have one of these sections then add the subitems to the existing sections. 

Add REDIR and HEADERS to your home output formats:

```toml
[outputs]
home = [ ... others ... , "REDIR", "HEADERS" ]
```

You should already have an `[output]` section, add `"REDIR", "HEADERS"` to it. Add them only to the `home` parameter.

### Configuration

#### Redirects

##### Per post

Redirection takes aliases that are defined in the pages frontmatter and creates a 301 redirect for them. This is done via HTTP headers as opposed to the redirects via HTML meta tags that Hugo is doing. This is faster and might be better for SEO.

Just keep defining them via frontmatter and let `dnb-hugo-netlification` do the rest. 

```
aliases:
    - url1
    - url2
    - url3
```

##### Additional Redirects

- A redirect for 404 errors to Hugo's 404 page (`/layouts/404.html`) - no action by you required
- A redirect for your default netlify.com URL to your live URL via data configuration in `data/dnb/netlification/config.toml`
  ```toml
  [[redirects]]
  netlify = "https://eloquent-morse-196fd2.netlify.com/"
  ```
  The URL will be redirected to your `baseURL`.
  Right now this feature requires a trailing slash on both, baseURL and netlify parameter
- Add more redirects as required. Each redirect requires a header `[[redirects]]` followed by at least the parameters `from` and `to`:
  ```toml
  [[redirects]]
  from = "/old-contact-form/"
  to = "/contact/"
  status = 200
  ```
  You can add a status property, if you wish to output any other code than 301 for the redirect. The status property is absolutely optional and should be only used for special redirect cases.

##### Disable internal alias creation in Hugo

If you are using Netlification you can speed up Hugo's page creation process a little bit by setting the config variable `disableAliases` to `true`. This will disable the default behaviour of creating an HTML file per alias to redirect via meta tags. 

#### Headers

Netlification uses considerate caching options. Stylesheets, javascripts, images and other media files are cached for a full year. Netlification expects you to use Hugo pipes to create those files, which will result in unique URLs after you change the content of the files. 

##### Content Security Policy

Have a look in [data/dnb/netlification/config.toml](https://github.com/dnb-hugo/components/blob/main/netlification/data/dnb/netlification/config.toml) or [data/dnb/netlification/sample-config.toml](https://github.com/dnb-hugo/components/blob/main/netlification/data/dnb/netlification/sample-config.toml) to learn more. 

### Sample Configuration

Add your configuration in `data/dnb/netlification/config.toml`. 

```toml
################################################################################
# |\| [- ~|~ |_ | /= | ( /\ ~|~ | () |\|
# Setup for the DNB Hugo Netlification component
################################################################################
# Copy to /data/dnb/netlification/config.toml and edit to your needs. Lines with 
# hash (#) in the beginning are comments and can be removed or will be ignored.
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

################################################################################
# Redirects
# 
# Manual redirects. Netlify redirect is for the internal netlify-URL to be 
# redirected to the live site URL
################################################################################
[redirects]
netlify = ""
```

## Updating

To update this module:

```shell
hugo mod get -u github.com/dnb-hugo/components/robots
```

To update all modules:

```shell
hugo mod get -u
```
