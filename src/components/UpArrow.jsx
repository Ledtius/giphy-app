import { useEffect, useState } from "react";

export const UpArrow = () => {
  function handlerClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [arrowClicked, setArrowClicked] = useState(false);

  const [scrollValue, setScrollValue] = useState();

  useEffect(() => {
    let scrollValueDocument;

    function handleScroll() {
      scrollValueDocument = document.documentElement.scrollTop;

      if (scrollValueDocument) {
        setScrollValue(scrollValueDocument);
      } else {
        setScrollValue(scrollValueDocument);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrollValue
          ? `bg-blue-500 w-fit p-2 rounded-full cursor-pointer fixed bottom-5 right-5 animate-bounce opacity-100 scale-100 transition-all `
          : `transition-all opacity-0 scale-0 pointer-none bottom-5 right-5 fixed`
      }
      onClick={handlerClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-big-up-icon lucide-arrow-big-up stroke-white"
      >
        <path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
      </svg>
    </div>
  );
};
