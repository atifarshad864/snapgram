import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const checkIsLiked = (likeList, _id) => {
  return likeList.includes(_id);
};
