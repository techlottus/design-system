import React, { Children } from "react";
import cn from "classnames";

type MessageProps = {
  message?: string;
  className?: string;
  show?: boolean;
  type?: ColorType;
  disabled?: boolean;
}

const ColorTypes = {
  error: cn("text-error-400"),
  warning: cn("text-warning-400"),
  success: cn("text-success-400"),
  default: cn("text-surface-400"),
  info: cn("text-info-400"),
};

type ColorType = keyof typeof ColorTypes;

const Message: React.FC<MessageProps> = (props) => {
  const {
    show = true,
    message,
    className,
    type = "default",
    disabled = false,
  } = props;

  const messageClasses = cn(
    "box__message",
    "text-sm mt-2",
    {
      ["text-surface-300"]: disabled,
      [ColorTypes[type]]: !disabled
    },
    className,
  )

  return show ? (
    <div className={messageClasses}>{message}</div>
  ) : null; 
}

type FormGroupComposition = {
  Message: React.FC<MessageProps>
}

 type FormGroupProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  helperText?: string;
  label?: string;
  labelFor?: string;
  required?: boolean;
  rightElement?: JSX.Element;
}

const FormGroup: React.FC<FormGroupProps> & FormGroupComposition = (props) => {
  const {
    children,
    className,
    helperText,
    label,
    labelFor,
    required = false,
    disabled = false,
    rightElement,
  } = props;
  const classes = cn(
    "form-group",
    className,
    {
      ["text-surface-300 pointer-events-none"]: disabled,
      ["text-surface-700"]: !disabled
    }
  );

  const requiredDecoration = cn(
    "pl-1  font-normal",
    {
      ["text-error-300"]: !disabled
    }
  )
  return (
    <div className={classes}>
      <div className="flex items-center justify-between h-7 leading-7 mb-1">
        {label ? (
          <label className="block text-base font-rubik" htmlFor={labelFor}>
            <span className="text-base font-normal font-rubik">{label}
            {required ? <span className={requiredDecoration}>*</span> : null}</span>
          </label>)
          : null
        }
        {rightElement ? rightElement : null}
      </div>
      <div className="relative">
        {Children.map(children, child => {
          if(React.isValidElement(child)) {
            const newChild = React.cloneElement(child, {
              disabled
            });
            return newChild;
          }
          return;
        })}
        {helperText ? <span className="block mt-2 text-xs text-surface-400">{helperText}</span> : null}
      </div>
    </div>
  );
};

FormGroup.Message = Message;

export default FormGroup;
