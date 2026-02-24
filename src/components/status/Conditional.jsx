import { Error5xx } from "./Error5xx";
import { Error4xx } from "./Error4xx";
import { NotFound } from "./NotFound";
import { Success } from "./Success";
import { Start } from "./Start";
import { animation } from "../animations";

export const Conditional = (
  searchValue,
  valueClicked,
  statusFetch,
  gifUrlIds,
  searchObject,
  searchValueList,
) => {
  let content;

  console.log(searchObject);
  const { childrenAnimator, containerAnimator } = animation();

  const { value, response } = searchObject;

  console.log(searchValueList);

  const listValueClickedFiltered = searchValueList.filter(({ value }) => {
    console.log(value);
    return value === valueClicked;
  });

  const valueClickedFiltered = listValueClickedFiltered[0] || {};

  // console.log({ valueClickedFiltered });

  // console.log({ listValueClickedFiltered });
  // console.log({ valueClicked });

  // console.log(value);
  // console.log({ statusFetch });
  if (Object.keys(valueClickedFiltered).length === 0) {
    if (!value && !valueClicked) {
      console.log("1");
      content = Start(containerAnimator, childrenAnimator);
    } else if (statusFetch === 200 && response.length === 0) {
      console.log("2");
      content = NotFound(containerAnimator, childrenAnimator);
    } else if (statusFetch === 200 && response.length !== 0) {
      console.log("3");
      console.log("3332");
      content = Success(response, containerAnimator, childrenAnimator);
    } else if (statusFetch >= 400 && statusFetch < 500) {
      console.log("4");
      content = Error4xx(containerAnimator, childrenAnimator, statusFetch);
    } else {
      console.log("5");
      content = Error5xx(containerAnimator, childrenAnimator, statusFetch);
    }
  } else {
    const { response } = valueClickedFiltered;
    console.log(response);

    if (response.length) {
      console.log("here");
      content = Success(response, containerAnimator, childrenAnimator);
    } else {
      console.log("here");
      content = Error4xx(containerAnimator, childrenAnimator, statusFetch);
    }
  }

  return content;
};
