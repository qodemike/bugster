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
} from "@/components/ui/alert-dialog"
import {Button} from "@/components/ui/button"
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props{
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete('/api/issues/'+issueId);
      router.push('/issues/list');
      router.refresh();
    }
    catch(err) {
        setDeleting(false);
        setError(true)
    }
  }

  return (
    <>
    <AlertDialog >
      <AlertDialogTrigger>
        <Button disabled={isDeleting} color="red" style={{cursor: "pointer"}}>Delete Issue</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete this issue? This action is irreversible.
        </AlertDialogDescription>
        <div className="mt-5 flex gap-5">
            <AlertDialogCancel>
                <Button style={{cursor: "pointer"}}>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction>
                <Button style={{cursor: "pointer"}} color="red"  onClick={handleDelete}> Confirm </Button>
            </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
    <AlertDialog open={error}>
      <AlertDialogContent>
        <AlertDialogTitle>Error</AlertDialogTitle>
        <AlertDialogDescription>This issue could not be deleted.</AlertDialogDescription>
        <Button onClick={() => setError(false)}> Close </Button>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};

export default DeleteIssueButton;
