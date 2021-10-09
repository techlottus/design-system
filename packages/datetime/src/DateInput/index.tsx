import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import MomentLocaleUtils from "react-day-picker/moment";
import { InputGroup } from "@exponentialeducation/betomic/src";
import {
  NavbarElementProps,
  WeekdayElementProps,
  Modifier,
  DayPickerProps,
  Modifiers,
} from "react-day-picker";
import cn from "classnames";
import "moment/locale/es-mx";

interface IDateInput {
  canChangeMonth?: boolean;
  dayPickerProps?: DayPickerProps;
  defaultValue?: Date;
  disabled?: boolean;
  disabledDates?: Modifier | Modifier[];
  id?: string;
  initialMonth?: Date;
  maxDate?: Date;
  minDate?: Date;
  modifiers?: Partial<Modifiers>;
  onChange?: (selectedDate: Date) => void;
  placeholder?: string;
  showOutsideDays?: boolean;
  valid?: boolean;
};

const DateInput: React.FC<IDateInput> = (props: IDateInput) => {

  const {
    canChangeMonth = true,
    dayPickerProps,
    defaultValue,
    disabledDates,
    id,
    initialMonth,
    minDate,
    maxDate,
    modifiers,
    onChange = f => f,
    placeholder = "DD/MM/YYYY",
    showOutsideDays = true,
    valid,
    disabled,
  } = props;

  const { formatDate, parseDate } = MomentLocaleUtils;

  const handleDayChange = (selectedDay: Date) => {
    onChange(selectedDay);
  }

  const dayPickerClassNames = {
    container: "bg-white inline-block font-montserrat text-base rounded shadow-md",
    body:"table-row-group mx-5 mb-5 font-rubik font-normal text-xs leading-6.5",
    caption: "table-caption py-2 px-2 text-center rounded-t",
    day: "table-cell p-2 rounded align-middle text-center cursor-pointer hover:bg-surface-100",
    disabled: "text-surface-200",
    footer: "pt-2",
    interactionDisabled: "cursor-not-allowed",
    month: "table my-0 font-bold text-center capitalize select-none border-collapse",
    months: "flex flex-wrap justify-center px-3 pb-3",
    navBar: "absolute flex items-center justify-between py-3 px-5 w-full border-b border-surface-100",
    navButtonInteractionDisabled: "hidden",
    navButtonNext: "inline-block w-4 h-4 bg-center bg-no-repeat text-surface-400 cursor-pointer hover:opacity-80",
    navButtonPrev: "inline-block w-4 h-4 bg-center bg-no-repeat text-surface-400 cursor-pointer hover:opacity-80",
    outside: "text-surface-200",
    selected: "bg-primary-500 text-white hover:bg-primary-500",
    today: "bg-primary-500 text-white hover:bg-primary-500",
    todayButton: "bg-transparent text-error-800 text-sm text-center border-0 cursor-pointer shadow-none",
    week: "table-row",
    weekNumber: "",
    weekday: "table-cell w-8 p-2 text-surface-600 text-center text-sm",
    weekdays: "table-header-group font-bold text-sm",
    weekdaysRow: "table-row",
    wrapper: "relative flex-row select-none bg-white rounded",
  };

  const dayPickerInputClasses = {
    container: "", // The day picker input container
    overlay: "absolute z-10", // The day picker overlay
    overlayWrapper: "flex justify-center w-full"
  };

  const _dayPickerProps: DayPickerProps = {
    disabledDays: disabledDates,
    canChangeMonth: canChangeMonth,
    month: initialMonth,
    fromMonth: minDate,
    toMonth: maxDate,
    classNames: dayPickerClassNames,
    locale: "es-mx",
    localeUtils: MomentLocaleUtils,
    modifiers: modifiers,
    navbarElement: (navbarElementProps: NavbarElementProps) => <Navbar {...navbarElementProps} />,
    showOutsideDays: showOutsideDays && canChangeMonth,
    weekdayElement: (weekDayElementProps: WeekdayElementProps) => <Weekday {...weekDayElementProps} />,
    ...dayPickerProps
  };

  return (
    <DayPickerInput
      classNames={dayPickerInputClasses}
      component={DatePickerCustomInput}
      dayPickerProps={_dayPickerProps}
      format="L"
      formatDate={formatDate}
      parseDate={parseDate}
      placeholder={placeholder}
      inputProps={{
        id: id,
        isValid: valid,
        disabled: disabled
      }}
      onDayChange={handleDayChange}
      value={defaultValue}
    />
  );
};

const DatePickerCustomInput = React.forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) =>
    <InputGroup
      rightElement={
        <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M46 6a2 2 0 1 0-4 0v2H22V6a2 2 0 1 0-4 0v2h-6a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-6V6Zm6 6h-6v2a2 2 0 1 1-4 0v-2H22v2a2 2 0 1 1-4 0v-2h-6v8h40v-8ZM12 24h40v28H12V24Zm9 8a2 2 0 0 1 2-2h7a2 2 0 0 1 1.562 3.248l-2.216 2.77a5.999 5.999 0 1 1-7.586 9.226 2 2 0 0 1 2.827-2.83A2 2 0 1 0 26 39a2 2 0 0 1-1.562-3.25l1.4-1.75H23a2 2 0 0 1-2-2Zm21 0a2 2 0 0 0-3.2-1.6l-4 3a2 2 0 1 0 2.4 3.2l.8-.6v9a2 2 0 0 0 4 0V32Z" fill="currentColor"/></svg>
      }
      ref={ref}
      {...props}
    />
)

const Navbar = (props: NavbarElementProps) => {
  const { onPreviousClick, onNextClick, className, showPreviousButton, showNextButton } = props;

  const btnHiddenClasses = "opacity-0 cursor-default";

  return (
    <div className={className}>
      <button
        className={cn({ [btnHiddenClasses]: !showPreviousButton })}
        onClick={() => onPreviousClick()}
      >
        <svg className="w-4 h-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 32a3 3 0 0 1 .929-2.17l22-21a3 3 0 1 1 4.142 4.34L25.345 32 45.07 50.83a3 3 0 0 1-4.142 4.34l-22-21A3 3 0 0 1 18 32Z" fill="currentColor"/></svg>
      </button>
      <button
        className={cn({ [btnHiddenClasses]: !showNextButton })}
        onClick={() => onNextClick()}
      >
        <svg className="w-4 h-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M46 32a3 3 0 0 1-.929 2.17l-22 21a3 3 0 0 1-4.142-4.34L38.655 32 18.93 13.17a3 3 0 0 1 4.142-4.34l22 21A3 3 0 0 1 46 32Z" fill="currentColor"/></svg>
      </button>
    </div>
  );
}

const Weekday = (props: WeekdayElementProps) => {
  const {
    weekday,
    localeUtils,
    className,
    locale
  } = props;
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);

  return (
    <div className={className} title={weekdayName}>
      {weekdayName.slice(0, 1)}
    </div>
  );
}

export default DateInput;