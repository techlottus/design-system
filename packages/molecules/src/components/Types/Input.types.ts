import type { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean | null;
  label?: string;
  variant?:"outlined"|"flat";
  regexExp?: RegExp
}

export type InputGroupType = {
  RightElement?: React.FC<ElementType>;
  LeftElement?: React.FC<ElementType>;
} & IInput;
export type InputContainerType={children?: React.ReactNode, className: string, isValid?:boolean | null, disabled?:boolean}
export type ElementType = { children?: React.ReactNode, className: string }