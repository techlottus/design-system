import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toaster, toast } from "."

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });
});

describe("<Toast />", () => {
  it("render a simple <Toast />", async () => {
    render(
        <div>
          <button
            className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
            onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
              variant: "success"
            })}>
            Success toast
          </button>
          <Toaster topOffset={84} />
        </div>
    );

    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    const toastEl = screen.getByText("Success are to notify the user about a process that already happens well done.")

    // button to fires a toast
    expect(
      buttonEl
    ).toBeInTheDocument();
    expect(
      buttonEl
    ).toHaveClass("px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat");

    // Display a toast
    expect(
      toastEl
    ).toBeInTheDocument()
    expect(
      toastEl
    ).toHaveClass("text-sm lg:text-base font-base font-normal leading-4 lg:leading-5 text-surface-600")

  });

});
