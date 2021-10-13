import { render, screen } from "@testing-library/react";
import Alert from ".";

describe("<Alert />", () => {
  it("render a simple <Alert />", async () => {
    render(
      <Alert>
        Example alert
      </Alert>
    );

    const alertEl = screen.getByRole("alert");
    const alertContentEl = screen.getByText("Example alert");

    // alert reference element
    expect(
      alertEl
    ).toBeInTheDocument();

    // verify default classes
    expect(
      alertEl
    ).toHaveClass("max-w-68 md:max-w-full w-full border rounded pointer-events-auto overflow-hidden bg-white");

    // alert content visible
    expect(
      alertContentEl
    ).toBeInTheDocument();

  });

  it("render a simple <Alert /> type: success", async () => {
    render(
      <Alert type="success">
        Example alert
      </Alert>
    );

    const alertEl = screen.getByRole("alert");
    const alertContentEl = screen.getByText("Example alert");

    // alert reference element
    expect(
      alertEl
    ).toBeInTheDocument();

    // verify classes for type: success
    expect(
      alertEl
    ).toHaveClass("max-w-68 md:max-w-full w-full border rounded pointer-events-auto overflow-hidden bg-success-300 border-success-500");

    // alert content visible
    expect(
      alertContentEl
    ).toBeInTheDocument();

  });

  it("render a simple <Alert /> type: error", async () => {
    render(
      <Alert type="error">
        Example alert
      </Alert>
    );

    const alertEl = screen.getByRole("alert");
    const alertContentEl = screen.getByText("Example alert");

    // alert reference element
    expect(
      alertEl
    ).toBeInTheDocument();

    // verify classes for type: error
    expect(
      alertEl
    ).toHaveClass("max-w-68 md:max-w-full w-full border rounded pointer-events-auto overflow-hidden bg-error-500 border-error-300");

    // alert content visible
    expect(
      alertContentEl
    ).toBeInTheDocument();

  });

  it("render a simple <Alert /> type: info", async () => {
    render(
      <Alert type="info">
        Example alert
      </Alert>
    );

    const alertEl = screen.getByRole("alert");
    const alertContentEl = screen.getByText("Example alert");

    // alert reference element
    expect(
      alertEl
    ).toBeInTheDocument();

    // verify classes for type: info
    expect(
      alertEl
    ).toHaveClass("max-w-68 md:max-w-full w-full border rounded pointer-events-auto overflow-hidden bg-info-100 border-info-500");

    // alert content visible
    expect(
      alertContentEl
    ).toBeInTheDocument();

  });

  it("render a simple <Alert /> type: warning", async () => {
    render(
      <Alert type="warning">
        Example alert
      </Alert>
    );

    const alertEl = screen.getByRole("alert");
    const alertContentEl = screen.getByText("Example alert");

    // alert reference element
    expect(
      alertEl
    ).toBeInTheDocument();

    // verify classes for type: warning
    expect(
      alertEl
    ).toHaveClass("max-w-68 md:max-w-full w-full border rounded pointer-events-auto overflow-hidden bg-warning-200 border-warning-500");

    // alert content visible
    expect(
      alertContentEl
    ).toBeInTheDocument();

  });

  it("verify <Alert /> only render one child", async () => {
    render(
      <Alert type="success">
        Example alert
        <div>
          Another child
        </div>
      </Alert>
    );

    const alertEl = screen.getByRole("alert");
    const alertContentEl = screen.getByText("Example alert");
    const extraEl = screen.queryByText("Another child");

    // alert reference element
    expect(
      alertEl
    ).toBeInTheDocument();

    // verify classes for type: success
    expect(
      alertEl
    ).toHaveClass("max-w-68 md:max-w-full w-full border rounded pointer-events-auto overflow-hidden bg-success-300 border-success-500");

    // alert content visible
    expect(
      alertContentEl
    ).toBeInTheDocument();
    
    // Verify the second child not render
    expect(
      extraEl
    ).not.toBeInTheDocument();

  });

});
