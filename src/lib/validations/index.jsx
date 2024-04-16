import * as yup from "yup";

export const SignupValidation = yup.object({
  name: yup.string().required("Name is required*"),
  username: yup.string().required("Username is required*"),
  email: yup.string().required("Email is required*"),
  password: yup
    .string()
    .required("password is required*")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[^\w\s]).{1,}$/,
      "Add must 1 capital letter & 1 special character"
    ),
});

export const SigninValidation = yup.object({
  email: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});
