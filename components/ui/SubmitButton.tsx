"use client";

import React from "react";
import Button from "./Button"; 
interface SubmitButtonProps {
  isLoading: boolean;
  text?: string;
  loadingText?: string;
}

const SubmitButton = ({
  isLoading,
  text = "Submit",
  loadingText = "Submitting...",
}: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading}>
      {isLoading ? loadingText : text}
    </Button>
  );
};

export default SubmitButton;
