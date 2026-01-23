import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const List = () => {
  console.log("--List--");
  const { gifUrlIds } = useContext(GiphyContext);

  console.log(gifUrlIds);

  return (
    <>
      <ul>
        {gifUrlIds.map((gifUrl) => (
          <li>
            <img src={gifUrl} alt="gif" key={crypto.randomUUID()} />
          </li>
        ))}
      </ul>
    </>
  );
};
