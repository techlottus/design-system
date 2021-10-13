import { render, screen } from "@testing-library/react";
import Nav from ".";

describe("<Nav />", () => {
  it("render a default <Nav />", async () => {
    const { container } = render(
      <Nav>
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex justify-start");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

  it("render a <Nav /> align center", async () => {
    const { container } = render(
      <Nav align="center">
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex justify-center");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

  it("render a <Nav /> align right", async () => {
    const { container } = render(
      <Nav align="right">
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex justify-end");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

  it("render a default <Nav /> vertical", async () => {
    const { container } = render(
      <Nav vertical>
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex flex-col items-start justify-start");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

  it("render a <Nav /> vertical + align center", async () => {
    const { container } = render(
      <Nav vertical align="center">
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex flex-col items-center justify-center");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

  it("render a <Nav /> vertical + align right", async () => {
    const { container } = render(
      <Nav vertical align="right">
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex flex-col items-end justify-end");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

  it("render a <Nav /> with custom classes", async () => {
    const { container } = render(
      <Nav className="font-montserrat font-bold">
        <Nav.Item>
          <a href="#" data-testid="item-test">Inicio</a>
        </Nav.Item>
      </Nav>
    );

    const containerEl = container.firstChild;
    const itemEl = screen.getByTestId("item-test");

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("font-montserrat font-bold");

    expect(
      containerEl?.firstChild
    ).toHaveClass("list-none p-0 m-0 flex justify-start");

    expect(
      itemEl
    ).toBeInTheDocument();

    expect(
      itemEl.parentNode
    ).toHaveClass("p-0 m-0");

  });

});