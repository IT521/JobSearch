module.exports = (api) => {
  const presets = [
    '@babel/preset-env',
    ['env', { targets: { node: 'current' }, useBuiltIns: 'entry' }],
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-modules-commonjs',
  ];

  api.cache(false);

  return {
    presets,
    plugins,
    env: {
      test: {
        presets,
        plugins,
      },
    },
  };
};
