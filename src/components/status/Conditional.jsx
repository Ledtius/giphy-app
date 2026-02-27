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
    content = (
      <Start
        containerAnimator={containerAnimator}
        childrenAnimation={childrenAnimation}
      />
    );
  } else if (statusFetch === 200 && gifUrlIds.length === 0) {
    content = (
      <NotFound
        containerAnimator={containerAnimator}
        childrenAnimation={childrenAnimation}
      />
    );
  } else if (statusFetch === 200 && gifUrlIds.length !== 0) {
    content = (
      <Success
        gifUrlIds={gifUrlIds}
        containerAnimator={containerAnimator}
        childrenAnimation={childrenAnimation}
        valueClicked={valueClicked}
      />
    );
  } else if (statusFetch >= 400 && statusFetch < 500) {
    content = (
      <Error4xx
        containerAnimator={containerAnimator}
        childrenAnimation={childrenAnimation}
        statusFetch={statusFetch}
      />
    );
  } else {
    content = (
      <Error5xx
        containerAnimator={containerAnimator}
        childrenAnimation={childrenAnimation}
        statusFetch={statusFetch}
      />
    );
  }

  return content;
};
