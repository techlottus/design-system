# [Betomic](https://betomic.bedu.org/) &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/c677b73b-bfff-4d64-b767-d4244828f2fd/deploy-status)](https://app.netlify.com/sites/betomic/deploys)
A React-based UI toolkit.

# Installation
```sh
$ yarn add betomic
# or
$ npm i --save betomic
```

# Documentation 
You can find the Betomic documentation [on the website](https://betomic.bedu.org). Checkout the getting started page for quick overview and how to use.

# Examples
We have several examples [on the website](https://betomic.bedu.org). Here is the first one to get you started:

```js
import { HelloWorld } from 'betomic';

const ExampleComponent = () => 
  <>
    <HelloWorld message={"Hello World"} />
  </>;

export default ExampleComponent;
```

This example will render "Hello World" into a container on the page.

You'll notice that we used an HTML-like syntax; we call it JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML.

# Contributing
All feedback and suggestions are welcome!

Read our [contributing guide](https://github.com/ExponentialEducation/betomic/blob/develop/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements.

**Bedu Engineering** @ 2019
