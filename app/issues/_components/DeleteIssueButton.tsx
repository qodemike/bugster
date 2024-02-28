"use client";

import React from "react";
import { Box, Button, AlertDialog } from "@radix-ui/themes";

const DeleteIssueButton = () => {
  return (
    <AlertDialog.Root >
      <AlertDialog.Trigger>
        <Button color="red" className="py-3">Delete Issue</Button>
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
                <Button color="red"> Confirm </Button>
            </AlertDialog.Action>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
