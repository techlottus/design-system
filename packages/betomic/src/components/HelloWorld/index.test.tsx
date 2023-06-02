import { render, screen } from '@testing-library/react';
import HelloWorld from '.';

describe("<HelloWorld />", () => {
  it("render component with default message", () => {
    render(<HelloWorld />)
    expect(
      screen.getByText("Hello World!,")
    ).toBeInTheDocument();
  });

  it("render component with custom message", () => {
    render(<HelloWorld message="by Engineering team" />)
    expect(
      screen.getByText("Hello World!, by Engineering team")
    ).toBeInTheDocument();
  });
});