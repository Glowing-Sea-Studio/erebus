/**
 * `light.json` and `dark.json` define the same semantic token paths
 * (e.g. `color.bg.canvas`) with different values on purpose — each
 * theme build below includes only ONE of them as a source, so there
 * is never a same-path collision inside a single Style Dictionary run.
 * See build.mjs, which runs this config once per theme and merges the
 * resulting CSS into a single dist/css/variables.css.
 */
export function getConfig(theme) {
  return {
    source: [
      'src/component/**/*.json',
      'src/primitive/**/*.json',
      'src/semantic/shared.json',
      `src/semantic/${theme}.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        prefix: 'erb',
        files: [
          {
            destination: `variables-${theme}.css`,
            format: 'css/variables',
            options: {
              selector: theme === 'light' ? ':root, [data-theme="light"]' : '[data-theme="dark"]'
            }
          }
        ]
      },
      ts: {
        transformGroup: 'js',
        buildPath: 'dist/js/',
        files: [
          {
            destination: 'tokens.ts',
            format: 'javascript/module'
          }
        ]
      },
      json: {
        transformGroup: 'js',
        buildPath: 'dist/json/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat'
          }
        ]
      }
    }
  };
}
