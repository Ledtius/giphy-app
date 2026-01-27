import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const List = () => {
  console.log("--List--");
  const { gifUrlIds, gifUrlIdsStorage } = useContext(GiphyContext);

  /*   console.log("--List--");
  console.log({ gifUrlIdsStorage }); */

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
