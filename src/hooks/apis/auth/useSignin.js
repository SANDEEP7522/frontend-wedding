import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/apis/auth";
export const useSignin = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      console.log("Scuccessfully signed in", response);
  
      localStorage.setItem("token", response.token); 
      localStorage.setItem("user", JSON.stringify(response.user));
    

      toast({
        title: "Successfully signed in",
        message: "You will be redirected to the home page in a few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.error("Failed to sign in", error);
      toast({
        title: "Failed to sign in",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
