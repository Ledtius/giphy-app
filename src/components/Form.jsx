import { useContext, useState } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { motion } from "motion/react";
import { animations } from "./animations";

export const Form = () => {
  const { searchBtnAnimation, componentsAnimation } = animations();

  const { setSearchValue, setSearchObject } = useContext(GiphyContext);

  const [inputValue, setInputValue] = useState("");

  const handleInput = (input) => {
    const inputLV = input.target.value;

    setInputValue(inputLV);
  };

  const handleClick = () => {
    setSearchValue(inputValue.trim());

    setSearchObject({
      value: inputValue.trim(),
      id: crypto.randomUUID(),
      response: [],
    });

    setInputValue("");
  };

  return (
    <>
      <motion.form
        variants={componentsAnimation}
        key="form"
        transition="transition"
        className="md:max-w-150 w-full flex flex-col items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <section className="sm: min-w-70 flex gap-2 relative max-w-150 w-full">
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
            className="input element-shape"
            type="text"
            placeholder="Michael Jordan"
            id="search"
            name="search"
            autoComplete="off"
            value={inputValue}
            onChange={handleInput}
          />

          <motion.button
            className="search-btn shadow-md element-shape"
            onClick={handleClick}
            variants={searchBtnAnimation}
            whileHover="whileHover"
            whileTap="whileTap"
            transition="transition"
            damping="damping"
          >
            Buscar
          </motion.button>
        </section>
      </motion.form>
    </>
  );
};
