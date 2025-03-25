module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@assets": "./src/assets",
          "@assets/img": "./src/assets/img",
  
          "@routes": "./src/routes",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@themes": "./src/themes",
        },
      },
    ],
  ],
};
