import Image from "next/image";
import cutout from '../public/cutout-low.png'
import ScrollToProjectsButton from "./ui/ScrollToProjectsButton";
import RandomizedBlob from "./RandomizedBlob";
import InvertedDivider from "./InvertedDivider";
import RandomizedDivider from "./RandomizedDivider";
import ButtonBlob from "./ButtonBlob";

// need to add randominsed blob to action text or something like that (see projects)
function Hero() {
    return (
        <>
            <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center pt-2 bg-gradient-to-b from-accent to-accent-lightest">
          
                <div className="container px-6 z-10 mb-70 md:mb-0">
                    <div className="max-w-4xl">
                        <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
                            <span className="block text-foreground">Tarek</span>
                            <span className="text-accent bg-foreground px-4 py-2 rounded-lg inline-block">Bermalm</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl">
                            {"I'm a frontend-focused full stack developer. Reach out if you have any questions or just want to chat!"}
                        </p>

                            <ButtonBlob targetId="#projects" >view ./projects</ButtonBlob>

                    </div>
                </div>
          
            </section>
            <InvertedDivider />
        </>
    );
};

export default Hero;
