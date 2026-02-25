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
}) => {
  let content;

  const { childrenAnimator, containerAnimator } = animation();

  if (!searchValue && !valueClicked) {
    content = Start(containerAnimator, childrenAnimator);
  } else if (statusFetch === 200 && gifUrlIds.length === 0) {
    content = NotFound(containerAnimator, childrenAnimator);
  } else if (statusFetch === 200 && gifUrlIds.length !== 0) {
    content = Success(gifUrlIds, containerAnimator, childrenAnimator);
  } else if (statusFetch >= 400 && statusFetch < 500) {
    content = Error4xx(containerAnimator, childrenAnimator, statusFetch);
  } else {
    content = Error5xx(containerAnimator, childrenAnimator, statusFetch);
  }

  return content;
};
