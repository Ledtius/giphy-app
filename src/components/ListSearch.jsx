import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";

export const ListSearch = () => {
  console.log("--ListSearch--");
  //   console.log("");
  const { searchValueList, searchValue } = useContext(GiphyContext);

  useEffect(() => {
    console.log("**useEffect of ListSearch**");
    console.log(searchValue);
  }, [searchValue]);

  console.log(searchValueList);
  return (
    <>
      {searchValueList.map((value) => (
        <h2 key={crypto.randomUUID()}>{value}</h2>
      ))}
    </>
  );
};
