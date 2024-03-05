"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  const router = useRouter();
  const { toast } = useToast()
  const [isDeleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/issues/" + issueId);
      setDeleting(false);
      toast({
        title: "Sucessful Deletion!",
        description: "The issue was deleted succesfully!",
      });
      router.push("/issues/list");
      router.refresh();
    } catch (err) {
      setDeleting(false);
      toast({
        variant: "destructive",
        title: "Failed to Delete!",
        description: "This issue could not be deleted. Try Again!",
      });
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            disabled={isDeleting}
            variant={"destructive"}
            className="flex justify-center items-center gap-1"
          >
            <TrashIcon className="w-6 h-5" />
            Delete Issue
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this issue? This action is
              irreversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter >
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteIssueButton;
