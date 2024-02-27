"use client";

import React, { useState } from "react";
import ErrorMessage from "@/app/components/ErrorMessage";
import { Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueValidationSchema } from "@/app/validationSchemas";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import "easymde/dist/easymde.min.css";
import { Issue } from "@prisma/client";

type IssueFormData = z.infer<typeof issueValidationSchema>;

interface Props{
    issue?: Issue;
}

const IssueForm = ({issue}: Props) => {
  const router = useRouter();

  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueValidationSchema),
  });


  const onSubmit = async (data: IssueFormData) => {
       try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (err) {
      setError("An unexpected error occured");
    }
  };

  return (
    <div className="max-w-xl space-y-5">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root>
          <TextField.Input defaultValue={issue?.title} {...register("title")} placeholder="Title" />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <button className=" px-5 py-2 text-white text-sm font-medium bg-violet-600 hover:bg-violet-700 rounded transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
