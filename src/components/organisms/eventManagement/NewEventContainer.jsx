import { useNewEventProfile } from "@/hooks/apis/eventManagement/useNewEventProfile";
import { useState } from "react";
import { NewEventCard } from "./newEventCard";

export const NewEventContainer = () => {
  const [eventCreateForm, setEventCreateForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    category: "Retail",
  });

  const [validationErrors, setValidationErrors] = useState(null);
  const { isPending, isSuccess, error, newEventProfileMutation } =
    useNewEventProfile();

  async function onEventCreateHandleSubmit(e) {
    e.preventDefault();
    if (
      !eventCreateForm.name ||
      !eventCreateForm.email ||
      !eventCreateForm.phone ||
      !eventCreateForm.address ||
      !eventCreateForm.location ||
      !eventCreateForm.category
    ) {
      setValidationErrors({ message: "All fields are required" });
      return;
    }

    setValidationErrors(null);

    await newEventProfileMutation({
      name: eventCreateForm.name,
      email: eventCreateForm.email,
      phone: eventCreateForm.phone,
      address: eventCreateForm.address,
      location: eventCreateForm.location,
      category: eventCreateForm.category,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventCreateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <NewEventCard
      isPending={isPending}
      isSuccess={isSuccess}
      error={error}
      eventCreateForm={eventCreateForm}
      validationErrors={validationErrors}
      onEventCreateHandleSubmit={onEventCreateHandleSubmit}
      handleChange={handleChange}
    />
  );
};
