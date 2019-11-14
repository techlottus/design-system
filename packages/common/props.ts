import * as React from 'react';

/**
 * Alias for all valid HTML props for `<div>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A shared base interface for all component props.
 */
export interface IProps {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Alias for all valid HTML props for `<input>` element.
 */
export type HTMLInputProps = React.HTMLAttributes<HTMLInputElement>;

/** Interface for a controlled input. */
export interface IControlledProps {
  /** Initial value of the input, for uncontrolled usage. */
  defaultValue?: string;

  /** Change event handler. Use `event.target.value` for new value. */
  onChange?: React.FormEventHandler<HTMLElement>;

  /** Form value of the input, for controlled usage. */
  value?: string;
}

/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
const INVALID_PROPS = [
  'active',
  'alignText',
  'containerRef',
  'elementRef',
  'fill',
  'icon',
  'inputRef',
  'intent',
  'inline',
  'large',
  'loading',
  'leftIcon',
  'minimal',
  'onChildrenMount',
  'onRemove',
  'panel', // ITabProps
  'panelClassName', // ITabProps
  'popoverProps',
  'rightElement',
  'rightIcon',
  'round',
  'small',
  'text',
  'leftElement',
  'rightElement',
  'isValid',
];

/**
 * Typically applied to HTMLElements to filter out blacklisted props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the blacklist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default blacklist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and blacklist together.
 */
export function removeNonHTMLProps(
  props: { [key: string]: any },
  invalidProps = INVALID_PROPS,
  shouldMerge = false,
): { [key: string]: any } {
  if (shouldMerge) {
    invalidProps = invalidProps.concat(INVALID_PROPS);
  }

  return invalidProps.reduce(
    (prev, curr) => {
      if (prev.hasOwnProperty(curr)) {
        delete (prev as any)[curr];
      }
      return prev;
    },
    { ...props },
  );
}
