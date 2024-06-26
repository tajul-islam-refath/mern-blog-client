import api from "../utils/Interceptors";

export const getPosts = async ({ page = 1, limit = 10, search = "" }) => {
  try {
    const encodedSearch = encodeURIComponent(search); // constructing URLs with query parameters to prevent injection attacks
    const { data } = await api.get(
      `/articles?page=${page}&limit=${limit}&search=${encodedSearch}`
    );
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const getUserPosts = async (page = 1, limit = 10, search = "") => {
  try {
    const encodedSearch = encodeURIComponent(search); // constructing URLs with query parameters to prevent injection attacks
    const { data } = await api.get(
      `/articles/author/self?page=${page}&limit=${limit}&search=${encodedSearch}`
    );
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const createPost = async (formData) => {
  try {
    const { data } = await api.post("/articles", formData);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const getSinglePost = async (id) => {
  try {
    const { data } = await api.get(`/articles/${id}`);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const getBookmarksPost = async (id) => {
  try {
    const { data } = await api.get(`/users/me/bookmarks`);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const addPostToBookmark = async (id) => {
  try {
    const { data } = await api.get(`/articles/${id}/bookmark/add`);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const removePostFromBookmark = async (id) => {
  try {
    const { data } = await api.get(`/articles/${id}/bookmark/remove`);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

// comment api end-point
export const getCommentsByPost = async (id) => {
  try {
    const { data } = await api.get(`/articles/${id}/comments`);
    return { payload: data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const createNewComment = async (postId, body) => {
  try {
    const { data } = await api.post(`/articles/${postId}/comments`, body);
    return { payload: data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const deleteComment = async (postId, commentId) => {
  try {
    const { data } = await api.delete(
      `/articles/${postId}/comments/${commentId}`
    );
    return { payload: data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};
