import axios from "@/config/axiosConfig";

export const registerUser = async ({
  name,
  email,
  phone,
  password,
  verificationMethod,
}) => {
  try {
    const response = await axios.post("/users/register", {
      name,
      email,
      phone,
      password,
      verificationMethod,
    });

    return response.data;
  } catch (error) {
    console.log("registerUser", error);
    throw error;
  }
};

export const verifyUserwithCode = async ({ email, otp }) => {
  try {
    const response = await axios.post("/users/verify-otp", {
      email,
      otp,

    });

    return response.data;
  } catch (error) {
    console.log("verify OTP User", error);
    throw error.response.data;
}
}

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post("/users/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log("loginUser", error);
    throw error.response.data;
  }
};
