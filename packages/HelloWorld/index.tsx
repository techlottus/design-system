import * as React from 'react';

// HelloWorld Props
interface HelloWorldProps {
  message: String
}

const HelloWorld: React.SFC<HelloWorldProps> = ({ message }) => <h1>{message}</h1>;

export default HelloWorld;