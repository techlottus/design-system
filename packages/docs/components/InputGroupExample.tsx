import { InputGroup } from "@exponentialeducation/betomic/src";
import { CheckIcon, EyeIcon, SearchIcon } from "@exponentialeducation/iconography/icons/esm";

const InputGroupBasicExample = () => {
  return (
    <section className="mt-5">
      <InputGroup placeholder="Basic example" />
    </section>
  );
}

const InputGroupLeftExample = () => {
  return (
    <section className="mt-5">
      <InputGroup
        placeholder="Left decoration"
        leftElement={<EyeIcon className="w-4" />}
      />
    </section>
  );
}

const InputGroupRightExample = () => {
  return (
    <section className="mt-5">
      <InputGroup
        placeholder="Right decoration"
        rightElement={<EyeIcon className="w-4" />}
      />
    </section>
  );
}

const InputGroupComplexExample = () => {
  return (
    <section className="mt-5">
      <InputGroup
        className="pl-18 pr-20"
        leftElement={
          <span className=" text-surface-300 select-none">https://</span>
        }
        rightElement={
          <span className="text-surface-300 select-none">.bedu.org</span>
        }
      />
    </section>
  );
}

const InputGroupSearchExample = () => {
  return (
    <section className="mt-5">
      <InputGroup
        type="search"
        placeholder="Search example..."
        leftElement={
          <SearchIcon className="w-4" />
        }
      />
    </section>
  );
}

const InputGroupValidationExample = () => {
  return (
    <section className="mt-5 grid gap-5">
      <InputGroup
        isValid={false}
        placeholder="Valid false example"
        rightElement={<EyeIcon className="w-4" />}
      />
      <InputGroup
        isValid
        placeholder="Valid example"
        rightElement={<CheckIcon className="w-4" />}
      />
      <InputGroup
        isValid={false}
        placeholder="Valid false example"
        leftElement={<EyeIcon className="w-4" />}
      />
      <InputGroup
        isValid
        placeholder="Valid example"
        leftElement={<CheckIcon className="w-4" />}
      />
    </section>
  );
}

export {
  InputGroupBasicExample,
  InputGroupLeftExample,
  InputGroupRightExample,
  InputGroupComplexExample,
  InputGroupSearchExample,
  InputGroupValidationExample
}
