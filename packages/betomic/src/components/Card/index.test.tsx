import { render } from "@testing-library/react";
import Card from ".";

describe("<Card />", () => {
  test("Render default card", () => {
    const { container } = render(
      <Card>
        Hi I'm a card!
      </Card>
    );
    
    const cardContainer = container.firstChild;

    expect(
      cardContainer
    ).toBeInTheDocument();

    expect(
      cardContainer
    ).toHaveClass("flex flex-col p-4 bg-white rounded shadow-sm hover:shadow");
  });

  test("Render card with body", () => {
    const { container } = render(
      <Card>
        <Card.Body className="text-surface-600">
          Hi I'm a card with body!
        </Card.Body>
      </Card>
    );
    
    const cardContainer = container.firstChild;

    const cardBodyContainer = cardContainer?.firstChild;

    expect(
      cardContainer
    ).toBeInTheDocument();

    expect(
      cardBodyContainer
    ).toBeInTheDocument();

    expect(
      cardBodyContainer
    ).toHaveClass("text-surface-600");

  });
});