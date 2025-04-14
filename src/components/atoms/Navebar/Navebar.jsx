import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOutIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "../UserButton/UserButton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAuth } from "@/hooks/context/useAuth";
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const navigator = useNavigate();
  const { auth, logOut } = useAuth();
  const { toast } = useToast();

  async function logOutHandler() {
    await logOut();
    toast({
      title: "signed out Successfully ",
      message: "You have been signed out successfully",
      type: "success",
    });
    navigator("/auth/signin");
  }

  return (
    <nav className="shadow-2xl backdrop-blur-md sticky top-0 z-80">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-pink-600 tracking-wide"
          >
            💍Wedding
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 ">
            <Link to="/about">
              <Button variant="ghost" className="text-pink-700 text-sm">
                💌 About
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" className="text-pink-700 text-sm">
                🎁 Services
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-pink-700 text-sm">
                  📚 More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/contact">📞 Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/blog">📝 Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserButton />
          </div>

          {/* Mobile Menu (Sheet) */}
          <div className="md:hidden ">
            <Sheet className="w-full bg-glass-card">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[240px] sm:w-[300px] glass-card "
              >
                <SheetHeader>
                  <SheetTitle className="text-pink-600 text-2xl font-bold">
                    💍 Wedding Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-3">
                  <Link>
                    {" "}
                    <Card className="glass-card w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 space-y-2">
                      <CardHeader className="text-center space-y-1">
                        <div className="flex justify-center">
                          <UserButton />
                        </div>
                        <CardTitle className="text-pink-600 text-lg sm:text-xl font-bold">
                          {auth?.user?.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500 break-words">
                          {auth?.user?.email}
                        </CardDescription>
                      </CardHeader>

                      <div
                        onClick={logOutHandler}
                        className="flex items-center justify-center gap-2 text-red-500 hover:text-red-700 cursor-pointer transition duration-200 text-sm sm:text-base"
                      >
                        <LogOutIcon className="w-4 h-4" />
                        Sign Out
                      </div>
                    </Card>
                  </Link>

                  <Link to="/about">
                    <Button variant="ghost" className="custom-link-active">
                      💌 About
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="ghost" className="custom-link-active">
                      🎁 Services
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="ghost" className="custom-link-active">
                      📞 Contact
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button variant="ghost" className="custom-link-active">
                      📝 Blog
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
