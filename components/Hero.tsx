import { Button } from "@/components/ui/button";
import Image from "next/image";
import cutout from '@/lib/assets/cutout.png'

function Hero() {
    // const scrollToProjects = () => {
    //     const element = document.getElementById("projects");
    //     if (element) {
    //         element.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-foreground to-accent">
            <div className="absolute top-15 md:right-60 opacity-70">
                <Image src={cutout} alt="profile photo" width={300} className="rounded-[40%]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Large name heading */}
                    <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
                        <span className="text-primary-foreground">Tarek</span>
                        <br />
                        <span className="text-accent">Bermalm</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
                        I'm a frontend-focused full stack developer. Reach out if you have any questions or just want to chat!
                    </p>

                    <Button
                        // onClick={scrollToProjects}
                        size="lg"
                        variant="accent"
                    >
                        My projects
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
                clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
            }} />
        </section>
    );
};

export default Hero;
