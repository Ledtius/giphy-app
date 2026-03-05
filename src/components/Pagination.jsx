import { useContext, useEffect, useState } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { limitOffset } from "../services/limitOffset";

export const Pagination = () => {
  const {
    clickedPaginationItem,
    setClickedPaginationItem,
    setPaginationValue,
    gifUrlIds,
    arrFrag,
    setArrFrag,
    searchValue,
    valueClicked,
  } = useContext(GiphyContext);

  const handleClick = (e) => {
    const valueClicked = Number(e.target.textContent);

    setClickedPaginationItem(valueClicked);
  };
  const paginationNumber = Math.ceil(gifUrlIds.length / 10);

  const handleClickArrowRight = () => {
    setClickedPaginationItem((prev) => {
      if (prev < paginationNumber) return prev + 1;
      else return prev;
    });
  };

  const handleClickArrowLeft = () => {
    setClickedPaginationItem((prev) => {
      if (prev > 1) return prev - 1;
      else return prev;
    });
  };

  useEffect(() => {
    if (clickedPaginationItem !== 1)
      setPaginationValue(limitOffset(clickedPaginationItem));
  }, [clickedPaginationItem]);
  let filtered;
  filtered = gifUrlIds.slice(0, 10);

  const [notLoop, setNotLoop] = useState(true);

  const divideElementFunction = (gapElements) => {
    setNotLoop(true);
    if (notLoop) {
      filtered = gifUrlIds.slice(gapElements, gapElements + 10);
      setNotLoop(!notLoop);
      setArrFrag(filtered);
    }
  };

  useEffect(() => {
    if (clickedPaginationItem === 1) {
      divideElementFunction(0);
    } else if (clickedPaginationItem === 2) {
      divideElementFunction(10);
    } else if (clickedPaginationItem === 3) {
      divideElementFunction(20);
    } else if (clickedPaginationItem === 4) {
      divideElementFunction(30);
    } else if (clickedPaginationItem === 5) {
      divideElementFunction(40);
    }
  }, [gifUrlIds]);

  let paginationArray = [];
  let count = 0;

  while (paginationArray.length !== paginationNumber) {
    count++;
    paginationArray.push(count);
  }

  return (
    <>
      <div
        className={
          gifUrlIds.length > 0
            ? `flex items-center justify-center w-full  gap-2 flex-wrap sm:max-w-sm mt-5 lg:max-w-105 `
            : `hidden`
        }
      >
        <div className="pagination-item-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left"
            onClick={handleClickArrowLeft}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>

        {paginationArray.map((value) => (
          <span
            className={
              clickedPaginationItem === value
                ? `pagination-item-active`
                : `pagination-item-shape`
            }
            key={value}
            onClick={handleClick}
          >
            {value}
          </span>
        ))}

        <div className="pagination-item-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right"
            onClick={handleClickArrowRight}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </>
  );
};
