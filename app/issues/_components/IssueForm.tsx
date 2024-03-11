"use client";

import React from "react";
import ErrorMessage from "@/app/components/ErrorMessage";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueValidationSchema } from "@/app/validationSchemas";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import "easymde/dist/easymde.min.css";
import { Issue } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField } from "@/components/ui/form";

type IssueFormData = z.infer<typeof issueValidationSchema>;

interface Props {
  issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
  const router = useRouter();
  const { toast } = useToast();

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
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      toast({
        title: "Submitted successfully!",
        description: "Operation was a success!",
      });
      router.push("/issues/list");
      router.refresh();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "There was a problem submtting the form. Try Again!",
      });
    }
  };

  return (
    <div>
      <form className=" space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue={issue?.title}
          {...register("title")}
          placeholder="Issue Title"
          className=" bg-card "
        />
        <div
          className={`${
            errors.title?.message ? "h-5" : "h-0"
          }  transition-all   overflow-hidden `}
        >
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            defaultValue={issue?.description}
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE  placeholder="Write a detailed description of the issue" {...field} />
            )}
          />
          <div
            className={`relative -top-7 ${
              errors.description?.message ? "h-5" : "h-0"
            }  transition-all   overflow-hidden `}
          >
            <ErrorMessage>{"Issue description is required"}</ErrorMessage>
          </div>
        </div>
        <Button>{issue ? "Update Issue" : "Submit Issue"}</Button>
      </form>
    </div>
  );
};

export default IssueForm;
