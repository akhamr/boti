import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { ExternalLink } from "@/components/external-link";
import { UseChatHelpers } from "ai/react";

const exampleMessages = [
  {
    heading: "Explain technical concepts",
    message: `Explain Organic Chemistry to 2nd grader`,
  },
  {
    heading: "Summarize a books",
    message: "Summarize Romeo and Juliet in Shakespeare's style",
  },
  {
    heading: "Make a code",
    message: `Make a code of Fibonacci sequence in Python`,
  },
];

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, "setInput">) {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:px-0">
      <div className="bg-background rounded-lg border-2 border-dashed p-8">
        <h1 className="mb-2 text-xl font-semibold">
          Welcome to <span className="font-doodle">Bot-I.</span>
        </h1>
        <p className="text-muted-foreground mb-2">
          This is an AI-based chatbot built with{" "}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>
          {", and "}
          <ExternalLink href="https://ai.google.dev/gemini-api">
            Gemini API
          </ExternalLink>
          .
        </p>
        <p className="text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="text-muted-foreground mr-2" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
