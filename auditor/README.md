## Headers CT

See [CT.css](https://github.com/csswizardry/ct) for details. Enable this feature only on development setup to see information about optimisation approaches for your header tag order. 

```toml
[params.dnb.auditor]
ct = true
```

then add somewhere in the foooter of your base template:

```gotemplate
{{- partialCached "ct/ct.html" . -}}
```
