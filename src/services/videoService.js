import * as request from "~/utils/httpRequest";

export const getVideo = async ({ type, page }) => {
  try {
    const res = await request.get("videos", {
      params: {
        type,
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
