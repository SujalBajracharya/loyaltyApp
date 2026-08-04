const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Transform .svg files into React components
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

// Remove svg from assets
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);

// Add svg to source extensions
config.resolver.sourceExts.push("svg");

module.exports = config;