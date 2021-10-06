import { render, screen } from "@testing-library/react";
import Container from ".";

describe("<Container />", () => {
  it("render a default <Container />", async () => {
    const { container } = render(
      <Container>
        Lorem ipsum dolor sit amet.
      </Container>
    );

    const containerEl = container.firstChild;

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      screen.getByText("Lorem ipsum dolor sit amet.")
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("container px-4 mx-auto")

  });

  it("render a 'fluid' <Container />", async () => {
    const { container } = render(
      <Container fluid>
        Lorem ipsum dolor sit amet.
      </Container>
    );

    const containerEl = container.firstChild;

    expect(
      containerEl
    ).toBeInTheDocument();

    expect(
      screen.getByText("Lorem ipsum dolor sit amet.")
    ).toBeInTheDocument();

    expect(
      containerEl
    ).toHaveClass("container px-4")

  });

});