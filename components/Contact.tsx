import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {"Let's work together"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {"I'm always open to discussing new projects, creative ideas or just grabbing a coffee."} 
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild className="gap-2">
              <a href="mailto:your.email@example.com">
                <Mail className="size-5" />
                Email Me
              </a>
            </Button>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
