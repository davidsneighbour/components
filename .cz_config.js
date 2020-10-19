'use strict';

// see https://github.com/leonardoanalista/cz-customizable

module.exports = {

  types: [
    { value: 'feat',     name: 'feat:     A new feature' },
    { value: 'fix',      name: 'fix:      A bug fix' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'tests',    name: 'tests:    Adding missing tests' },
    { value: 'chore',    name: 'chore:    Changes to the build process or documentation generation' },
    { value: 'docs',     name: 'docs:     Documentation' }
  ],

  messages: {
    type: 'Select the type of change that you are committing:',
    scope: 'Denote the SCOPE of this change (optional):',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: [
    'feat',
    'fix'
  ],

  appendBranchNameToCommitMessage: true,
  breakingPrefix: 'BREAKING: ',
  footerPrefix: 'ISSUES CLOSED: ',

  subjectLimit: 100,
  breaklineChar: '|'

};
