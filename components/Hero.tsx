import Image from "next/image";
import cutout from '../public/cutout-low.png'
import ScrollToProjectsButton from "./ui/ScrollToProjectsButton";

function Hero() {
    return (
        <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center pt-10 md:pt-0 bg-gradient-to-b from-foreground to-accent">

            <svg viewBox="0 0 200 200" className="absolute bottom-5 md:bottom-10 -right-15 md:right-0" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-accent/50" d="M45.6,-25.2C54.9,-10.1,55.4,11.1,46.4,30.5C37.3,49.8,18.7,67.3,-3.2,69.2C-25,71,-50,57.2,-55.9,39.6C-61.8,22.1,-48.6,0.8,-36.1,-16.1C-23.6,-33,-11.8,-45.6,3.2,-47.4C18.1,-49.3,36.2,-40.3,45.6,-25.2Z" transform="translate(100 100)" />
            </svg>
            <div className="absolute bottom-20 md:bottom-25 right-0 md:right-0">
                <Image src={cutout} alt="profile photo" width={401} height={422} className="w-[300px] md:w-[350px] lg:w-[450px]" />
            </div>
            <div className="container mx-auto px-6 relative z-10 mb-70 md:mb-0">
                <div className="max-w-4xl">
                    <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
                        <span className="text-primary-foreground block">Tarek</span>
                        <span className="text-accent block">Bermalm</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
                        {"I'm a frontend-focused full stack developer. Reach out if you have any questions or just want to chat!"}
                    </p>

                    <ScrollToProjectsButton targetId="projects">
                        My projects
                    </ScrollToProjectsButton>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
                clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
            }} />
        </section>
    );
};

export default Hero;
