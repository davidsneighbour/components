## Did you restart your computer?

Update all Golang modules in your repository:

```shell
hugo mod get -u ./...
```

Cleanup module setup:

```shell
hugo mod tidy
```

Cleanup caches:

```shell
hugo mod clean
```

Then try again. If the problem persists, read on.
