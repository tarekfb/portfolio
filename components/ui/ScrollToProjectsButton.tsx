'use client';

import { Button } from "@/components/ui/button";
import { useCallback } from "react";

interface ScrollToProjectsButtonProps {
  targetId: string;
  children: React.ReactNode;
}

function ScrollToProjectsButton({
  targetId,
  children,
}: ScrollToProjectsButtonProps) {

  const scrollToProjects = useCallback(() => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetId])

  return (
    <Button size="xl" variant="accent" onClick={scrollToProjects}>
      {children}
    </Button>
  );
};

export default ScrollToProjectsButton;

