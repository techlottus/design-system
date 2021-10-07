import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

const Positions = {
  left: "bottom-0 left-0 top-0 max-w-md",
  right: "bottom-0 right-0 top-0 max-w-md",
  bottom: "bottom-0 left-0 right-0 max-h-78",
};

type Position = keyof typeof Positions;

type DrawerProps = {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  position?: Position;
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    children,
    open = false,
    onClose = () => {},
    position = "right",
  } = props;

  const classes = cn(
    "w-full",
    "fixed z-20",
    "bg-white flex flex-col",
    "rounded p-6",
    "overflow-y-auto",
    Positions[position],
  );

  function keyDownHandler(event: KeyboardEvent) {
    if(event.key === "Escape") {
      if(onClose) {
        onClose();
      }
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  React.useEffect(() => {
    open ? document.body.classList.add("drawer-open") :
    document.body.classList.remove("drawer-open")
  }, [open]);

  return (
    !open ? null : typeof window !== "undefined" ? (
      ReactDOM.createPortal(
        <div role="dialog" className="drawer absolute left-0 right-0 top-0">
          <div className="overflow-hidden fixed z-20">
            <div
              aria-hidden="true"
              onClick={onClose} 
              style={{ backgroundColor: "rgba(16, 22, 26, .7)" }}
              className="fixed inset-0 opacity-100 overflow-auto z-20 select-none" />
            <div
              onClick={event => event.stopPropagation()}
              className={classes}>
              <button
                onClick={onClose}
                className={cn(
                  "absolute top-0 right-0",
                  "text-surface-600",
                  "focus:outline-none focus:ring-2 ring-primary-200",
                  "mt-7 mr-7",
                  "rounded"
                )
                }>
                <span className="sr-only" >Close</span>
                <svg className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M51.121 17.121a3 3 0 1 0-4.242-4.242L32 27.757 17.121 12.88a3 3 0 1 0-4.242 4.242L27.757 32 12.88 46.879a3 3 0 1 0 4.242 4.242L32 36.243 46.879 51.12a3 3 0 1 0 4.242-4.242L36.243 32 51.12 17.121Z" fill="currentColor"/></svg>
              </button>
              {children}
            </div>
          </div>
        </div>,
        document.body
      )
    ) : null
  );
}

export default Drawer;
