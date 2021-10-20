import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from ".";

describe("<Pagination />", () => {
  test("Render <Pagination /> component", () => {
    const myFunction = jest.fn();

    render(
      <Pagination pageLimit={5} totalRecords={10} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.getByRole("list");
    const paginationButtons = screen.getAllByRole("button");
    const paginationButton3 = screen.queryByText("3");

    expect(
      paginationListEl
    ).toBeInTheDocument(); 

    expect(
      paginationListEl
    ).toBeVisible();
    
    expect(
      paginationListEl
    ).toHaveClass("list-none flex items-center justify-center gap-3");
    
    // Query first arrow button
    expect(
      paginationListEl.firstElementChild?.firstChild
    ).toBeDisabled();

    // Check that button contains svg element (icon)
    expect(
      paginationListEl.lastElementChild?.firstChild?.firstChild
    ).toHaveAttribute("fill", "none");

    // Expect 4 buttons
    expect(
      paginationButtons.length
    ).toBe(4);

    // Expect button with number "3" not to be shown
    expect(
      paginationButton3
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> with a dots button", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination pageLimit={3} totalRecords={50} onPageChanged={myFunction} />
    );

    const paginationButtons = screen.getAllByRole("button");
    const paginationButtonDots = screen.getByText("...");
    
    expect(
      paginationButtonDots
    ).toBeInTheDocument();

    expect(
      paginationButtonDots
    ).toHaveClass("bg-white text-surface-600 border-2 border-surface-500 hover:bg-surface-500 hover:text-white focus:bg-surface-500 focus:text-white");

    expect(
      paginationButtons[0]
    ).toBeDisabled();
  });

  test("Render <Pagination /> without dots button", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination totalRecords={10} pageLimit={2} pageNeighbours={0} onPageChanged={myFunction} />
    );
    
    const buttonDots = screen.queryByText("...");

    expect(
      buttonDots
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> with 0 page neighbours", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination totalRecords={12} pageLimit={2} pageNeighbours={0} onPageChanged={myFunction} />
    );

    const buttonDots = screen.getByText("...");
    const button4 = screen.queryByText("4");

    expect(
      buttonDots
    ).toBeInTheDocument();

    expect(
      button4
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> with 1 page neighbours", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination totalRecords={20} pageLimit={2} pageNeighbours={1} onPageChanged={myFunction} />
    );

    const buttonDots = screen.getByText("...");
    const button5 = screen.getByText("5");
    const button6 = screen.queryByText("6");

    expect(
      buttonDots
    ).toBeInTheDocument();

    expect(
      button5
    ).toBeInTheDocument();

    expect(
      button6
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> with 2 page neighbours", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination totalRecords={20} pageLimit={2} pageNeighbours={2} onPageChanged={myFunction} />
    );

    const buttonDots = screen.getByText("...");
    const button7 = screen.getByText("7");
    const button8 = screen.queryByText("8");

    expect(
      buttonDots
    ).toBeInTheDocument();

    expect(
      button7
    ).toBeInTheDocument();

    expect(
      button8
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> and navigate through pages using buttons", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination pageLimit={1} totalRecords={23} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.getByRole("list");
    let allButtons = screen.getAllByRole("button");
    const paginationButton3 = screen.getByText("3");
    let paginationButtonDots = screen.queryAllByText("...");
    
    expect(
      paginationListEl
    ).toBeInTheDocument();

    // Arrow left icon button should be disabled
    expect(
      allButtons[0]
    ).toBeDisabled();

    // Initially, there should be one dots (ellipsis) button
    expect(
      paginationButtonDots.length
    ).toBe(1);

    expect(
      paginationButtonDots[0]
    ).toBeInTheDocument();

    // Button with text "3" should be the one next to the dots button
    expect(
      paginationButton3
    ).toBeInTheDocument();

    // Click button with text "3" to start navigation
    userEvent.click(paginationButton3);

    allButtons = screen.getAllByRole("button");
    paginationButtonDots = screen.queryAllByText("...");

    // After click & start navigation, arrow left button should be enabled
    expect(
      allButtons[0]
    ).not.toBeDisabled();

    // After click, it should be two dots (ellipsis) buttons
    expect(
      paginationButtonDots.length
    ).toBe(2);

    // Click the last clickable number icon
    userEvent.click(allButtons[allButtons.length - 2]);

    allButtons = screen.getAllByRole("button");
    paginationButtonDots = screen.queryAllByText("...");

    // Arrow right navigation button now should be disabled
    expect(
      allButtons[allButtons.length - 1]
    ).toBeDisabled();

    // It should be now again only one dots (ellipsis) button
    expect(
      paginationButtonDots.length
    ).toBe(1);
  });

  test("Render <Pagination /> with no records", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination pageLimit={5} totalRecords={0} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.queryByRole("list");
    
    expect(
      paginationListEl
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> with a result of just one total page", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination pageLimit={5} totalRecords={5} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.queryByRole("list");
    const paginationButtons = screen.queryAllByRole("button");

    expect(
      paginationListEl
    ).toBeInTheDocument();

    expect(
      paginationButtons.length
    ).toBe(3);
  });

  test("Render <Pagination /> without records", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination totalRecords={0} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.queryByRole("list");

    expect(
      paginationListEl
    ).not.toBeInTheDocument();
  });

  test("Render <Pagination /> with default alignment", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination totalRecords={200} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.queryByRole("navigation");

    expect(
      paginationListEl
    ).toBeInTheDocument();

    expect(
      paginationListEl
    ).toHaveClass("justify-end");

    expect(
      paginationListEl
    ).not.toHaveClass("justify-start");
  });

  test("Render <Pagination /> with alignment", () => {
    const myFunction = jest.fn();
    
    render(
      <Pagination align="center" totalRecords={200} onPageChanged={myFunction} />
    );

    const paginationListEl = screen.queryByRole("navigation");

    expect(
      paginationListEl
    ).toBeInTheDocument();

    expect(
      paginationListEl
    ).toHaveClass("justify-center");

    expect(
      paginationListEl
    ).not.toHaveClass("justify-end");
  });
});