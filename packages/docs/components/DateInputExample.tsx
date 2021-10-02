import { DateInput } from "@exponentialeducation/datetime/src";

const DateInputDefaultValueExample = () => {
  return (
    <DateInput
      label="Label"
      labelFor="date-picker-default-2"
      defaultValue={new Date(2021, 9, 24)}
    />
  );
}

const DateInputInitialMonthExample = () => {
  return (
    <DateInput
      label="Label"
      labelFor="date-picker-nav-4"
      initialMonth={new Date(2022, 0)}
    />
  );
}

const DateInputMinDateExample = () => {
  return (
    <DateInput
      label="Label"
      labelFor="date-picker-nav-5"
      minDate={new Date()}
    />
  );
}

const DateInputMaxDateExample = () => {
  return (
    <DateInput
      label="Label"
      labelFor="date-picker-nav-6"
      minDate={new Date()}
      maxDate={new Date(2022, 2, 15)}
    />
  );
}

export {
  DateInputDefaultValueExample,
  DateInputInitialMonthExample,
  DateInputMinDateExample,
  DateInputMaxDateExample
}