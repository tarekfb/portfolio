import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechStackIcon from "./TechStackIcon";
import Image from "next/image";

export type Tech = "nextjs" | "sveltejs" | "css" | "html" | "javascript" | "react" | "supabase" | "typescript" | "nodejs" | "postgresql" | "tailwindcss"

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: Tech[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Digitutor",
    description: "Platform for pairing teacher and students for programming tutoring.",
    image: "/digitutor.png",
    techStack: ["sveltejs", "typescript", "postgresql", "tailwindcss", "supabase"],
    githubUrl: "https://github.com/tarekfb/mindic",
    liveUrl: "https://digitutor.se",
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
  },  {
    title: "Pre-launch sign-up",
    description: "A marketing page to find users before launch.",
    image: "/preregister.png",
    techStack: ["sveltejs", "typescript", "tailwindcss"],
    githubUrl: "https://github.com/tarekfb/preregister",
    liveUrl: "https://preregister-6uk.pages.dev/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          A small selection of{" "}
          <span className="text-accent">recent projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
          
              <Card
                key={index}
                className="flex flex-col overflow-hidden bg-card border-accent/50 hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-48 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={750}
                    className="w-full h-full"
                  />
                </div>

                <div className="p-6 pb-4 grow flex flex-col justify-between ">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">
                      {project.title}
                    </h3>
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
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="size-6" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-6" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
