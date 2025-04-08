import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SignupCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    verificationMethod: "email",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", signupForm);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl bg-slack">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit} className="space-y-1 mb-[-1rem]">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={signupForm.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={signupForm.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={signupForm.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={signupForm.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Verification Method</Label>
            <RadioGroup
              defaultValue={signupForm.verificationMethod}
              onValueChange={(value) =>
                setSignupForm((prev) => ({
                  ...prev,
                  verificationMethod: value,
                }))
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-method" />
                <Label htmlFor="email-method">Email</Label>
                <RadioGroupItem value="phone" id="phone-method" />
                <Label htmlFor="phone-method">Phone</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>
        </CardFooter>
      </form>
      <Separator className="my-1" />
      <p className="text-center mb-2">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-primary hover:underline hover:text-blue-600"
        >
          Login
        </a>
      </p>
    </Card>
  );
};
