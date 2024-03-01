import type { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  isValid?: boolean | null;
  label: string;
}

export type InputGroupType = {
  RightElement?: React.FC<ElementType>;
  LeftElement?: React.FC<ElementType>;
  Input?: React.FC<IInput>;
};
export type InputContainerType={children?: React.ReactNode, className: string, isValid?:boolean | null, disabled?:boolean}
export type ElementType = { children?: React.ReactNode, className: string }