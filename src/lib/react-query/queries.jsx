import { useMutation } from "@tanstack/react-query";
import {
  createNewPost,
  createUserAccount,
  loginUserAccount,
} from "@/lib/api-functions/api";

export const useLoginUserAccount = () => {
  const mutateloginUserAccount = useMutation({
    mutationFn: (login) => loginUserAccount(login),
  });
  return mutateloginUserAccount;
};

export const useCreateNewUserAccount = () => {
  const mutateNewUserAccount = useMutation({
    mutationFn: (data) => createUserAccount(data),
  });
  return mutateNewUserAccount;
};

export const useCreatePostMutation = () => {
  const mutatecreatePost = useMutation({
    mutationFn: (formData) => createNewPost(formData),
  });
  return mutatecreatePost;
};
