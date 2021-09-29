import React from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
};

const placements = [
  "top-start", "top", "top-end",
  "right-start", "right", "right-end",
  "bottom-start", "bottom", "bottom-end",
  "left-start", "left", "left-end"
] as const;

type Placement = (typeof placements)[number];

type TooltipProps = {
  children: React.ReactNode;
  className?: string;
  content: string;
  disabled?: boolean;
  gap?: number;
  placement?: Placement;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    className = "",
    content,
    disabled = false,
    placement = "bottom",
    gap = 12
  } = props;

  const [show, setShow] = React.useState<boolean>(false);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placements.includes(placement) ? placement : "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, gap]
        }
      },
    ]
  });
  const popperClassNames = cn(
    show ? "visible" : "invisible",
    "tooltip",
    "p-4 bg-surface-600 text-white rounded",
    "font-rubik text-xs",
    "fixed",
    "z-50",
    `arrow-${placement}`,
    className
  )
  function handleMouseOver() {
    setShow(true);
  }

  function handleMouseOut(){
    setShow(false);
  }
  
  // validate children
  const isValidChild = React.isValidElement(children);

  return (
    <>
      {
        disabled ? children : React.cloneElement(
          isValidChild ? children : <span className="inline-block">{children}</span>
          , {
          onMouseEnter: handleMouseOver,
          onMouseLeave: handleMouseOut,
          ref: setReferenceElement
        })
      }
      {
        disabled ? null : typeof window !== "undefined" ? (
          ReactDOM.createPortal(
            <div
              className={popperClassNames}
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}>
              {content}
            </div>,
            document.body
          )
        ) : null
      }
    </>
  )
}

export default Tooltip;
