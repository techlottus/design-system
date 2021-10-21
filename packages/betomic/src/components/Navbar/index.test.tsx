import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe("<Navbar />", () => {
  it("render a default <Navbar />", async () => {
    const { container } = render(
      <Navbar>
        Lorem ipsum dolor sit amet.
      </Navbar>
    );

    const containerEl = container.firstChild;

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("py-4 md:py-8 bg-white");

    expect(
      containerEl?.firstChild
    ).toHaveClass("px-4 flex items-center justify-between container mx-auto max-w-screen-xl");

    expect(
      screen.getByText("Lorem ipsum dolor sit amet.")
    ).toBeInTheDocument();

  });

  it("render a 'fixed' <Navbar />", async () => {
    const { container } = render(
      <Navbar fixedToTop>
        Lorem ipsum dolor sit amet.
      </Navbar>
    );

    const containerEl = container.firstChild;

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("py-4 md:py-8 bg-white z-50 fixed fixed top-0 left-0 right-0 min-w-full");

    expect(
      screen.getByText("Lorem ipsum dolor sit amet.")
    ).toBeInTheDocument();

  });

  it("render a <Navbar /> with shadow", async () => {
    const { container } = render(
      <Navbar shadow>
        Lorem ipsum dolor sit amet.
      </Navbar>
    );

    const containerEl = container.firstChild;

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("py-4 md:py-8 bg-white shadow");

    expect(
      screen.getByText("Lorem ipsum dolor sit amet.")
    ).toBeInTheDocument();

  });

  it("render a <Navbar /> with <NavBar.Brand /> component", async () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand>
          <a href="https://bedu.org" data-testid="brand-test" aria-label="BEDU"><svg viewBox="0 0 136 36" width="136" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-30 h-8 lg:w-34 lg:h-9"><path d="M91.831 27.376l-2.853 1.196H78.576V7.408h10.441l2.64 1.196 1.067 2.894.02 13.254-.913 2.624zm5.764-24.328L90.53.0H71.124v24.752l.02 11.229h19.484l7.2-3.164 2.425-6.772-.019-15.84-2.64-7.157zM20.726 27.299l-2.833 1.273h-7.88L7.472 23.77V12.231l2.543-4.804h7.898l2.64 1.119.679 1.832-4.774 7.679 4.812 7.698-.543 1.543zm8.772-16.11L26.47 2.972 19.445.0H5.511L0 10.399V25.6L5.511 36h13.992l7.2-3.241 2.814-7.852-4.27-6.83 4.25-6.887zM128.529.0v26.18l-4.852 2.392h-5.376l-4.851-2.392V0h-7.472v30.656l10.48 5.325h9.063L136 30.656V0h-7.471zM65.36.0H44.674v7.408h20.688V0zm0 28.572H44.674v7.409h20.688v-7.409zM49.913 20.2v-4.206l-1.125-1.1-4.134-.02v-4.109l-1.126-1.1h-4.21l-1.126 1.12-.02 4.09-4.114.019-1.125 1.1v4.205l1.106 1.12h3.144l.99-.02.019.984v3.145l1.125 1.119h4.212l1.125-1.12V21.3l4.134.02 1.125-1.12z" fill="#182226"></path></svg></a>
        </Navbar.Brand>
      </Navbar>
    );

    const containerEl = container.firstChild;
    const brandEl = screen.getByTestId("brand-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("py-4 md:py-8 bg-white");

    expect(
      brandEl
    ).toBeInTheDocument();

  });

  it("render a <Navbar /> with size: 'sm'", async () => {
    const { container } = render(
      <Navbar shadow size="sm">
        Lorem ipsum dolor sit amet.
      </Navbar>
    );

    const containerEl = container.firstChild;

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("py-2 bg-white shadow");

    expect(
      screen.getByText("Lorem ipsum dolor sit amet.")
    ).toBeInTheDocument();

  });

});