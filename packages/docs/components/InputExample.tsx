import { useState } from "react";
import { Input } from "@exponentialeducation/betomic/src";

const InputExample = () => {
  return (
    <div className="w-full mt-5">
      <Input placeholder="Placeholder" />
    </div>
  );
}

const ValidInputExample = () => {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="w-full mt-5">
      <Input isValid={isValid} />
      <button className="mt-2 p-2 bg-primary-500 text-white rounded" onClick={() => setIsValid(!isValid)}>Change validation</button>
    </div>
  );
}

const DisabledInputExample = () => {
  return (
    <div className="w-full mt-5">
      <Input disabled/>
    </div>
  );
}

export {
  InputExample,
  ValidInputExample,
  DisabledInputExample
};
