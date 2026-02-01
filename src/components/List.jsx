import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { Loader } from "./Loader";

export const List = () => {
  console.log("--List--");
  const { gifUrlIds, gifUrlIdsStorage } = useContext(GiphyContext);

  /*   console.log("--List--");
  console.log({ gifUrlIdsStorage }); */

  /* flex w-full justify-center flex-wrap ms:flex-col gap-4 */

  return (
    <>
      <div className="w-full relative flex items-center">
        <ul className="columns-2 sm:columns-3 md:columns-4 gap-4 relative">
          {gifUrlIds.map(({ id, url }) => (
            <li key={id} className="mb-4">
              <img src={url} alt="gif" className="w-full rounded-md" />
            </li>
          ))}
          <Loader></Loader>
        </ul>
      </div>
    </>
  );
};
