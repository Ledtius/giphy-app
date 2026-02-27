import { Error5xx } from "./Error5xx";
import { Error4xx } from "./Error4xx";
import { NotFound } from "./NotFound";
import { Success } from "./Success";
import { Start } from "./Start";
import { animations } from "../animations";

export const Conditional = ({
  searchValue,
  valueClicked,
  statusFetch,
  gifUrlIds,
}) => {
  let content;

  const { childrenAnimation, containerAnimator } = animations();

  if (!searchValue && !valueClicked) {
    content = Start(containerAnimator, childrenAnimation);
  } else if (statusFetch === 200 && gifUrlIds.length === 0) {
    content = NotFound(containerAnimator, childrenAnimation);
  } else if (statusFetch === 200 && gifUrlIds.length !== 0) {
    content = Success(
      gifUrlIds,
      containerAnimator,
      childrenAnimation,
      valueClicked,
    );
  } else if (statusFetch >= 400 && statusFetch < 500) {
    content = Error4xx(containerAnimator, childrenAnimation, statusFetch);
  } else {
    content = Error5xx(containerAnimator, childrenAnimation, statusFetch);
  }

  return content;
};
