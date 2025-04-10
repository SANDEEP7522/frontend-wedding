import { registerUser } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Successfully signed up", data);
    },
    onError: (error) => {
      console.log("Failed signing up", error);
    },
  });

  return { isPending, isSuccess, error, signupMutation };
};

