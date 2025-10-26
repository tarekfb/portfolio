import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import RandomizedDivider from "./RandomizedDivider";

function Contact() {
  return (
    <>
    <RandomizedDivider />
      <section id="contact" className="pb-20 md:-mt-4 bg-accent-lightest">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {"Let's work together"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 dark:text-foreground/75">
              {"I'm always open to discussing new projects, creative ideas or just grabbing a coffee."}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/tarekfb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="size-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/tarek-bermalm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Linkedin className="size-5" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="accent" asChild className="gap-2">
                <a href="mailto:tarek@digitutor.se">
                  <Mail className="size-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
