import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { limitOffset } from "../services/limitOffset";

export const Pagination = () => {
  const {
    clickedPaginationItem,
    setClickedPaginationItem,
    paginationValue,
    setPaginationValue,
    gifUrlIds,
  } = useContext(GiphyContext);

  const handleClick = (e) => {
    const valueClicked = Number(e.target.textContent);

    setClickedPaginationItem(valueClicked);
  };

  const paginationNumber = Math.ceil(gifUrlIds.length / 10);

  const divideGifUrlIds = [];
  let array = [];

  const crazy = gifUrlIds.filter((gifObj, i, arr) => {
    if (i <= 9) array = [...array, gifObj];
  });

  /* si el array es mayor a 10 = crea un array de 10 y metelo en otro array */

  const handleClickArrowRight = () => {
    setClickedPaginationItem((prev) => {
      if (prev < 5) return prev + 1;
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
    if (clickedPaginationItem)
      setPaginationValue(limitOffset(clickedPaginationItem));
  }, [clickedPaginationItem]);

  let paginationArray = [];
  let count = 0;
  
  while (paginationArray.length !== paginationNumber) {
    count++;
    paginationArray.push(count);
  }

  console.log(paginationArray);
  return (
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
  );
};
