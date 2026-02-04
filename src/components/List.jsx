import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { Loader } from "./Loader";
import error500 from "/src/assets/500-error.svg";
import error404 from "/src/assets/404-error.svg";

import questionSearch from "/src/assets/question-search.svg";
import searchStart from "/src/assets/search-start.svg";

export const List = () => {
  console.log("--List--");
  const {
    gifUrlIds,
    gifUrlIdsStorage,
    statusFetch,
    searchValue,
    valueClicked,
  } = useContext(GiphyContext);

  console.log({ gifUrlIds });

  /*   console.log("--List--");
  console.log({ gifUrlIdsStorage }); */

  /* flex w-full justify-center flex-wrap ms:flex-col gap-4 */

  return (
    <>
      {!searchValue && !valueClicked ? (
        <>
          <div className="imgs-container">
            <img
              src={searchStart}
              alt="searchStart"
              className="imgs-speakers"
            />
          </div>
        </>
      ) : statusFetch === 200 ? (
        gifUrlIds.length === 0 ? (
          <>
            <div className="imgs-container">
              <img
                src={questionSearch}
                className="imgs-speakers"
                alt="questionSearch"
              />
              <p className="font-bold">Oops! Aqui no hay nada parecido.</p>
            </div>
          </>
        ) : (
          <div className="imgs-container">
            <ul className="columns-2 sm:columns-3 md:columns-4 gap-4 relative">
              {gifUrlIds.map(({ id, url }) => (
                <li key={id} className="mb-4">
                  <img src={url} alt="gif" className="w-full rounded-md" />
                </li>
              ))}
            </ul>
          </div>
        )
      ) : statusFetch >= 400 && statusFetch < 500 ? (
        <>
          <div className="imgs-container">
            <span>{statusFetch}</span>
            <img src={error404} alt="error404" className="imgs-speakers" />
          </div>
        </>
      ) : (
        <>
          <div className="imgs-container">
            <div>{statusFetch}</div>
            <img src={error500} alt="error500" className="imgs-speakers" />
          </div>
        </>
      )}
    </>
  );
};
