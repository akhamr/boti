"use client";

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
import { IconClear, IconSpinner } from "@/components/ui/icons";
import { Redirect } from "@/lib/actions";
import { ServerActionResult } from "@/lib/types";
import * as React from "react";

interface ClearHistoryProps {
  isEnabled: boolean;
  clearChats: () => ServerActionResult<void>;
}

export function ClearHistory({
  isEnabled = false,
  clearChats,
}: ClearHistoryProps) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start"
          disabled={!isEnabled || isPending}
        >
          {isPending ? <IconSpinner /> : <IconClear />}
          <span className="ml-2">Clear History</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your chat history and remove your data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={(e) => {
              e.preventDefault();
              startTransition(() => {
                clearChats().then(() => {
                  setOpen(false);
                  Redirect();
                });
              });
            }}
          >
            {isPending && <IconSpinner className="mr-2 animate-spin" />}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
