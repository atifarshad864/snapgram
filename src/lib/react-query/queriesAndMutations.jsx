import { CreateUserAccount } from "@/lib/api-functions/api";

import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

const { mutate } = useMutation({
  mutationFn: (data) => CreateUserAccount(data),
  onSuccess: (data) => {
    console.log("data", data);
  },
  onError: (error) => {
    console.log("error", error);
  },
});
