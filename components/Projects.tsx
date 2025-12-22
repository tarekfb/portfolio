"use client";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechStackIcon from "./TechIconContainer";
import Image from "next/image";
import MonthlyVisitors from "./MonthlyVisitors";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export type Tech = "cloudflare" | "nextjs" | "sveltejs" | "css" | "html" | "javascript" | "react" | "supabase" | "typescript" | "nodejs" | "postgresql" | "tailwindcss"

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: Tech[];
} &
  ({
    githubUrl: string;
    liveUrl?: string;
  }
    |
  {
    githubUrl?: string;
    liveUrl: string;
  })

const projects: Project[] = [
  {
    title: "Digitutor",
    description: "Fully featured platform for pairing teacher and students for programming tutoring. Includes automated tests (e2e, unit), error reporting (sentry), payment system (stripe), ci/cd with test & prod environments, and more.",
    image: "/digitutor.png",
    techStack: ["sveltejs", "typescript", "postgresql", "tailwindcss", "supabase", "cloudflare"],
    githubUrl: "https://github.com/tarekfb/digitutor",
    liveUrl: "https://mindic.pages.dev/",
  },
  {
    title: "Weekly positive news",
    description: "Automated fetching of weekly positive news at reddit.com/r/sweden.",
    image: "/veckans.png",
    techStack: ["sveltejs", "typescript", "tailwindcss"],
    githubUrl: "https://github.com/tarekfb/veckans",
    liveUrl: "https://veckans.site",
  },
  {
    title: "Yakiita hantverk",
    description: "Portfolio for carpenter business.",
    image: "/yakiita-hantverk.png",
    techStack: ["sveltejs", "typescript", "tailwindcss"],
    githubUrl: "https://github.com/tarekfb/yakiita-hantverk",
    liveUrl: "https://yakiita-hantverk.vercel.app/",
  },
  {
    title: "Pre-launch sign-up",
    description: "A marketing page to recruit teachers before launch of Digitutor. Resulted in 50-60 sign-ups.",
    image: "/preregister.png",
    techStack: ["sveltejs", "typescript", "tailwindcss"],
    githubUrl: "https://github.com/tarekfb/preregister",
    liveUrl: "https://preregister-6uk.pages.dev/",
  },
  {
    title: "You're looking at it",
    description: "Just here to provide source code & tech stack •‿•",
    image: "/portfolio-dark.png",
    techStack: ["react", "nextjs", "typescript", "tailwindcss"],
    githubUrl: "https://github.com/tarekfb/portfolio",
  },
];

function Projects() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", stiffness: 100,
      }
    }
  }

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");

    }
  }, [controls, inView]);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          A small selection of{" "}
          <span className="text-accent">recent projects</span>
        </h2>

        <motion.div variants={containerVariants} ref={ref} initial="hidden" animate={controls} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col"
            >
              <Card
                className="h-full flex flex-col overflow-hidden bg-card border-accent/50 hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-48 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 pb-4 grow flex flex-col justify-between ">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">
                      {project.title}
                    </h3>
                    {project.title === "Weekly positive news" && (
                      <MonthlyVisitors amount={2000} />
                    )}
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-2">
                    <div className="flex items-center">
                      {project.techStack.map((tech, i) => (
                        i <= 5 && (
                          <TechStackIcon key={tech} tech={tech} />
                        )
                      ))}
                    </div>

                    <div className="flex justify-end gap-1.5">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                            rel="noopener noreferrer"
                            aria-label="navigate to github repo"
                          >
                            <Github className="size-6" />
                          </motion.a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="navigate to site"

                          >
                            <ExternalLink className="size-6" />
                          </motion.a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
