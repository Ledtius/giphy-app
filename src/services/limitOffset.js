export const limitOffset = (valueClicked) => {
  if (valueClicked === 1) {
    return { limit: 10, offset: 0 };
  } else if (valueClicked === 2) {
    return { limit: 20, offset: 10 };
  } else if (valueClicked === 3) {
    return { limit: 30, offset: 20 };
  } else if (valueClicked === 4) {
    return { limit: 40, offset: 30 };
  } else {
    return { limit: 50, offset: 10 };
  }
};
