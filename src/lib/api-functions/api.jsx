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
export const SignOut = () => {
  localStorage.removeItem("accessToken");
};
