import { useContext, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const Toggle = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  const rootElement = document.getElementById("root");

  useEffect(() => {
    if (theme === "dark") {
      /* rootElement.style = "background-color:#0f172a"; */
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      /*         rootElement.style = "background-color:#fff";
       */
    }
  }, [theme]);

  /* relative left-0 sm:left-45 md:left-100 */
  return (
    <>
      <div className="w-fit flex items-center justify-center gap-2 sm:absolute sm:right-0 mr-10 ml-10 mb-5 min-w-34">
        <input
          className="hidden peer"
          type="checkbox"
          id="check"
          htmlFor="icon"
          onChange={toggleTheme}
        />
        <label
          htmlFor="check"
          className="block w-18 h-6 bg-amber-400 rounded-full before:content-[''] before:bg-gray-100 before:w-8 before:h-4 before:block before:rounded-full before:absolute before:m-1 peer-checked:bg-blue-600 peer-checked:before:translate-x-8 peer-checked:before:transition-all before:transition-all"
        ></label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          id="icon"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun-icon lucide-su peer-not-checked:stroke-amber-500 absolute sm:-left-4 left-19 dark:stroke-white "
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          htmlFor="check"
          className="lucide lucide-moon-icon lucide-moon peer-checked:stroke-blue-600"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
      </div>
    </>
  );
};
