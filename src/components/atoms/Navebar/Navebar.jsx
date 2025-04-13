import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

export const Navbar = () => {
  const { auth } = useAuth();

  return (
    <nav className="shadow-lg backdrop-blur-md sticky top-0 z-80 bg-white/60">
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
              <SheetContent side="right" className="w-[240px] sm:w-[300px] ">
                <SheetHeader>
                  <SheetTitle className="text-pink-600 text-2xl font-bold">
                    💍 Wedding Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-3">
                  <Link>
                    {" "}
                    <Card>
                      <CardHeader>
                        <UserButton />
                        <CardTitle>{auth?.user?.name}</CardTitle>
                        <CardDescription>{auth?.user?.email}</CardDescription>
                      </CardHeader>
                      <Link to="/" className="custom-link">
                        🔓 Log Out
                      </Link>
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
