import ApiServices from "@/api_services/ApiServices";

export const CreateUserAccount = (data) => {
  return ApiServices.post("person/register", data);
};

export const LoginUserAccount = (login) => {
  return ApiServices.post("person/login", login);
};

export const SignOut = () => {
  localStorage.removeItem("accessToken");
};
