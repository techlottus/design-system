import { render, screen } from "@testing-library/react";
import Avatar from ".";

describe("<Avatar />", () => {
  it("render a default <Avatar />", async () => {
    render(
      <Avatar>
        <img
          data-testid="image-test"
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          alt="avatar"/>
      </Avatar>
    );

    const avatarEl = screen.getByRole("figure");
    const imgEl = screen.getByTestId("image-test");

    // render avatar component
    expect(
      avatarEl
    ).toBeInTheDocument();

    // render img
    expect(
      imgEl
    ).toBeInTheDocument();

    // verify classes
    expect(
      avatarEl
    ).toHaveClass("relative w-30 h-30");

  });

  it("render an <Avatar /> with size: xs", async () => {
    render(
      <Avatar size="xs">
        <img
          data-testid="image-test"
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          alt="avatar"/>
      </Avatar>
    );

    const avatarEl = screen.getByRole("figure");
    const imgEl = screen.getByTestId("image-test");

    // render avatar component
    expect(
      avatarEl
    ).toBeInTheDocument();

    // render img
    expect(
      imgEl
    ).toBeInTheDocument();

    // verify classes
    expect(
      avatarEl
    ).toHaveClass("relative w-9 h-9");

  });

  it("render an <Avatar /> with size: sm", async () => {
    render(
      <Avatar size="sm">
        <img
          data-testid="image-test"
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          alt="avatar"/>
      </Avatar>
    );

    const avatarEl = screen.getByRole("figure");
    const imgEl = screen.getByTestId("image-test");

    // render avatar component
    expect(
      avatarEl
    ).toBeInTheDocument();

    // render img
    expect(
      imgEl
    ).toBeInTheDocument();

    // verify classes
    expect(
      avatarEl
    ).toHaveClass("relative w-17 h-17");

  });

  it("render an <Avatar /> with size: md", async () => {
    render(
      <Avatar size="md">
        <img
          data-testid="image-test"
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          alt="avatar"/>
      </Avatar>
    );

    const avatarEl = screen.getByRole("figure");
    const imgEl = screen.getByTestId("image-test");

    // render avatar component
    expect(
      avatarEl
    ).toBeInTheDocument();

    // render img
    expect(
      imgEl
    ).toBeInTheDocument();

    // verify classes
    expect(
      avatarEl
    ).toHaveClass("relative w-30 h-30");

  });

  it("render an <Avatar /> with size: lg", async () => {
    render(
      <Avatar size="lg">
        <img
          data-testid="image-test"
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          alt="avatar"/>
      </Avatar>
    );

    const avatarEl = screen.getByRole("figure");
    const imgEl = screen.getByTestId("image-test");

    // render avatar component
    expect(
      avatarEl
    ).toBeInTheDocument();

    // render img
    expect(
      imgEl
    ).toBeInTheDocument();

    // verify classes
    expect(
      avatarEl
    ).toHaveClass("relative w-49 h-49");

  });

  it("render an <Avatar /> with size: xl", async () => {
    render(
      <Avatar size="xl">
        <img
          data-testid="image-test"
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          alt="avatar"/>
      </Avatar>
    );

    const avatarEl = screen.getByRole("figure");
    const imgEl = screen.getByTestId("image-test");

    // render avatar component
    expect(
      avatarEl
    ).toBeInTheDocument();

    // render img
    expect(
      imgEl
    ).toBeInTheDocument();

    // verify classes
    expect(
      avatarEl
    ).toHaveClass("relative w-65 h-65");

  });

});