import { useMutation } from "@tanstack/react-query";

import { signupUpRequest } from "@/apis/auth";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutate: signupMutation,
  } = useMutation({
    mutationFn: signupUpRequest,
    onSuccess: (data) => {
      console.log("Successfully signed up", data);
    },
    onError: (error) => {
      console.log("Failed signing up", error);
    },
  });

  return { isPending, isSuccess, error, signupMutation };
};

