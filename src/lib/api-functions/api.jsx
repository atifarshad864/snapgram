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

//  let rickandmortyapi = `https://rickandmortyapi.com/api/character?page=${page}`;

// export const getAllPost = (query, page) => {
//   // const controller = new AbortController();

//   let rickandmortyapi = `https://rickandmortyapi.com/api/character?$page{page}`;
//   if (query) rickandmortyapi += `&name=${query}`; // Use "&" instead of "?" for additional query parameters
//   // setTimeout(() => {
//   //   controller.abort();
//   // }, 400);
//   // , { signal: controller.signal }
//   return axios.get(rickandmortyapi);
// };

//, { signal: controller.signal }
//orignal code
export const getAllPost = (query, page) => {
  // const queryClient = useQueryClient();
  console.log("query", query);

  let rickandmortyapi = `https://rickandmortyapi.com/api/character?page=${page}`;
  if (query) rickandmortyapi += `&name=${query}`;
  console.log("api =>", rickandmortyapi);
  return axios.get(rickandmortyapi);
};
export const SignOut = () => {
  localStorage.removeItem("accessToken");
};

export const getRandomUsers = () => {
  return axios.get("https://dummyjson.com/users");
};
