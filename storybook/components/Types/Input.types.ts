import type { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  isValid?: boolean | null;
  label: string;
}