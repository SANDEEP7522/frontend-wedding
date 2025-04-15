import { newEventProfile } from "@/apis/eventManagement";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useNewEventProfile = () => {
 const { toast } = useToast();

 const {
    isPending,
    isSuccess,
    error,
    mutateAsync: newEventProfileMutation,
  } = useMutation({
    mutationFn: newEventProfile,
    onSuccess: (data) => {
      console.log("Successfully created event", data);
      toast({
        title: "Successfully created event",
        message: "Plese Wait take some time to redirect event page",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("Failed creating event", error);
      toast({
        title: "Failed creating event",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    }
  });
  return {
    isPending,
    isSuccess,
    error,
    newEventProfileMutation,
  };


};