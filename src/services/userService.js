import * as request from "~/utils/httpRequest";

export const getSuggested = async ({ page, perPage }) => {
  try {
    const res = await request.get("users/suggested", {
      params: {
        page,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async ({ nickname }) => {
  try {
    const res = await request.get(`users/@${nickname}`, {
      params: {
        nickname,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw error để bắt ở nơi gọi hàm getUser nếu cần
  }
};

export const getFollowing = async ({ page }) => {
  try {
    const res = await request.get("me/followings", {
      params: {
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
