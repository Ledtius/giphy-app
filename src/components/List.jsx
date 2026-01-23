import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const List = () => {
  console.log("--List--");
  const { gifUrlIds } = useContext(GiphyContext);

  return (
    <>
      <ul>
        {gifUrlIds.map(({ id, url }) => (
          <li key={id}>
            <img src={url} alt="gif" />
          </li>
        ))}
      </ul>
    </>
  );
};
