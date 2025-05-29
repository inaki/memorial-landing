import React from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { ImageUpload } from "../ui/ImageUpload";
import { motion } from "framer-motion";
import { useAddTributeMutation } from "../../hooks/useTributes";

export const TributeForm: React.FC = () => {
  const tributeMutation = useAddTributeMutation();
  const [imageUploadKey, setImageUploadKey] = React.useState(0);

  const form = useForm({
    defaultValues: {
      author: "",
      message: "",
      imageFile: null as File | null,
    },
    onSubmit: async ({ value, formApi }) => {
      tributeMutation.mutate(
        {
          author: value.author,
          message: value.message,
          imageFile: value.imageFile ?? undefined,
        },
        {
          onSuccess: () => {
            formApi.reset();
            formApi.setFieldValue("imageFile", null);
            setImageUploadKey((k) => k + 1);
          },
        }
      );
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-serif font-medium mb-6">Share a Memory</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        <form.Field
          name="author"
          validators={{
            onChange: ({ value }) =>
              !value ? "Please enter your name" : undefined,
          }}
        >
          {(field) => (
            <Input
              label="Your Name"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter your name"
              error={field.state.meta.errors[0]}
              onBlur={field.handleBlur}
            />
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) =>
              !value ? "Please enter a message" : undefined,
          }}
        >
          {(field) => (
            <Textarea
              label="Your Message"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Share your memory or message..."
              error={field.state.meta.errors[0]}
              onBlur={field.handleBlur}
            />
          )}
        </form.Field>

        <form.Field name="imageFile">
          {(field) => (
            <ImageUpload
              key={imageUploadKey}
              label="Add a Photo (Optional)"
              onImageSelected={(file) => field.handleChange(file)}
            />
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full"
                isLoading={isSubmitting || tributeMutation.isPending}
                disabled={!canSubmit}
              >
                Share Tribute
              </Button>
            </div>
          )}
        </form.Subscribe>
      </form>
    </motion.div>
  );
};
