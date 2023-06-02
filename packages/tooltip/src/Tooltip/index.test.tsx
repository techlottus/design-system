import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "."

describe("<Tooltip />", () => {
  it("render a simple <Tooltip />", async () => {
    render(
      <Tooltip content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    await waitFor(() => {
      // tooltip reference element
      expect(
        screen.getByText("a tooltip")
      ).toBeInTheDocument();
      // tooltip content
      expect(
        screen.getByText("Tooltip content")
      ).toBeVisible();
      // tooltip invisible
      expect(
        screen.getByText("Tooltip content")
      ).toHaveClass("invisible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-bottom");
    })
  });

  it("show a <Tooltip /> with default placement: 'bottom'", async () => {
    render(
      <Tooltip content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-bottom");
    })
  });

  it("show a <Tooltip /> with placement: 'top'", async () => {
    render(
      <Tooltip placement="top" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-top");
    })
  });

  it("show a <Tooltip /> with placement: 'top-start'", async () => {
    render(
      <Tooltip placement="top-start" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-top-start");
    })
  });

  it("show a <Tooltip /> with placement: 'top-end'", async () => {
    render(
      <Tooltip placement="top-end" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-top-end");
    })
  });

  it("show a <Tooltip /> with placement: 'right'", async () => {
    render(
      <Tooltip placement="right" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-right");
    })
  });

  it("show a <Tooltip /> with placement: 'right-start'", async () => {
    render(
      <Tooltip placement="right-start" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-right-start");
    })
  });

  it("show a <Tooltip /> with placement: 'right-end'", async () => {
    render(
      <Tooltip placement="right-end" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-right-end");
    })
  });

  it("show a <Tooltip /> with placement: 'bottom'", async () => {
    render(
      <Tooltip placement="bottom" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-bottom");
    })
  });

  it("show a <Tooltip /> with placement: 'bottom-start'", async () => {
    render(
      <Tooltip placement="bottom-start" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-bottom-start");
    })
  });

  it("show a <Tooltip /> with placement: 'bottom-end'", async () => {
    render(
      <Tooltip placement="bottom-end" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-bottom-end");
    })
  });

  it("show a <Tooltip /> with placement: 'left'", async () => {
    render(
      <Tooltip placement="left" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-left");
    })
  });

  it("show a <Tooltip /> with placement: 'left-start'", async () => {
    render(
      <Tooltip placement="left-start" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-left-start");
    })
  });

  it("show a <Tooltip /> with placement: 'left-end'", async () => {
    render(
      <Tooltip placement="left-end" content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.getByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element
      expect(
        tooltipEl
      ).toBeInTheDocument();
      // tooltip visible
      expect(
        tooltipEl
      ).toHaveClass("visible tooltip p-4 bg-surface-600 text-white rounded font-rubik text-xs fixed z-50 arrow-left-end");
    })
  });

  it("render a <Tooltip /> disabled", async () => {
    render(
      <Tooltip disabled content="Tooltip content">
        <span className="cursor-default italic border-primary-500 border-b-2 border-dashed">
          a tooltip
        </span>
      </Tooltip>
    );

    const tooltiReferenceEl = screen.getByText("a tooltip");
    const tooltipEl = screen.queryByText("Tooltip content");
    userEvent.hover(tooltiReferenceEl);

    await waitFor(() => {
      // tooltip element as simple child
      expect(
        tooltiReferenceEl
      ).toBeInTheDocument();
      // tooltip !visible
      expect(
        tooltipEl
      ).not.toBeInTheDocument();
    })
  });

});
