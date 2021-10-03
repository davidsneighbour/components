const defaultStandardVersion = require("@dnb-org/standard-version-config");

const localStandardVersion = {
  // for available options see https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
  scripts: {
    prerelease: "./.bin/release-hook-prerelease.sh",
  },
  bumpFiles: [
    { filename: ".version", type: "plain-text" },
    { filename: "package.json", type: "json" },
    { filename: "auditor/package.json", type: "json" },
    { filename: "functions/package.json", type: "json" },
    { filename: "netlificationpackage.json", type: "json" },
    { filename: "opensearch/package.json", type: "json" },
    { filename: "pwa/package.json", type: "json" },
    { filename: "renderhooks/package.json", type: "json" },
    { filename: "robots/package.json", type: "json" },
    { filename: "search-algolia/package.json", type: "json" },
    { filename: "security/package.json", type: "json" },
    { filename: "sitemap/package.json", type: "json" },
    { filename: "social/package.json", type: "json" },
  ],
  types: [
    { type: "build", section: "Build System" },
    { type: "chore", section: "Chore" },
    { type: "ci", section: "CI" },
    { type: "component", section: "Components" },
    { type: "docs", section: "Documentation" },
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "perf", section: "Performance" },
    { type: "refactor", section: "Refactors" },
    { type: "revert", section: "Reverts" },
    { type: "style", section: "Styling" },
    { type: "test", section: "Tests" },
    { type: "theme", section: "Theme" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
