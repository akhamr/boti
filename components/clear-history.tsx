"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { ServerActionResult } from "@/lib/types";
import { Button } from "@/components/ui/button";
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
import { IconClear, IconSpinner } from "@/components/ui/icons";

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
                    disabled={!isEnabled || isPending}
                    className="w-full justify-start rounded-sm px-2.5 py-1.5"
                >
                    {isPending ? <IconSpinner /> : <IconClear />}
                    <span className="ml-2">Clear History</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete your chat history and
                        remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isPending}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={isPending}
                        onClick={(e) => {
                            e.preventDefault;
                            startTransition(() => {
                                clearChats().then(() => {
                                    setOpen(false);
                                });
                            });
                        }}
                    >
                        {isPending && (
                            <IconSpinner className="mr-2 animate-spin" />
                        )}
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
