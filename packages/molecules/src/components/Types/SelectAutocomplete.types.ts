import React, { ElementType } from "react";

export type selectAutoTypes = {
  value?:string | number;
  onChange?:()=>void;
  children?:React.ReactNode;
  Input?: React.FC<InputType>;
  Options?:React.FC<optionsType>;
  Option?: React.FC<optionType>;
}

export type InputType = {
  onChange?: () =>void;
  className?: string;
  disabled?: boolean;
  error?:boolean;
  label?:string;
  rightElement?:React.ReactNode;
  displayValue?:any
}

export type optionsType = {
  children?: React.ReactNode;
  className?:string;
}

export type optionType = {
  className?:string;
  children?: React.ReactNode;
  disabled?:boolean;
  error?: boolean;
  as?: ElementType | undefined;
  key?:string;
  value?: number | string;
}