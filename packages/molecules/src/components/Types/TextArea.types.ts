import { TextareaHTMLAttributes } from "react";

export interface TextAreaType extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    variant?: "outline" | "flat";
    placeholder?:string;
    children?: React.ReactNode;
    className?:string;
    RightElement?: React.FC<ElementType>;
    LeftElement?: React.FC<ElementType>;
  };


export type ElementType = { children?: React.ReactNode, className?: string }