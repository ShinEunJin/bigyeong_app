module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extentions: ['.tsx', '.ts', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
