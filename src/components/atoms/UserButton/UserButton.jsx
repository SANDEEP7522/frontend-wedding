import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/context/useAuth";

export const UserButton = () => {
  const { auth } = useAuth();

  return (
    <Avatar>
      <AvatarImage  />
      <AvatarFallback>{auth?.user?.name[0].toUpperCase() }</AvatarFallback>
    </Avatar>
  );
};
