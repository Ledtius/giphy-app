export const GiphyUrls = (data) => {
  console.log("--GifphyUrls--");
  let gifUrls = [];

  data?.forEach((gifObj) => {
    const { images: imagesObj } = gifObj;

    const { fixed_height: fixed_heightObj } = imagesObj;

    const { url } = fixed_heightObj;

    gifUrls.push(url);
  });

  return gifUrls;
};
