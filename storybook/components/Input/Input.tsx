import { useState } from "react";
import cn from "classnames"
import { ElementType, InputGroupType  } from "../Types/Input.types";


//components
const Input: InputGroupType = (props: InputGroupType) => {
  const {
    id="input",
    regexExp=null,
    isValid = null,
    disabled = false,
    style,
    variant="outlined",
    label="",
    className,
    hideIcons=false,
    children,
    ...restProps
  } = props;

  const [valid,setValid] = useState(isValid);
  const getValue = ( e:any) =>{
    if (regexExp!=null){
       e.preventDefault;
    let valueInput = e.target.value;
    setValid(regexExp!=null && regexExp.test(valueInput))
    }
   
  }


  const inputClasses = cn("flex order-2 grow peer", "w-full", "border-transparent focus:outline-none pt-3 px-1 bg-transparent",
    "text-base placeholder-transparent ", className);
  const labelClasses = cn("order-2 text-xs font-texts  absolute scale-75 origin-center duration-300 transform -translate-y-8 ",
    "peer-placeholder-shown:text-base peer-placeholder-shown:text-surface-700 peer-placeholder-shown:-translate-y-5 ",
    "peer-focus:text-xs peer-focus:-translate-y-8 ",
    {["text-surface-800  peer-focus:text-surface-800"]:(valid==null && isValid==null)  && !disabled,
    ["text-success-500  peer-focus:text-success-500"]:(valid ||isValid) && !disabled,
    ["text-error-500  peer-focus:text-error-500"]:(!valid || !isValid) && !disabled,
    ["text-surface-200  peer-placeholder-shown:text-surface-200 peer-placeholder-shown:text-surface-200"]:disabled
  });
  const containerClasses = cn("flex border rounded h-10 input-group grow align-middle",{["border-b border-x-0 border-t-0 bg-surface-100"]:variant==="flat"},
  {["border-surface-200 focus-within:border-surface-600"]:(valid==null && isValid==null) && !disabled,
  ["border-success-500 focus-within:border-success-500"]:(valid ||isValid)  && !disabled,
  ["border-error-500 focus-within:border-error-500"]:(!valid || !isValid) && !disabled,
  ["border-surface-200 focus-within:border-surface-200"]:disabled}, className)

  return (
    <div tabIndex={0} className={containerClasses} >
      {children}
      <div tabIndex={0} className="w-full input-group">
      <input
        name="inputName"
        id={id}
        placeholder={label}
        disabled={disabled}
        className={inputClasses}
        type="text"
        onChange={getValue}
        {...restProps} />

      <label htmlFor={id} className={labelClasses}>{label}</label>
    </div>
    {((isValid==false || valid==false) && !disabled && !hideIcons) && <div className={cn("flex align-middle py-3 pr-3 pl-2 justify-center",{["hide"]:hideIcons})}><span className="font-icons-solid text-error-500 text-lg">error</span> </div>}
    {((isValid || valid) && !disabled && !hideIcons) && <div className={cn("flex align-middle py-3 pr-3 pl-2 justify-center",{["hide"]:hideIcons})}><span className="font-icons-solid text-success-500 text-lg">done</span></div>}
    </div>);
}

const RightElement= (props: ElementType) =>{
  const { children,className } = props;
  return(
  <div className={cn("pr-3 pl-2 flex align-center justify-center order-last ",className)}>{children}</div>
);
} 
const LeftElement = ({ children,className }: ElementType) => (
  <div className={cn(" pl-3 pr-2 flex align-center justify-center order-first",className)}>{children}</div>
);


Input.RightElement = RightElement;
Input.LeftElement = LeftElement;

export default Input;