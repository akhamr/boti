"use client";

import { Button } from "@/components/ui/button";
import { IconGitHub, IconSpinner } from "@/components/ui/icons";
import { SignIn } from "@/lib/actions";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="flex h-dvh items-center justify-center">
      <Button
        variant="ghost"
        className="border bg-background"
        onClick={() => {
          setIsLoading(true);
          SignIn();
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <IconSpinner className="mr-2 animate-spin" />
        ) : (
          <IconGitHub className="mr-2" />
        )}
        Login with GitHub
      </Button>
    </section>
  );
}
