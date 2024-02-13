"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { ServerActionResult, type Chat } from "@/lib/types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IconSpinner, IconTrash } from "@/components/ui/icons";

interface SidebarActionsProps {
    chat: Chat;
    removeChat: (args: {
        id: string;
        path: string;
    }) => ServerActionResult<void>;
}

export function SidebarActions({ chat, removeChat }: SidebarActionsProps) {
    const router = useRouter();
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [isRemovePending, startRemoveTransition] = React.useTransition();

    return (
        <>
            <Button
                variant="ghost"
                className="size-8 rounded-full p-2 hover:bg-background/20"
                disabled={isRemovePending}
                onClick={() => setDeleteDialogOpen(true)}
            >
                <IconTrash />
                <span className="sr-only">Delete</span>
            </Button>
            <AlertDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete your chat message and
                            remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isRemovePending}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            disabled={isRemovePending}
                            onClick={(e) => {
                                e.preventDefault;
                                startRemoveTransition(async () => {
                                    await removeChat({
                                        id: chat.id,
                                        path: chat.path,
                                    }).then(() => {
                                        setDeleteDialogOpen(false);
                                        router.push("/chat");
                                        router.refresh();
                                    });
                                });
                            }}
                        >
                            {isRemovePending && (
                                <IconSpinner className="mr-2 animate-spin" />
                            )}
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
