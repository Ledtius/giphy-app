import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { limitOffset } from "../services/limitOffset";

export const Pagination = () => {
  const {
    clickedPaginationItem,
    setClickedPaginationItem,
    paginationValue,
    setPaginationValue,
    gifUrlIds
    
  } = useContext(GiphyContext);

 console.log(gifUrlIds)
  const handleClick = (e) => {
    const valueClicked = Number(e.target.textContent);

    setClickedPaginationItem(valueClicked);
  };

  const handleClickArrowRight = () => {
    setClickedPaginationItem((prev) => {
      console.log(prev);
      if (prev < 5) return prev + 1;
      else return prev;
    });
  };

  const handleClickArrowLeft = () => {
    setClickedPaginationItem((prev) => {
      console.log(prev);
      if (prev > 1) return prev - 1;
      else return prev;
    });
  };

  useEffect(() => {
    if (clickedPaginationItem)
      setPaginationValue(limitOffset(clickedPaginationItem));
  }, [clickedPaginationItem]);

  const paginationArray = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center justify-center w-full max-w-fit gap-2 flex-wrap sm:flex-nowrap mt-5 ">
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
