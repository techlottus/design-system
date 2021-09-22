import { InputGroup, Input } from "@exponentialeducation/betomic/src";
import { CheckIcon, EyeIcon, SearchIcon } from "@exponentialeducation/iconography/icons/esm";

const InputGroupBasicExample = () => {
  return (
    <section className="mt-5">
      <InputGroup>
        <InputGroup.Decoration position="right">
          <EyeIcon className="w-4 h-full" />
        </InputGroup.Decoration>
        <Input type="password" className="pr-10" placeholder="Right decoration" />
      </InputGroup>
    </section>
  );
}

const InputGroupLeftExample = () => {
  return (
    <section className="mt-5">
      <InputGroup>
        <InputGroup.Decoration>
          <CheckIcon className="w-4 h-full" />
        </InputGroup.Decoration>
        <Input type="text" className="pl-10" placeholder="Left decoration" />
      </InputGroup>
    </section>
  );
}

const InputGroupComplexExample = () => {
  return (
    <section className="mt-5">
      <InputGroup>
        <InputGroup.Decoration position="left">
          <span className="text-surface-300">
            http://
          </span>
        </InputGroup.Decoration>
        <Input placeholder="Example" className="px-18" />
        <InputGroup.Decoration position="right">
          <span className="text-surface-300">
            .bedu.org
          </span>
        </InputGroup.Decoration>
      </InputGroup>
    </section>
  );
}

const InputGroupSearchExample = () => {
  return (
    <section className="mt-5">
      <InputGroup>
        <InputGroup.Decoration>
          <SearchIcon className="w-4 text-surface-700"/>
        </InputGroup.Decoration>
        <Input type="search" className="pl-10" placeholder="Search example..." />
      </InputGroup>
    </section>
  );
}

export {
  InputGroupBasicExample,
  InputGroupLeftExample,
  InputGroupComplexExample,
  InputGroupSearchExample
}
