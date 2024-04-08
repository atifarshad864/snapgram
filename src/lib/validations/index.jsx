// import { z } from "zod";
// export const SignupValidation = z.object({
//   name: z.string().min(2, {
//     message: "Too short",
//   }),
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.", // zod is for validation
//   }),
//   email: z.string().email(),
//   Password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters." }),
// });

import * as yup from "yup";

export const SignupValidation = yup.object({
  name: yup.string().required("Name is Required*"),
  username: yup.string().required("Username is required*"),
  email: yup.string().required("email is required*"),
  Password: yup.string().required("password is required*"),
});
