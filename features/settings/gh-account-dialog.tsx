"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode, useState } from "react";
import { useDebounce } from "use-debounce";
import { GhAccount } from "./gh-account";

export const GhAccountDialog = ({
  defaultToken,
  onSubmitToken = () => {},
  onRemoveToken = () => {},
  dialogTrigger,
  submitButtonText,
  showRemoveButton = false,
  dialogTitle,
  dialogDescription,
}: {
  defaultToken?: string;
  onSubmitToken?: (token: string) => void;
  onRemoveToken?: () => void;
  dialogTrigger: ReactNode;
  submitButtonText: string;
  showRemoveButton?: boolean;
  dialogTitle: string;
  dialogDescription: string;
}) => {
  const [token, setToken] = useState(defaultToken);
  const [debouncedToken] = useDebounce(token, 500);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>

        <GhAccount token={debouncedToken} />

        <div className="grid gap-4">
          <Label htmlFor="name">Token</Label>
          <Textarea
            id="name"
            placeholder="GitHub Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <DialogFooter>
          {showRemoveButton && (
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                onRemoveToken();
                setIsOpen(false);
              }}
            >
              Remove Token
            </Button>
          )}
          <Button
            type="button"
            onClick={() => {
              onSubmitToken(token ?? "");
              setIsOpen(false);
            }}
          >
            {submitButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
