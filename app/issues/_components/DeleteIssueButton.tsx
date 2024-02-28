"use client";

import React, { useState } from "react";
import { Box, Button, AlertDialog } from "@radix-ui/themes";
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
      router.push('/issues');
      router.refresh();
    }
    catch(err) {
        setDeleting(false);
        setError(true)
    }
  }

  return (
    <>
    <AlertDialog.Root >
      <AlertDialog.Trigger>
        <Button disabled={isDeleting} color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This action is irreversible.
        </AlertDialog.Description>
        <Box className="mt-5 flex gap-5">
            <AlertDialog.Cancel>
                <Button variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button color="red"  onClick={handleDelete}> Confirm </Button>
            </AlertDialog.Action>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
    <AlertDialog.Root open={error}>
      <AlertDialog.Content>
        <AlertDialog.Title>Error</AlertDialog.Title>
        <AlertDialog.Description>This issue could not be deleted.</AlertDialog.Description>
        <Button  variant="soft" mt={'5'} onClick={() => setError(false)} >Close </Button>
      </AlertDialog.Content>
    </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
