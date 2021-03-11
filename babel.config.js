module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic" /* Não importa React em todo arquivo com jsx */,
      },
    ],
  ],
};
