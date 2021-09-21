import { useState } from "react";
import { Input } from "@exponentialeducation/betomic/src";
import cn from "classnames";

const inputDefaultClasses = cn(
  "rounded p-3 h-10 w-full",
  "font-rubik font-normal text-base text-surface-700 bg-surface-100 placeholder-surface-400",
  "border-2 border-transparent focus:outline-none focus:bg-white",
  "hover:border-surface-200",
)

const InputExample = () => {
  const defaultClasses = cn(
    inputDefaultClasses,
    "focus:ring-primary-500 focus:ring-opacity-40 focus:ring-2 focus:border-primary-500"
  )
  return (
    <div className="w-full mt-5">
      <Input className={defaultClasses} placeholder="Placeholder" />
    </div>
  );
}

const ValidInputExample = () => {
  const [isValid, setIsValid] = useState(true);
  const validInput = cn(
    inputDefaultClasses,
    {
      ["border-success-400 bg-white hover:border-success-400"]: isValid,
      ["border-error-400 bg-white hover:border-error-400"]: !isValid,
    }
  )
  return (
    <div className="w-full mt-5">
      <Input className={validInput} />
      <button className="mt-2 p-2 bg-primary-500 text-white rounded" onClick={() => setIsValid(!isValid)}>Change validation</button>
    </div>
  );
}

const DisabledInputExample = () => {
  const defaultClasses = cn(
    inputDefaultClasses,
    "bg-surface-100 pointer-events-none"
  )
  return (
    <div className="w-full mt-5">
      <Input disabled className={defaultClasses} />
    </div>
  );
}

export {
  InputExample,
  ValidInputExample,
  DisabledInputExample
};
