// feat - is for adding a new feature
// fix - is for fixing a bug
// refactor -  is for changing code for performance or convenience purpose (e.g. readibility)
// chore - is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 150],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 150],
		'header-max-length': [2, 'always', 150],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'chore']],
	},
}
