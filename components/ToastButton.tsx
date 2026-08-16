"use client";

import {Button, toast} from "@heroui/react";

export function ToastButton() {
  return (
    <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <Button
        size="sm"
        variant="primary"
        onPress={() => {
          toast("Tu t'es fait toaster", {
            actionProps: {
              children: "Masquer",
              onPress: () => toast.clear(),
              variant: "tertiary",
            },
            description: "Bob sent you an invitation to join HeroUI team",
            indicator: null,
            variant: "default",
          });
        }}
      >
        Show toast
      </Button>
    </div>
  );
}