module.exports = {
    defaultSeverity: 'warning',
    rules: {
        //  Error catching
        'color-no-invalid-hex': [
            true,
            {
                severity: 'error'
            }
        ],

        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,

        'function-calc-no-invalid': [
            true,
            {
                severity: 'error'
            }
        ],
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,

        'string-no-newline': true,

        'unit-no-unknown': true,

        'property-no-unknown': true,

        'keyframe-declaration-no-important': true,

        'declaration-block-no-duplicate-properties': true,

        'declaration-block-no-shorthand-property-overrides': true,

        'block-no-empty': true,

        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,

        'media-feature-name-no-unknown': true,

        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'at-root',
                    'debug',
                    'each',
                    'else',
                    'error',
                    'for',
                    'function',
                    'if',
                    'include',
                    'mixin',
                    'return',
                    'warn'
                ]
            }
        ],

        'comment-no-empty': true,

        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': [
            true,
            {
                severity: 'error'
            }
        ],
        'no-invalid-double-slash-comments': true,

        //  Language features
        'color-named': [
            'never',
            {
                ignore: ['inside-function']
            }
        ],

        'number-max-precision': 3,
        // 'unit-blacklist': ['px'],
        'shorthand-property-no-redundant-values': true,

        'value-no-vendor-prefix': true,

        'property-blacklist': ['background'],
        'property-no-vendor-prefix': true,

        'declaration-block-single-line-max-declarations': 1,

        'selector-max-empty-lines': 0,
        'selector-max-universal': 2,
        'selector-no-vendor-prefix': true,

        'media-feature-name-no-vendor-prefix': true,

        'at-rule-no-vendor-prefix': true,

        'no-unknown-animations': true,

        // Code style
        'color-hex-case': 'lower',
        'color-hex-length': 'long',

        'font-family-name-quotes': 'always-where-recommended',
        'font-weight-notation': [
            'numeric',
            {
                ignore: ['relative']
            }
        ],

        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',

        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,

        'string-quotes': 'single',

        'length-zero-no-unit': true,

        'unit-case': 'lower',

        'value-keyword-case': 'lower',

        'value-list-comma-space-after': 'always',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-comment', 'after-custom-property', 'first-nested'],
                ignore: ['inside-single-line-block']
            }
        ],

        'property-case': 'lower',

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-before': 'never',

        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',

        'block-closing-brace-space-after': 'always-single-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',

        'rule-empty-line-before': 'always-multi-line',

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-range-operator-space-before': 'always',
        'media-feature-range-operator-space-after': 'always',

        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always',
        'media-query-list-comma-space-before': 'never',

        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',

        'comment-whitespace-inside': 'always',

        'indentation': 4,
        'linebreaks': 'unix',
        'max-empty-lines': 3,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'no-empty-first-line': true
    }
};
