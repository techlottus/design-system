import React, { useState } from "react";
import cn from "classnames";

type AlertProps = {
  bordered?: boolean;
  children?: React.ReactNode;
  closable?: boolean;
  type?: AlertType;
  style?: React.CSSProperties;
}

type AlertType = (typeof alertTypes)[number];

const alertTypes = [
  "default",
  "error",
  "success",
  "warning",
  "info"
] as const;

const AlertTypes: {
  [key: string]: {
    wrapper: string;
    text: string;
    icon?: JSX.Element;
    close: string;
  }
} = {
  default: {
    wrapper: "bg-white",
    text: "text-surface-600",
    close: "text-white hover:text-surface-100 focus:ring-error-800"
  },
  success: {
    wrapper: "bg-success-300 border-success-500",
    text: "text-surface-600",
    icon: <svg className="w-6 h-6 text-success-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.381 27.447a2 2 0 1 0-2.762-2.894L28.333 37.235l-5.952-5.682a2 2 0 1 0-2.762 2.894l7.333 7a2 2 0 0 0 2.762 0l14.667-14Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M32 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6ZM10 32c0-12.15 9.85-22 22-22s22 9.85 22 22-9.85 22-22 22-22-9.85-22-22Z" fill="currentColor"/></svg>,
    close: "text-success-800 hover:text-success-700 focus:ring-success-800"
  },
  warning: {
    wrapper: "bg-warning-200 border-warning-500",
    text: "text-warning-800",
    icon: <svg className="w-6 h-6 text-warning-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 25a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V27a2 2 0 0 1 2-2ZM35 46a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M29.13 8.795A5.595 5.595 0 0 1 32 8c1.012 0 2.002.276 2.87.795a5.762 5.762 0 0 1 2.072 2.139L57.25 47.282c.493.882.75 1.877.751 2.887 0 1.01-.255 2.006-.746 2.889a5.763 5.763 0 0 1-2.073 2.145c-.869.52-1.86.797-2.874.797H11.693a5.595 5.595 0 0 1-2.874-.797 5.763 5.763 0 0 1-2.073-2.145A5.934 5.934 0 0 1 6 50.169c0-1.01.258-2.005.75-2.887l20.308-36.348a5.762 5.762 0 0 1 2.072-2.14ZM32 12c-.283 0-.565.077-.82.229a1.762 1.762 0 0 0-.63.656L10.243 49.232a1.934 1.934 0 0 0-.243.94c0 .334.085.659.241.94.157.282.377.506.632.659.254.152.537.229.82.229h40.614c.283 0 .566-.077.82-.23.255-.152.475-.376.632-.658.156-.281.241-.606.241-.94 0-.334-.086-.658-.243-.94L33.45 12.885a1.762 1.762 0 0 0-.63-.656A1.595 1.595 0 0 0 32 12Z" fill="currentColor"/></svg>,
    close: "text-warning-800 hover:text-warning-700 focus:ring-warning-800"
  },
  error: {
    wrapper: "bg-error-500 border-error-300",
    text: "text-white",
    icon: <svg className="w-6 h-6 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.414 22.586a2 2 0 0 1 0 2.828L34.828 32l6.586 6.586a2 2 0 1 1-2.828 2.828L32 34.828l-6.586 6.586a2 2 0 1 1-2.828-2.828L29.172 32l-6.586-6.586a2 2 0 1 1 2.828-2.828L32 29.172l6.586-6.586a2 2 0 0 1 2.828 0Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M6 32C6 17.64 17.64 6 32 6s26 11.64 26 26-11.64 26-26 26S6 46.36 6 32Zm26-22c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22Z" fill="currentColor"/></svg>,
    close: "text-white hover:text-surface-100 focus:ring-error-800"
  },
  info: {
    wrapper: "bg-info-100 border-info-500",
    text: "text-info-800",
    icon: <svg className="w-6 h-6 text-info-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 30a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2V32a2 2 0 0 1-2-2ZM35 21a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M6 32C6 17.64 17.64 6 32 6s26 11.64 26 26-11.64 26-26 26S6 46.36 6 32Zm26-22c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22Z" fill="currentColor"/></svg>,
    close: "text-info-800 hover:text-info-700 focus:ring-info-800"
  }
};

const Alert: React.FC<AlertProps> = (props) => {
  const {
    bordered = true,
    children,
    closable = false,
    style,
    type = "default",
  } = props;

  const [closed, setClosed] = useState<boolean>(false);
  const validType = alertTypes.includes(type) ? type : "default";
  const child = React.Children.toArray(children)[0];

  return (
    !closed ? <div role="alert" style={style} className={cn(
      "max-w-68 md:max-w-full",
      "w-full",
      {
        ["border"]: bordered,
      },
      "rounded pointer-events-auto overflow-hidden",
      AlertTypes[validType].wrapper,
    )}>
      <div className="px-4 py-3">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {AlertTypes[validType].icon}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            {
              typeof child === "string" ? (
                <p className={cn(
                  "text-sm lg:text-base font-rubik font-normal",
                  AlertTypes[validType].text,
                )}>{child}</p>
              ) : child
            }
          </div>

          {closable ? (
            <div className="lg:ml-5 flex-shrink-0 flex">
              <button
                onClick={() => setClosed(true)}
                className={cn(
                  "rounded-md inline-flex",
                  "focus:outline-none focus:ring-2",
                  AlertTypes[validType].close,
                )
                }>
                <span className="sr-only" >Close</span>
                <svg className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M51.121 17.121a3 3 0 1 0-4.242-4.242L32 27.757 17.121 12.88a3 3 0 1 0-4.242 4.242L27.757 32 12.88 46.879a3 3 0 1 0 4.242 4.242L32 36.243 46.879 51.12a3 3 0 1 0 4.242-4.242L36.243 32 51.12 17.121Z" fill="currentColor"/></svg>
              </button>
            </div>
          ) : null }
        </div>
      </div>
    </div> : null
  );
}

export default Alert;
