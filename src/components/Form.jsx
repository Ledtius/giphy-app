import { useContext, useState } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const Form = () => {
  console.log("--Form--");

  const { setSearchValue } = useContext(GiphyContext);

  const [inputValue, setInputValue] = useState("");

  const handleInput = (input) => {
    const inputLV = input.target.value;

    console.log("--Form-- setInputValue");
    setInputValue(inputLV);
  };

  const handleClick = () => {
    console.log("--Form-- setSearchValue");

    setSearchValue(inputValue.trim());

    setInputValue("");
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <section className="sm: min-w-70 flex gap-2 relative">
          <svg
            className="w-5 stroke-slate-400 absolute top-3 left-3 z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>

          <input
            className="input"
            type="text"
            id="search"
            name="search"
            autoComplete="off"
            value={inputValue}
            onChange={handleInput}
          />

          <button className="search-btn" onClick={handleClick}>
            Buscar
          </button>
        </section>
      </form>
    </>
  );
};
