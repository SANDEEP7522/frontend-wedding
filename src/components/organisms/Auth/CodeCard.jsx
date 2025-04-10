import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CodeCard = () => {
  const [verificationForm, setVerificationForm] = useState({
    email: "",
    phone: "",
    verificationCode: Array(5).fill(""),
  });

  const [isLoading, setIsLoading] = useState(false);

  const usenavigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerificationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // only allow 0-9 and single digit

    const updatedCode = [...verificationForm.verificationCode];
    updatedCode[index] = value;

    setVerificationForm((prev) => ({
      ...prev,
      verificationCode: updatedCode,
    }));

    // Move to next input if current is filled
    if (value && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const finalCode = verificationForm.verificationCode.join("");

    setTimeout(() => {
      console.log("Form Submitted:", {
        ...verificationForm,
        verificationCode: finalCode,
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl bg-slack">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Verification Code</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Email</label>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={verificationForm.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Verification Code</label>
            <div className="flex gap-2 justify-center">
              {verificationForm.verificationCode.map((digit, idx) => (
                <Input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength={1}
                  className="w-10 text-center text-lg"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  required
                />
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        Didn't receive code?{" "}
        <span 
        onClick={() => usenavigate("/auth/signup")}
        className="text-blue-500 cursor-pointer">Sign Up Again</span>
      </p>
    </Card>
  );
};
