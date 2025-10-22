'use client';

import { Button } from "@/components/ui/button";

interface ScrollToProjectsButtonProps {
  targetId: string;
  children: React.ReactNode;
}

function ScrollToProjectsButton({
  targetId,
  children,
}: ScrollToProjectsButtonProps) {
  const scrollToProjects = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button size="xl" variant="accent" onClick={scrollToProjects}>
      {children}
    </Button>
  );
};

export default ScrollToProjectsButton;

