# Betomic
A React-based UI toolkit.

![Betomic UI](../betomic-ui.png)

# Installation

```

yarn add @exponentialeducation/betomic

```

## Usage

```

const betomic = require('@exponentialeducation/betomic');

```

# Documentation 
You can find the Betomic documentation [on the website](https://betomic.bedu.org). Checkout the getting started page for quick overview and how to use.

# Examples
We have several examples [on the website](https://betomic.bedu.org). Here is the first one to get you started:

```js
import { HelloWorld } from '@exponentialeducation/betomic';

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

**Bedu Engineering** @ 2021
