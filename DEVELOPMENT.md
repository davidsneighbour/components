# Development notes

## How to add a library to this module collection

### Initialize module

```bash
mkdir newmodulename && cd newmodulename
hugo mod init github.com/davidsneighbour/dnb-hugo-libs/newmodulename
npm init
```

### Add JS library to config.toml in newmodulename

```toml
[module]
  [[module.imports]]
    path = "github.com/username/reponame"
```

### Retrieve specific version

```bash
cd newmodulename
hugo mod get github.com/username/reponame@v1.0.7
```

### Update everything

```bash
cd newmodulename
hugo mod get -u
```

### Clean up go.mod/go.sum

```bash
cd newmodulename
hugo mod clean && hugo mod tidy
```

### Pack it, ship it

```bash
cp package-template.json newmodulename/package.json
// replace DESCRIPTION and MODULENAME in the new package.json
npm run release-major (first release, 1.0.0)
// subsequent releases:
npm run release
```
