import React, { useEffect, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import MomentLocaleUtils from "react-day-picker/moment";
import { InputGroup, FormGroup } from "@exponentialeducation/betomic/src";
import {
  CaretLeftIcon,
  CaretRightIcon,
  HelperIcon,
  CalendarIcon
} from "@exponentialeducation/iconography/icons";
import {
  DayPickerInputProps,
  NavbarElementProps,
  WeekdayElementProps,
  Modifier
} from "react-day-picker";
import cn from "classnames";
import "moment/locale/es-mx";

interface IDateInput {
  canChangeMonth?: boolean;
  defaultValue?: Date;
  disabled?: boolean;
  disabledDates?: Date | Date[];
  format?: "L" | "l" | "LL" | "ll";
  initialMonth?: Date,
  label?: string;
  labelFor?: string;
  labelHelper?: boolean;
  minDate?: Date,
  maxDate?: Date,
  onChange?: (selectedDate: Date) => void,
  required?: boolean;
  showOutsideDays?: boolean;
};

const DateInput: React.FC<IDateInput> = (props: IDateInput) => {

  const {
    minDate,
    maxDate,
    canChangeMonth = true,
    defaultValue,
    disabledDates,
    format = "L",
    initialMonth,
    onChange = f => f,
    showOutsideDays = true,
  } = props;

  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [isValidDay, setIsValidDay] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [disabledDays, setDisabledDays] = useState<Modifier>(undefined);

  useEffect(() => {
    if (defaultValue) {
      setInitialSelectedDay(defaultValue);
    }
    setDisabledDates();
  }, [props]);

  const setDisabledDates = () => {
    if (minDate && maxDate) {
      setDisabledDays({
        ...disabledDates,
        before: minDate,
        after: maxDate
      });
      return;
    }

    if (minDate) {
      setDisabledDays({
        ...disabledDates,
        before: minDate,
      });
      return;
    }

    if (maxDate) {
      setDisabledDays({
        ...disabledDates,
        after: maxDate
      })
      return;
    }
  };

  const setInitialSelectedDay = (defaultValue: Date) => {

    if (minDate && defaultValue.getTime() < minDate.getTime()) {
      console.warn("'value' or 'defaultValue' cannot be before 'minDate'");
      setSelectedDay(minDate);
      return;
    }

    if (maxDate && defaultValue.getTime() > maxDate.getTime()) {
      console.warn("'value' or 'defaultValue' cannot be after 'maxDate'");
      if (minDate) {
        setSelectedDay(minDate);
        return;
      }
      setSelectedDay(new Date());
      return;
    }

    setSelectedDay(defaultValue);
    return;
  };

  const checkIsValidDay = (selectedDay: Date) => {

    if (minDate && maxDate) {
      return selectedDay &&
        selectedDay.getTime() > minDate.getTime() &&
        selectedDay.getTime() < maxDate.getTime();
    }

    if (minDate) {
      return selectedDay &&
        selectedDay.getTime() > minDate.getTime();
    }

    if (maxDate) {
      return selectedDay &&
        selectedDay.getTime() < maxDate.getTime();
    }

    return !!selectedDay;
  };

  const { formatDate, parseDate } = MomentLocaleUtils;

  const handleDayChange = (selectedDay: Date, modifiers: any, dayPickerInput: DayPickerInput) => {
    const input = dayPickerInput.getInput();
    const isValidDay = checkIsValidDay(selectedDay);

    setIsValidDay(isValidDay);
    setSelectedDay(selectedDay);
    setIsEmpty(!input?.value?.trim());
    setIsDisabled(modifiers?.disabled === true);

    onChange(selectedDay);
  }

  const getInputPlaceholder = () => (
    minDate ? minDate
      : initialMonth ? initialMonth
        : new Date()
  );

  const navButtonsClasses = cn(
    "inline-block w-4 h-4",
    "bg-center bg-no-repeat text-surface-400",
    "cursor-pointer hover:opacity-80"
  );

  const dayPickerClassNames = {
    container: cn("bg-white inline-block font-montserrat text-base rounded shadow-md"), // The container element
    wrapper: cn("bg-white relative rounded"), // The wrapper element: "", used for keyboard interaction
    interactionDisabled: cn("cursor-default"), // Added to the container when there's no interaction with the calendar

    navBar: cn("absolute flex items-center justify-between py-3 px-5 w-full border-b border-surface-100"), // The navigation bar with the arrows to switch between months
    navButtonPrev: navButtonsClasses, // Button to switch to the previous month
    navButtonNext: navButtonsClasses, // Button to switch to the next month
    navButtonInteractionDisabled: cn("hidden"), // Added to the navbuttons when disabled with fromMonth/toMonth props

    months: cn("flex flex-wrap justify-center px-3 pb-3"), // Container of the months table
    month: cn("table my-0 font-bold text-center capitalize select-none border-collapse"), // The month's main table
    caption: cn("table-caption py-2 px-2 text-center rounded-t"), // The caption element: "", containing the current month's name and year
    weekdays: cn("table-header-group font-bold text-sm"), // Table header displaying the weekdays names
    weekdaysRow: cn("table-row"), // Table row displaying the weekdays names
    weekday: cn("table-cell w-8 p-2 text-surface-600 text-center text-sm"), // Cell displaying the weekday name
    body: cn("table-row-group mx-5 mb-5 font-rubik font-normal text-xs leading-6.5"), // Table's body with the weeks
    week: cn("table-row"), // Table's row for each week
    day: cn("table-cell p-2 rounded align-middle text-center cursor-pointer hover:bg-surface-100"), // The single day cell

    footer: cn("pt-2"), // The calendar footer (only with todayButton prop)
    todayButton: cn("bg-transparent text-error-800 text-sm text-center border-0 cursor-pointer shadow-none"), // The today button (only with todayButton prop)

    today: cn({ ["bg-primary-500 text-white hover:bg-primary-500 hover:text-white"]: !selectedDay || selectedDay === new Date() }), // Added to the day's cell for the current day
    selected: cn("bg-primary-500 text-white hover:bg-primary-500"), // Added to the day's cell specified in the "selectedDays" prop
    disabled: cn("text-surface-200 cursor-default"), // Added to the day's cell specified in the "disabledDays" prop
    outside: cn("text-surface-200"), // Added to the day's cell outside the current month
    weekNumber: ""
  };

  const dayPickerInputClasses = {
    container: "", // The day picker input container
    overlay: cn("absolute z-10"), // The day picker overlay
    overlayWrapper: cn("flex justify-center w-full")
  };

  const dayPickerProps = {
    disabledDays: disabledDays,
    canChangeMonth: canChangeMonth,
    month: initialMonth,
    fromMonth: minDate,
    toMonth: maxDate,
    classNames: dayPickerClassNames,
    locale: "es-mx",
    localeUtils: MomentLocaleUtils,
    navbarElement: <Navbar />,
    numberOfMonths: 1,
    showOutsideDays: showOutsideDays && canChangeMonth,
    weekdayElement: <Weekday />,
  };

  return (
    <DayPickerInput
      classNames={dayPickerInputClasses}
      component={(dayPickerInputProps: DayPickerInputProps) =>
        <DayPickerInputComponent
          dayPickerInputProps={dayPickerInputProps}
          isDisabled={isDisabled}
          isEmpty={isEmpty}
          isValidDay={isValidDay}
          selectedDay={selectedDay} å
          {...props}
        />
      }
      dayPickerProps={dayPickerProps}
      format={format}
      formatDate={formatDate}
      parseDate={parseDate}
      placeholder={
        `${formatDate(selectedDay || getInputPlaceholder(), format, "es-mx")}`
      }
      onDayChange={handleDayChange}
      value={selectedDay}
    />
  );
};

const DayPickerInputComponent = React.forwardRef((props: { dayPickerInputProps: DayPickerInputProps } | IDateInput | any, ref: React.Ref<HTMLInputElement>) => {

  const {
    dayPickerInputProps,
    disabled = false,
    isValidDay,
    isDisabled,
    isEmpty,
    label,
    labelFor,
    labelHelper = false,
    required = false,
    selectedDay,
  } = props;

  return (
    <FormGroup
      disabled={disabled}
      label={label}
      labelFor={label && labelFor}
      required={required}
      rightElement={
        labelHelper ?
          <HelperIcon className="w-4" />
          : undefined
      }
    >
      <InputGroup
        id={label && labelFor}
        isValid={selectedDay && isValidDay}
        disabled={isDisabled}
        ref={ref}
        rightElement={
          <CalendarIcon className="w-6 h-6" />
        }
        {...dayPickerInputProps}
      />
      {
        selectedDay && !isValidDay ?
          <FormGroup.Message type="error" message="Este campo es inválido" />
          : (!selectedDay && isEmpty && required) &&
          <FormGroup.Message type="error" message="Este campo es requerido" />
      }
    </FormGroup>
  );
});

const Navbar = (props: NavbarElementProps | any) => {
  const { onPreviousClick, onNextClick, className, showPreviousButton, showNextButton } = props;

  const btnHiddenClasses = cn("opacity-0 cursor-default");

  return (
    <div className={className}>
      <button
        className={cn({ [btnHiddenClasses]: !showPreviousButton })}
        onClick={() => onPreviousClick()}
      >
        <CaretLeftIcon className="w-4 h-4" />
      </button>
      <button
        className={cn({ [btnHiddenClasses]: !showNextButton })}
        onClick={() => onNextClick()}
      >
        <CaretRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

const Weekday = ({ weekday, localeUtils, className, locale }: WeekdayElementProps) => {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);

  return (
    <div className={className} title={weekdayName}>
      {weekdayName.slice(0, 1)}
    </div>
  );
}

export default DateInput;