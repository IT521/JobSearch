module.exports = (api) => {
  const presets = [
    '@babel/preset-env',
    ['env', { targets: { node: '6.9.5' }, useBuiltIns: 'entry' }],
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  api.cache(false);

  return {
    presets,
    plugins,
  };
};
