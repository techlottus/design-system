import { ElementType } from "react";

export type SelectType = {
  value?:string|number|null;
  onChange?: ()=>{};
  defaultValue?:string|number|null;
  as?: ElementType | undefined ;
  disabled?:boolean;
  children?:React.ReactNode;
  horizontal?:boolean;
  name?:string;
  multiple?:boolean;
  className?:string;
  Button?: React.FC<ButtonType>
  Options?: React.FC<SelectOptionsType>
  Option?: React.FC<OptionType>
}

export type SelectOptionsType = {
  className?:string,
  children?:React.ReactNode;
  as?:ElementType | undefined;
  static?: boolean;
  unmount?:undefined;

}
export type ButtonType = {
  children?: React.ReactNode;
  className?:string;
  disabled?:boolean;
  placeholder?:string;
  error?:boolean;
}

export type OptionType = {
  as?:ElementType | undefined;
  disabled?:boolean;
  value?:string|number|null;
  className?:string;
  children?: React.ReactNode;
}