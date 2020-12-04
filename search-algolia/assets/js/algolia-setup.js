{{- with (index $.Site.Data.dnb "search-algolia").configuration.appId -}}
const appId = "{{ . }}";
{{ else }}
{{ errorf "appId parameter for search-algolia undefined" }}
{{ end -}}
{{ with (index $.Site.Data.dnb "search-algolia").configuration.apiKey -}}
const apiKey = "{{ . }}";
{{ else }}
{{ errorf "apiKey parameter for search-algolia undefined" }}
{{ end -}}
{{ with (index $.Site.Data.dnb "search-algolia").configuration.indexName -}}
const indexName = "{{ . }}";
{{ else }}
{{ errorf "indexName parameter for search-algolia undefined" }}
{{ end -}}
{{ with (index $.Site.Data.dnb "search-algolia").configuration.numberLocale -}}
const numberLocale = "{{ . | default "en" }}";
{{ end -}}
