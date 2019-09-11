import * as React from 'react';

/**
 * Alias for all valid HTML props for `<div>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * A shared base interface for all component props.
 */
export interface IProps {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
}

/**
 * Alias for all valid HTML props for `<input>` element.
 */
export type HTMLInputProps = React.HTMLAttributes<HTMLInputElement>;
