import { InputGroup, FormGroup } from "@exponentialeducation/betomic/src";
import { HelperIcon } from "@exponentialeducation/iconography/icons/esm";

const FormGroupExample = () => {
  return (
    <section className="mt-5">
      <FormGroup
        label="Label"
        labelFor="test-input">
        <InputGroup id="test-input" placeholder="Basic example" />
      </FormGroup>
    </section>
  );
}

const FormGroupRequiredExample = () => {
  return (
    <section className="mt-5">
      <FormGroup
        label="Label"
        required
        labelFor="test-input-required">
        <InputGroup id="test-input-required" placeholder="Basic example" />
      </FormGroup>
    </section>
  );
}

const FormGroupRightExample = () => {
  return (
    <section className="mt-5">
      <FormGroup
        label="Label"
        required
        labelFor="test-input-right-element"
        rightElement={
          <HelperIcon className="w-4" />
        }>
        <InputGroup id="test-input-right-element" placeholder="Basic example" />
      </FormGroup>
    </section>
  );
}

const FormGroupHelperExample = () => {
  return (
    <section className="mt-5">
      <FormGroup
        label="Label"
        required
        helperText="This is a helper text example"
        labelFor="test-input-helper-text"
        rightElement={
          <HelperIcon className="w-4" />
        }
        >
        <InputGroup disabled id="test-input-helper-text" placeholder="Basic example" />
      </FormGroup>
    </section>
  );
}

const FormGroupMessageExample = () => {
  return (
    <section className="mt-5">
      <FormGroup
        label="Label"
        required
        labelFor="test-input-group-message"
        rightElement={
          <HelperIcon className="w-4" />
        }
        >
        <InputGroup isValid={false} id="test-input-group-message" placeholder="Basic example" />
        <FormGroup.Message type="error" message="Este campo es requerido" />
      </FormGroup>
    </section>
  );
}

const FormGroupDisabledExample = () => {
  return (
    <section className="mt-5">
      <FormGroup
        disabled
        label="Label"
        required
        labelFor="test-input-group-disabled"
        rightElement={
          <HelperIcon className="w-4" />
        }
        >
        <InputGroup id="test-input-group-disabled" placeholder="Basic example" />
      </FormGroup>
    </section>
  );
}

export {
  FormGroupExample,
  FormGroupRequiredExample,
  FormGroupRightExample,
  FormGroupHelperExample,
  FormGroupMessageExample,
  FormGroupDisabledExample
}
