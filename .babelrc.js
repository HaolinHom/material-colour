const loose = true;

module.exports = {
  presets: [['@babel/preset-env', { loose, modules: false }]],
  plugins: ["@babel/plugin-transform-modules-commonjs"],
};
