# Fonts Montserrat
The CSS and web font files to easily self-host the "Montserrat" font.

## Quick installation
This package has only the fonts variety available in Bedu's Design System, you can import the CSS, such as using a bundler like Webpack.
```sh
$ yarn add @bedu-tmp/montserrat // npm i @bedu-tmp/montserrat
```

Within your app entry file or site component, import it in.
```js
import "@bedu-tmp/montserrat"; // Defaults to weight 400.
```

Supported variables:
- Weights: `[400,600,700]`.
- Styles: `[normal]`.
- Supported subsets: `[latin, latin-ext]`.

Finally, you can reference the font name in a CSS stylesheet, CSS Module, or CSS-in-JS.
```css
body {
  font-family: "Montserrat";
}
```

This package allows you to selecty weights and even individual styles, allowing you to cut down on payload sizes to the last byte!
```js
import "@bedu-tmp/montserrat/600.css"; // Weight 600.
import "@bedu-tmp/montserrat/700.css"; // Weight 700.
```

## Licensing
It is important to always read the license for every font that you use. Most of the fonts in the collection use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.

[Google Fonts License Attributions](https://fonts.google.com/attribution)