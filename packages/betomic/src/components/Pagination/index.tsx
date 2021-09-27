import React, { MouseEvent, useEffect, useState } from "react";
import cn from "classnames";
import { ArrowLeftIcon, ArrowRightIcon } from "@exponentialeducation/iconography/icons";
import { Button } from "..";

interface PaginationData {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
};

interface IPagination {
  onPageChanged: (data: PaginationData) => void;
  pageLimit?: number;
  pageNeighbours?: number,
  totalRecords: number;
};

const Pagination: React.FC<IPagination> = (props: IPagination) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [extraNeighbourPages, setExtraNeighbourPages] = useState(0);

  const { totalRecords = 0, pageLimit = 30, pageNeighbours = 0, onPageChanged = f => f } = props;

  useEffect(() => {
    setExtraNeighbourPages(Math.max(0, Math.min(pageNeighbours, 2)));
    setTotalPages(Math.ceil(totalRecords / pageLimit));
    gotoPage(1);
  }, [totalRecords, pageLimit, pageNeighbours]);


  const LEFT_DOTS = "LEFT";
  const RIGHT_DOTS = "RIGHT";

  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    };

    return range;
  };

  const fetchPageNumbers = () => {
    const pageNeighbours: number = extraNeighbourPages;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(...) and right(...) indicators
     */
    const totalNumbers = (extraNeighbourPages * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages: (number | string)[] = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) ... {5 6} [7] {8 9} (10)
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_DOTS, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} ... (10)
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_DOTS];
          break;
        }

        // handle: (1) ... {4 5} [6] {7 8} ... (10)
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_DOTS, ...pages, RIGHT_DOTS];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const gotoPage = (page: number) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit
    };

    setCurrentPage(currentPage || 1);
    onPageChanged(paginationData);
  };

  const handleClick = (page: number | string) => (evt: MouseEvent) => {
    evt.preventDefault();
    gotoPage(Number(page));
  };

  const handleMoveLeft = (evt: MouseEvent) => {
    evt.preventDefault();
    gotoPage(currentPage - (extraNeighbourPages * 2) - 1);
  };

  const handleMoveRight = (evt: MouseEvent) => {
    evt.preventDefault();
    gotoPage(currentPage + (extraNeighbourPages * 2) + 1);
  };

  const pages: (string | number)[] = fetchPageNumbers();
  
  // No need to display pagination buttons since it's only one page
  if (!totalRecords || totalPages === 1) return null;

  const commonClasses = cn("list-none flex items-center justify-center gap-3");

  return (
    <nav>
      <ul className={commonClasses}>
        <li>
          <Button
            icon
            variant="tertiary"
            disabled={currentPage <= 1}
            onClick={() => gotoPage(currentPage - 1)}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </Button>
        </li>
        { pages.map((page, index) => {

          if (page === LEFT_DOTS || page === RIGHT_DOTS) return (
            <li key={index}>
              <Button
                icon
                variant="tertiary"
                onClick={
                  page === LEFT_DOTS ?
                    handleMoveLeft :
                    handleMoveRight
                }
              >
                ...
              </Button>
            </li>
          );

          return (
            <li key={index}>
              <Button
                icon
                variant={currentPage === page ? "secondary" : "tertiary"}
                onClick={handleClick(page)}
              >
                {page}
              </Button>
            </li>
          );

        })}
        <li>
          <Button
            icon
            variant="tertiary"
            disabled={currentPage >= totalPages}
            onClick={() => gotoPage(currentPage + 1)}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;