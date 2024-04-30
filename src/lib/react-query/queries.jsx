import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createNewPost,
  createUserAccount,
  deletePost,
  getAllPost,
  // getPopularPosts,
  getRecentPosts,
  likePost,
  loginUserAccount,
  savePost,
  updatePostDetails,
  userInfo,
} from "@/lib/api-functions/api";
import { useRef } from "react";

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

export const useGetRecentPosts = () => {
  const mutateGetRecentPosts = useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: (posts) => getRecentPosts(posts),
  });
  return mutateGetRecentPosts;
};

export const useDeletePost = (_id) => {
  const mutateDeletePost = useMutation({
    mutationFn: (_id) => deletePost(_id),
  });
  return mutateDeletePost;
};

export const useLikePost = (_id) => {
  console.log(_id);

  const mutateLikePost = useMutation({
    mutationFn: (_id) => likePost(_id),
  });
  return mutateLikePost;
};

export const useSavePost = (_id) => {
  const mutateSavePost = useMutation({
    mutationFn: (_id) => savePost(_id),
  });
  return mutateSavePost;
};

export const useGetuserInfo = () => {
  const mutateGetUserInfo = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: (posts) => userInfo(posts),
  });
  return mutateGetUserInfo;
};

export const useUpdatePostDetails = () => {
  const mutateUpdatePostDetails = useMutation({
    mutationFn: (_id, formData) => updatePostDetails(_id, formData),
  });

  return mutateUpdatePostDetails;
};

export const useGetPopularPosts = (query) => {
  const mutateGetPopularPosts = useQuery({
    queryKey: ["getallPosts", query],
    queryFn: ({ signal }) => getAllPost(query, { signal }),
  });

  return mutateGetPopularPosts;
};
//staleTime = 0
// staleTime,
// keepPreviousData: true,
