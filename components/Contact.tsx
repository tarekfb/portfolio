import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path className="fill-accent/25" fill-opacity="1" d="M0,256L80,245.3C160,235,320,213,480,170.7C640,128,800,64,960,53.3C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <section id="contact" className="pb-20 pt-5 bg-accent/25">

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
                <a href="mailto:tarek@digitutor.se">
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
    </>
  );
};

export default Contact;
