import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const List = () => {
  console.log("--List--");
  const { gifUrls } = useContext(GiphyContext);

  console.log(gifUrls);

  return (
    <>
      <ul>
        {gifUrls.map((gifUrl) => (
          <li>
            <img src={gifUrl} alt="gif" key={crypto.randomUUID()} />
          </li>
        ))}
      </ul>
    </>
  );
};
