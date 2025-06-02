import React, { useState } from "react";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { useForm } from "@tanstack/react-form";
import { useEventByIdQuery, useUpdateEventMutation } from "../hooks/useEvents";

const EVENT_ID = "3422bec6-6872-43fa-88a3-797e5b9108a2";

type EventForm = {
  title: string;
  event_date: string | null;
  event_time: string | null;
  location: string;
  image_url: string;
  description: string;
  additional_info: string;
};

const initialEvent: EventForm = {
  title: "",
  event_date: null,
  event_time: null,
  location: "",
  image_url: "",
  description: "",
  additional_info: "",
};

const Admin: React.FC = () => {
  const { data, isLoading, error } = useEventByIdQuery(EVENT_ID);
  const updateEvent = useUpdateEventMutation();
  const [success, setSuccess] = useState("");

  const form = useForm({
    defaultValues: data || initialEvent,
    onSubmit: async ({ value }) => {
      setSuccess("");
      try {
        const cleanFields = { ...value };
        // Handle empty strings for date and time
        if ("event_date" in cleanFields && cleanFields.event_date === "") {
          cleanFields.event_date = null;
        }
        if ("event_time" in cleanFields && cleanFields.event_time === "") {
          cleanFields.event_time = null;
        }

        await updateEvent.mutateAsync({ id: EVENT_ID, ...cleanFields });
        setSuccess("Event updated successfully!");
      } catch (err: unknown) {
        setSuccess("");
        let message = "Unknown error";
        if (err && typeof err === "object" && "message" in err) {
          message = (err as { message?: string }).message || message;
        }
        alert("Error updating event: " + message);
      }
    },
  });

  if (isLoading)
    return <div className="text-center py-12">Loading event...</div>;
  if (error)
    return (
      <div className="text-center py-12 text-red-500">Error loading event.</div>
    );

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-serif font-medium mb-8 text-center">
        Edit Event Details
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6 bg-white p-8 rounded-lg shadow"
      >
        <form.Field
          name="title"
          children={(field) => (
            <Input
              label="Title"
              type="text"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              required
            />
          )}
        />
        <form.Field
          name="event_date"
          children={(field) => (
            <Input
              label="Event Date"
              type="date"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        />

        <form.Field
          name="event_time"
          children={(field) => (
            <Input
              label="Event Time"
              type="time"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        />
        <form.Field
          name="location"
          children={(field) => (
            <Input
              label="Location"
              type="text"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              required
            />
          )}
        />
        <form.Field
          name="image_url"
          children={(field) => (
            <Input
              label="Image URL"
              type="text"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        />
        <form.Field
          name="description"
          children={(field) => (
            <Textarea
              label="Description"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              rows={4}
              required
            />
          )}
        />
        <form.Field
          name="additional_info"
          children={(field) => (
            <Textarea
              label="Additional Information"
              value={field.state.value || ""}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              rows={3}
            />
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={!canSubmit || isSubmitting || updateEvent.isPending}
              isLoading={isSubmitting || updateEvent.isPending}
            >
              Save Event
            </Button>
          )}
        />
        {success && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}
        {updateEvent.error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Error: {updateEvent.error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Admin;
