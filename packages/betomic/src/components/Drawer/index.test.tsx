import { render, screen, waitFor } from "@testing-library/react";
import Drawer from "."

describe("<Drawer />", () => {
  it("initial <Drawer />", async () => {
    render(
      <Drawer>
        <p>Content drawer</p>
      </Drawer>
    );
    expect(
      screen.queryByText("Content drawer")
    ).not.toBeInTheDocument();
  });

  it("render a default <Drawer />", async () => {
    render(
      <Drawer open>
        <p>Content drawer</p>
      </Drawer>
    );

    const drawerEl = screen.queryByRole("dialog");
    const drawerContent = screen.getByText("Content drawer");

    await waitFor(() => {
      expect(
        drawerEl
      ).toBeInTheDocument();

      expect(
        drawerEl
      ).toHaveClass("drawer absolute left-0 right-0 top-0");

      expect(
        drawerContent
      ).toBeInTheDocument();

      expect(
        drawerContent.parentNode
      ).toHaveClass("w-full fixed z-20 bg-white flex flex-col rounded p-6 overflow-y-auto bottom-0 right-0 top-0 max-w-md");

    })
  });

  it("render a default <Drawer /> position: left", async () => {
    render(
      <Drawer open position="left">
        <p>Content drawer</p>
      </Drawer>
    );

    const drawerEl = screen.queryByRole("dialog");
    const drawerContent = screen.getByText("Content drawer");

    await waitFor(() => {
      expect(
        drawerEl
      ).toBeInTheDocument();

      expect(
        drawerEl
      ).toHaveClass("drawer absolute left-0 right-0 top-0");

      expect(
        drawerContent
      ).toBeInTheDocument();

      expect(
        drawerContent.parentNode
      ).toHaveClass("w-full fixed z-20 bg-white flex flex-col rounded p-6 overflow-y-auto bottom-0 left-0 top-0 max-w-md");

    })
  });

  it("render a default <Drawer /> position: bottom", async () => {
    render(
      <Drawer open position="bottom">
        <p>Content drawer</p>
      </Drawer>
    );

    const drawerEl = screen.queryByRole("dialog");
    const drawerContent = screen.getByText("Content drawer");

    await waitFor(() => {
      expect(
        drawerEl
      ).toBeInTheDocument();

      expect(
        drawerEl
      ).toHaveClass("drawer absolute left-0 right-0 top-0");

      expect(
        drawerContent
      ).toBeInTheDocument();

      expect(
        drawerContent.parentNode
      ).toHaveClass("w-full fixed z-20 bg-white flex flex-col rounded p-6 overflow-y-auto bottom-0 left-0 right-0 max-h-78");

    })
  });

  it("render a default <Drawer /> position: right", async () => {
    render(
      <Drawer open position="right">
        <p>Content drawer</p>
      </Drawer>
    );

    const drawerEl = screen.queryByRole("dialog");
    const drawerContent = screen.getByText("Content drawer");

    await waitFor(() => {
      expect(
        drawerEl
      ).toBeInTheDocument();

      expect(
        drawerEl
      ).toHaveClass("drawer absolute left-0 right-0 top-0");

      expect(
        drawerContent
      ).toBeInTheDocument();

      expect(
        drawerContent.parentNode
      ).toHaveClass("w-full fixed z-20 bg-white flex flex-col rounded p-6 overflow-y-auto bottom-0 right-0 top-0 max-w-md");

    })
  });

  it("render a default <Drawer /> with close button", async () => {
    render(
      <Drawer open>
        <p>Content drawer</p>
      </Drawer>
    );

    const drawerEl = screen.queryByRole("dialog");
    const drawerContent = screen.getByText("Content drawer");

    await waitFor(() => {
      expect(
        drawerEl
      ).toBeInTheDocument();

      expect(
        drawerEl
      ).toHaveClass("drawer absolute left-0 right-0 top-0");

      expect(
        drawerContent
      ).toBeInTheDocument();

      expect(
        drawerContent.parentNode
      ).toHaveClass("w-full fixed z-20 bg-white flex flex-col rounded p-6 overflow-y-auto bottom-0 right-0 top-0 max-w-md");

    })
  });

});
