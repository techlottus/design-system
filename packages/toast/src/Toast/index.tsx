import React from "react";
import handler, {
  Toaster as ToastWrapper,
  ToastPosition,
} from "react-hot-toast";
import cn from "classnames";

type ToastProps = {
  gutter?: number;
  topOffset?: number;
}

type ToastOptions = {
  position?: ToastPosition;
  duration?: number;
  variant: Variant;
  closable?: boolean;
}

const availableVariants = ["success", "warning", "info", "error"] as const;

const Variants: {
  [key: string]: {
    wrapper: string;
    text: string;
    icon: JSX.Element;
    close: string;
  }
} = {
  success: {
    wrapper: "bg-success-300 border-success-500",
    text: "text-surface-600",
    icon: <svg className="w-6 h-6 text-success-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.381 27.447a2 2 0 1 0-2.762-2.894L28.333 37.235l-5.952-5.682a2 2 0 1 0-2.762 2.894l7.333 7a2 2 0 0 0 2.762 0l14.667-14Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M32 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6ZM10 32c0-12.15 9.85-22 22-22s22 9.85 22 22-9.85 22-22 22-22-9.85-22-22Z" fill="currentColor"/></svg>,
    close: "text-success-800 hover:text-success-700 focus:ring-success-800"
  },
  warning: {
    wrapper: "bg-warning-200 border-warning-500",
    text: "text-warning-800",
    icon: <svg className="w-6 h-6 text-warning-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.381 27.447a2 2 0 1 0-2.762-2.894L28.333 37.235l-5.952-5.682a2 2 0 1 0-2.762 2.894l7.333 7a2 2 0 0 0 2.762 0l14.667-14Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M32 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6ZM10 32c0-12.15 9.85-22 22-22s22 9.85 22 22-9.85 22-22 22-22-9.85-22-22Z" fill="currentColor"/></svg>    ,
    close: "text-warning-800 hover:text-warning-700 focus:ring-warning-800"
  },
  error: {
    wrapper: "bg-error-500 border-error-300",
    text: "text-white",
    icon: <svg className="w-6 h-6 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.381 27.447a2 2 0 1 0-2.762-2.894L28.333 37.235l-5.952-5.682a2 2 0 1 0-2.762 2.894l7.333 7a2 2 0 0 0 2.762 0l14.667-14Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M32 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6ZM10 32c0-12.15 9.85-22 22-22s22 9.85 22 22-9.85 22-22 22-22-9.85-22-22Z" fill="currentColor"/></svg>    ,
    close: "text-white hover:text-surface-100 focus:ring-error-800"
  },
  info: {
    wrapper: "bg-info-100 border-info-500",
    text: "text-info-800",
    icon: <svg className="w-6 h-6 text-info-800" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.381 27.447a2 2 0 1 0-2.762-2.894L28.333 37.235l-5.952-5.682a2 2 0 1 0-2.762 2.894l7.333 7a2 2 0 0 0 2.762 0l14.667-14Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M32 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6ZM10 32c0-12.15 9.85-22 22-22s22 9.85 22 22-9.85 22-22 22-22-9.85-22-22Z" fill="currentColor"/></svg>,
    close: "text-info-800 hover:text-info-700 focus:ring-info-800"
  }
};

type Variant = (typeof availableVariants)[number];;

export const toast = (content: JSX.Element | string | null, options?: ToastOptions) => {
  const initOptions: ToastOptions = {
    position: "top-right",
    duration: 4000,
    variant: "success",
    closable: false,
  }
  const { closable, duration, position, variant } = Object.assign({}, initOptions, options);
  const validVariant = availableVariants.includes(variant) ? variant : "top-right";

  return handler.custom(
    (t) => (
      <div className={cn(
        "max-w-68 lg:max-w-110",
        "w-full border",
        "rounded pointer-events-auto overflow-hidden",
        Variants[validVariant].wrapper,
        {
          ["opacity-100"]: t.visible,
          ["opacity-0"]: !t.visible,
        }
      )}>
        <div className="px-4 py-3">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {Variants[validVariant].icon}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              {content && typeof content === "string" ? (
                <p className={cn(
                  "text-sm lg:text-base font-rubik font-normal",
                  Variants[validVariant].text,
                )}>{content}</p>
              ): content}
            </div>

            {closable ? null : (
              <div className="lg:ml-5 flex-shrink-0 flex">
                <button
                  onClick={() => handler.dismiss(t.id)}
                  className={cn(
                    "rounded-md inline-flex",
                    "focus:outline-none focus:ring-2",
                    Variants[validVariant].close,
                  )
                  }>
                  <span className="sr-only" >Close</span>
                  <svg className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M51.121 17.121a3 3 0 1 0-4.242-4.242L32 27.757 17.121 12.88a3 3 0 1 0-4.242 4.242L27.757 32 12.88 46.879a3 3 0 1 0 4.242 4.242L32 36.243 46.879 51.12a3 3 0 1 0 4.242-4.242L36.243 32 51.12 17.121Z" fill="currentColor"/></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      duration: duration,
      position: position,
    }
  )
}

export const Toaster: React.FC<ToastProps> = (props) => {
  const {
    topOffset = 20,
    gutter = 12,
  } = props;
  return (
    <ToastWrapper
      gutter={gutter}
      reverseOrder={false}
      containerStyle={{
        top: topOffset,
      }} />
  )
}
