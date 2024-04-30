import ApiServices from "@/api_services/ApiServices";
// import { rickandmortyapi } from "@/api_services/ApiServices";
import axios from "axios";
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

export const getAllPost = (query) => {
  const controller = new AbortController();

  let rickandmortyapi = "https://rickandmortyapi.com/api/character";

  if (query) rickandmortyapi += `?name=${query}`;
  setTimeout(() => {
    controller.abort();
  }, 400);
  return axios.get(rickandmortyapi, { signal: controller.signal });
};

//, { signal: controller.signal }
//orignal code
// export const getAllPost = (query) => {
//   const queryClient = useQueryClient();

//   let rickandmortyapi = "https://rickandmortyapi.com/api/character";
//   if (query) rickandmortyapi += `?name=${query}`;
//   return axios.get(rickandmortyapi);
// };
export const SignOut = () => {
  localStorage.removeItem("accessToken");
};
