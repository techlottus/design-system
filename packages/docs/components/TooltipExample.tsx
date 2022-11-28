import { Tooltip } from "@bedu-tmp/tooltip/src";

const TooltipBasic = () => {
  return (
    <div className="mt-5 text-center">
      Inline text can have {" "}
      <Tooltip placement="top" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    </div>
  );
};

const TooltipDisabled = () => {
  return (
    <div className="mt-5 text-center">
      This line's tooltip {" "}
      <Tooltip disabled placement="top" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          is disabled
        </span>
      </Tooltip>
    </div>
  )
}

const TooltipExample = () => {
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="mt-5">
        Inline text can have {" "}
        <Tooltip placement="top" content="Tooltip content">
          <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
            a tooltip
          </span>
        </Tooltip>
      </div>

      <div className="mt-5">
        <Tooltip placement="right" content="Tooltip right content">
          Or, hover anywhere over this whole line.
        </Tooltip>
      </div>

      <div className="mt-5">
        <Tooltip placement="left" content="Tooltip content">
          <span className="cursor-default border-primary-500 border-b-2 border-dashed">
            Available
          </span>
        </Tooltip>{" "}
        <Tooltip placement="top" content="Tooltip content">
          <span className="cursor-default border-primary-500 border-b-2 border-dashed">
            in the full
          </span>
        </Tooltip>{" "}
        <Tooltip placement="bottom" content="Tooltip content">
          <span className="cursor-default border-primary-500 border-b-2 border-dashed">
            range of
          </span>
        </Tooltip>{" "}
        <Tooltip placement="right" content="Tooltip content">
          <span className="cursor-default border-primary-500 border-b-2 border-dashed">
            visual intents
          </span>
        </Tooltip>
      </div>

    </div>
  );
}

export {
  TooltipExample,
  TooltipBasic,
  TooltipDisabled
};
