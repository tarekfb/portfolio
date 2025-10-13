import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Weekly positive news",
    description: "Automated fetching of weekly positive news at reddit.com/r/sweden",
    image: "/placeholder.svg",
    techStack: ["Next.js", "Express", "TypeScript", "Tailwind", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Digitutor",
    description: "Platform for pairing teacher and students for programming tutoring",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Yakiita hantverk",
    description: "Portfolio for carpenter business",
    image: "/placeholder.svg",
    techStack: ["Vue.js", "Firebase", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          A small selection of{" "}
          <span className="text-accent">recent projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow"
            >
              {/* Project Screenshot */}
              <div className="relative w-full h-48 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 pb-4">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>


                <div className="flex justify-between gap-x-2">
                  {/* Tech Stack Icons - Overlapping */}
                  <div className="flex items-center">
                    {project.techStack.map((tech, i) => ( i <= 5 &&
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground border-2 border-card"
                        style={{
                          marginLeft: i > 0 ? "-8px" : "0",
                          zIndex: project.techStack.length - i,
                        }}
                        title={tech}
                      >
                        {tech.charAt(0)}
                      </div>
                    ))}
                  </div>
                  {/* Action Buttons */}
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-accent"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-accent"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
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
