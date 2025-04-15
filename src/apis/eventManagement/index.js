import axiosConfig from "@/config/axiosConfig";


export const newEventProfile = async ({
    name,
    email,
    phone,
    address,
    location,
    category
}) => {
    try {
        const response = await axiosConfig.post("/event/createEvent", {
            name,
            email,
            phone,
            address,
            location,
            category,
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          console.log("Axios Response:", response);
  
        return response.data;
    } catch (error) {
        console.log("new event Profile", error);
        throw error;
    }
};


