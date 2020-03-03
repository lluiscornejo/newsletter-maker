/* eslint-disable */

// Workaround for babel import aliases
System.config({
  paths: {
    '@Application/*': './src/application/*',
    '@Common/*': './src/common/*',
    '@Config/*': './src/application/config/*',
    '@Scenes/*': './src/scenes/*',
  },
});
