import * as yup from "yup";

export const SignupValidation = yup.object({
  name: yup.string().required("Name is required*"),
  username: yup.string().required("Username is required*"),
  email: yup.string().required("Email is required*"),
  password: yup
    .string()
    .required("Password is required*")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[^\w\s]).{1,}$/,
      "Add must 1 capital letter & 1 special character"
    ),
});

export const editProfileValidations = yup.object({
  name: yup.string().required("Name is required*"),
  username: yup.string().required("Username is required*"),
  email: yup.string().required("Email is required*"),
  profilePic: yup.mixed().required("image is required"),
});

export const SigninValidation = yup.object({
  email: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

export const CreatePostValidations = yup.object({
  caption: yup.string().required("Caption is required"),
  location: yup.string().required("Location is required"),
  tags: yup.array().of(yup.string()).required("Tags are required"),
  file: yup.mixed().required("image is required"),
});

export const updatePostValidations = yup.object({
  caption: yup.string().required("Caption is required"),
  location: yup.string().required("Location is required"),
  tags: yup.array().of(yup.string()).required("Tags are required"),
  file: yup.mixed().required("image is required"),
});
