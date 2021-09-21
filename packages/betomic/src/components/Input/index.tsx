import React from "react";
import type { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const Input: React.FC<IInput> = (props) => {
  const {type = "text", ...restProps} = props;
  return <input type={type} {...restProps} />
}

export default Input;
