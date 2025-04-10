import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SigninCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", signinForm);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl bg-slack">
      <CardHeader>
        <CardTitle className="text-2xl text-center"> Sign In</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signinForm.email}
            onChange={handleChange}
            required
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={signinForm.password}
            onChange={handleChange}
            required
          />
        </div>
        <CardFooter className="flex justify-center">
          <Button type="submit" className="w-full mt-2" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </CardFooter>
      </form>
      <p className="text-center mb-2">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/auth/signup")}
          className="text-blue-500 cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </Card>
  );
};
