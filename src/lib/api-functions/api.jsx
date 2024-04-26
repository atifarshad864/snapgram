import ApiServices from "@/api_services/ApiServices";

export const createUserAccount = (data) => {
  return ApiServices.post("person/register", data);
};

export const loginUserAccount = (login) => {
  return ApiServices.post("person/login", login);
};

export const createNewPost = (formData) => {
  return ApiServices.post("post/add", formData);
};

export const getRecentPosts = (posts) => {
  return ApiServices.get("/post/record", posts);
};

export const deletePost = (_id) => {
  return ApiServices.delete(`/post/delete/${_id}`);
};

export const likePost = (_id) => {
  console.log(_id);

  return ApiServices.post(`/post/like/${_id}`);
};

export const savePost = (_id) => {
  return ApiServices.post(`person/save-post/${_id}`);
};

export const userInfo = () => {
  return ApiServices.get("person/record");
};

export const updatePostDetails = (_id, formData) => {
  console.log(_id);

  return ApiServices.put(`post/update/${_id}`, formData);
};

export const SignOut = () => {
  localStorage.removeItem("accessToken");
};
