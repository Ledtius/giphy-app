import { Error5xx } from "./Error5xx";
import { Error4xx } from "./Error4xx";
import { NotFound } from "./NotFound";
import { Success } from "./Success";
import { Start } from "./Start";
import { animation } from "../animations";

export const Conditional = ({
  searchValue,
  valueClicked,
  statusFetch,
  gifUrlIds,
  searchObject,
  searchValueList,
  fetchActive,
  setSearchValue,
}) => {
  let content;

  const { childrenAnimator, containerAnimator } = animation();

  const { value, response } = searchObject;

  const listValueClickedFiltered = searchValueList.filter(({ value }) => {
    return value === valueClicked;
  });

  const valueClickedFiltered = listValueClickedFiltered[0] || {};

  if (Object.keys(valueClickedFiltered).length === 0) {
    if (!value && !valueClicked) {
      content = Start(containerAnimator, childrenAnimator);
    } else if (statusFetch === 200 && response.length === 0) {
      content = NotFound(containerAnimator, childrenAnimator);
    } else if (statusFetch === 200 && response.length !== 0) {
      content = Success(response, containerAnimator, childrenAnimator);
    } else if (statusFetch >= 400 && statusFetch < 500) {
      content = Error4xx(containerAnimator, childrenAnimator, statusFetch);
    } else {
      content = Error5xx(containerAnimator, childrenAnimator, statusFetch);
    }
  } else {
    const { response } = valueClickedFiltered;

    if (response.length) {
      content = Success(response, containerAnimator, childrenAnimator);
    } else {
      setSearchValue(valueClicked);
      content = Error4xx(containerAnimator, childrenAnimator, statusFetch);
    }
  }

  return content;
};
