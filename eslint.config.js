import nxPlugin from '@nx/eslint-plugin';

export default [
  {
    plugins: {
      '@nx': nxPlugin
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*']
            }
          ]
        }
      ]
    }
  },
  {
    files: ['packages/core/**/*.ts', 'packages/core/**/*.js'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['react', '@angular/*'],
              message: 'packages/core cannot depend on react or @angular/*'
            }
          ]
        }
      ]
    }
  }
];
