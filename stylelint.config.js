export default {
  rules: {
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-property-value-disallowed-list': {
      '/^(left|right|margin-left|margin-right|padding-left|padding-right|border-left|border-right)$/': ['*'],
      'text-align': ['left', 'right']
    }
  }
};
