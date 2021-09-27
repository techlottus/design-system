import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("<Pagination />", () => {
  test("Render <Pagination /> component", () => {
    const myFunction = (currentPageData: any) => {
      console.log("currentPageData: ", currentPageData);
    } 
    
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
    const myFunction = (currentPageData: any) => {
      console.log("currentPageData: ", currentPageData);
    } 
    
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
});