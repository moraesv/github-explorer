module.exports = {
  presets: [
    "@babel/preset-env",

    [
      "@babel/preset-react",
      {
        runtime: "automatic" /* Não import React em todo arquivo com jsx */,
      },
    ],
  ],
};
