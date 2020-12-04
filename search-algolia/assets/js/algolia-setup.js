{{ $algolia := index site.Data.dnb "search-algolia" }}

{{- with $algolia.configuration.appId -}}
const appId = "{{ . }}";
{{ else }}
{{ errorf "appId parameter for search-algolia undefined" }}
{{ end -}}
{{ with $algolia.configuration.apiKey -}}
const apiKey = "{{ . }}";
{{ else }}
{{ errorf "apiKey parameter for search-algolia undefined" }}
{{ end -}}
{{ with $algolia.configuration.indexName -}}
const indexName = "{{ . }}";
{{ else }}
{{ errorf "indexName parameter for search-algolia undefined" }}
{{ end -}}
{{ with $algolia.configuration.numberLocale -}}
const numberLocale = "{{ . | default "en" }}";
{{ end -}}
