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
      </form>
    </>
  );
};
