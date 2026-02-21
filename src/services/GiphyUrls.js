export const GiphyUrls = (data) => {
  let gifUrlIds = [];

  data?.forEach((gifObj) => {
    const { images: imagesObj, id } = gifObj;

    const { fixed_height: fixed_heightObj } = imagesObj;

    const { url } = fixed_heightObj;

    gifUrlIds.push({ url, id });
  });

  return gifUrlIds;
};
