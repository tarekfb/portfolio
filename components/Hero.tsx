import Image from "next/image";
import cutout from '../public/cutout-low.png'
import ScrollToProjectsButton from "./ui/ScrollToProjectsButton";
import RandomizedBlob from "./RandomizedBlob";
import InvertedDivider from "./InvertedDivider";
import RandomizedDivider from "./RandomizedDivider";

// need to add randominsed blob to action text or something like that (see projects)
function Hero() {
    return (
        <>
            <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center pt-2 bg-gradient-to-b from-accent to-accent-light">
                {/* <RandomizedBlob />
            <div className="absolute bottom-20 md:bottom-25 right-0 md:right-0">
                <Image src={cutout} alt="profile photo" width={401} height={422} loading="lazy" fetchPriority="low" className="w-[300px] md:w-[350px] lg:w-[450px]" />
            </div> */}
                <div className="container mx-auto px-6 relative z-10 mb-70 md:mb-0">
                    <div className="max-w-4xl">
                        <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
                            <span className="block text-foreground">Tarek</span>
                            <span className="text-accent bg-foreground px-4 py-2 rounded-lg inline-block">Bermalm</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl">
                            {"I'm a frontend-focused full stack developer. Reach out if you have any questions or just want to chat!"}
                        </p>

                        <ScrollToProjectsButton targetId="projects">
                            My projects
                        </ScrollToProjectsButton>
                    </div>
                </div>
                {/* 
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
                clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
            }} /> */}
            </section>
            <InvertedDivider />
        </>
    );
};

export default Hero;
