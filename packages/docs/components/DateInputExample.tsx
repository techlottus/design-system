import { DateInput } from "@exponentialeducation/datetime/src";
import { FormGroup } from "@exponentialeducation/betomic/src";
import { HelperIcon } from "@exponentialeducation/iconography";

const DateInputLabelExample = () => {
  return (
    <FormGroup
      label="Label"
      labelFor="label-date-input-example"
    >
      <DateInput id="label-date-input-example" />
    </FormGroup>
  )
}

const DateInputRequiredExample = () => {
  return (
    <FormGroup
      label="Label"
      labelFor="label-required-example"
      required
    >
      <DateInput id="label-required-example" />
    </FormGroup>
  )
}

const DateInputRightElExample = () => {
  return (
    <FormGroup
      label="Label"
      labelFor="label-right-element-example"
      rightElement={
        <HelperIcon className="w-4" />
      }
      required
    >
      <DateInput id="label-right-element-example" />
    </FormGroup>
  )
}

const DateInputLabelHelperTextExample = () => {
  return (
    <FormGroup
      label="Label"
      labelFor="label-helper-text-example"
      helperText="This is a helper text example"
      rightElement={
        <HelperIcon className="w-4" />
      }
      required
    >
      <DateInput id="label-helper-text-example" />
    </FormGroup>
  )
}

const DateInputDisabledExample = () => {
  return (
    <FormGroup
      disabled
      label="Label"
      labelFor="label-disabled-example"
      helperText="This is a helper text example"
      rightElement={
        <HelperIcon className="w-4" />
      }
      required
    >
      <DateInput id="label-disabled-example" />
    </FormGroup>
  )
}

const DateInputOnChangeExample = () => {

  const myMethod = (selectedDate: Date) => {
    alert(`Selected date: ${selectedDate}`);
  }

  return (
    <DateInput
      onChange={myMethod}
    />
  )
}

const DateInputDefaultValueExample = () => {
  return (
    <DateInput
      onChange={(selectedDate) => console.log("Selected date: ", selectedDate)}
      defaultValue={new Date(2021, 9, 24)}
    />
  );
}

const DateInputInitialMonthExample = () => {
  return (
    <DateInput
      initialMonth={new Date(2022, 0)}
    />
  );
}

const DateInputMinDateExample = () => {
  return (
    <DateInput
      minDate={new Date()}
    />
  );
}

const DateInputMaxDateExample = () => {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={new Date(2022, 2, 15)}
    />
  );
}

const DateInputDisabledDatesExample = () => {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={new Date(2022, 2, 15)}
      disabledDates={{
        before: new Date(),
        after: new Date(2022, 2, 15)
      }}
    />
  );
}

const DateInputDisabledSpecificExample = () => {
  return (
    <DateInput
      disabledDates={[
        new Date(2021, 9, 12),
        new Date(2021, 10, 2),
        {
          from: new Date(2021, 11, 20),
          to: new Date(2022, 0, 1)
        }
      ]}
    />
  );
}

const DateInputDisableWeekendExample = () => {
  return (
    <DateInput
      disabledDates={[
        { daysOfWeek: [0, 6] }
      ]}
    />
  );
}

export {
  DateInputLabelExample,
  DateInputRequiredExample,
  DateInputRightElExample,
  DateInputLabelHelperTextExample,
  DateInputDisabledExample,
  DateInputOnChangeExample,
  DateInputDefaultValueExample,
  DateInputInitialMonthExample,
  DateInputMinDateExample,
  DateInputMaxDateExample,
  DateInputDisabledDatesExample,
  DateInputDisabledSpecificExample,
  DateInputDisableWeekendExample
}