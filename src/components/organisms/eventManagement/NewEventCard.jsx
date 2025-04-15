import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LucideLoader2, TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const NewEventCard = ({
  isPending,
  isSuccess,
  error,
  eventCreateForm,
  validationErrors,
  onEventCreateHandleSubmit,
  handleChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-slack">
      <Card className="glass-card md:w-[420px] md:h-auto ">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Event</CardTitle>
          <CardDescription className="text-center">
            Create a new event
          </CardDescription>
          {validationErrors && (
            <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm">
              <TriangleAlert size={16} />
              <p>{validationErrors.message}</p>
            </div>
          )}

          {error && (
            <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm">
              <TriangleAlert size={16} />
              <p>{error}</p>
            </div>
          )}

          {isSuccess && (
            <div className="bg-green-100 p-4 rounded-md flex items-center gap-x-2 text-sm text-green-800">
              <FaCheck size={16} className="text-green-500" />
              <p>Event created successfully! Redirecting to event page...</p>
              <LucideLoader2 className="animate-spin" size={16} />
            </div>
          )}
        </CardHeader>

        <form
          onSubmit={onEventCreateHandleSubmit}
          className="space-y-1 mb-[-1rem]"
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                placeholder="Enter event name"
                value={eventCreateForm.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                placeholder="Enter event email"
                value={eventCreateForm.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                type="text"
                name="phone"
                placeholder="Enter event phone number"
                value={eventCreateForm.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                id="address"
                name="address"
                placeholder="Enter event address"
                value={eventCreateForm.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                id="location"
                name="location"
                placeholder="Enter event location"
                value={eventCreateForm.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Select value={eventCreateForm.category} onChange={handleChange}>
                <SelectTrigger className="w-full" id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Wedding">Wedding</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button type="submit" className="glass-card" disabled={isPending}>
              {isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <LucideLoader2 className="animate-spin" size={16} />
                  Creating...
                </div>
              ) : (
                "Create Event"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
