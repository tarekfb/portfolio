import InvertedDivider from "./InvertedDivider";
import ViewTerminal from "./ViewTerminal";

function Hero() {
    return (
        <>
            <section className="min-h-[75vh] md:min-h-auto flex flex-col items-center pt-2 bg-gradient-to-b from-accent to-accent-lightest">
                <div className="container px-6 z-10 mb-12">
                    <div className="max-w-4xl">
                        <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
                            <span className="block">Tarek</span>
                            <span className="text-accent bg-foreground px-4 py-2 rounded-lg inline-block">Bermalm</span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                            {"I'm a frontend-focused full stack developer. Reach out if you have any questions or just want to chat!"}
                        </p>

                        <ViewTerminal placeholder="Go to projects" targetId="#projects" terminalText="view ~/projects" />
                    </div>
                </div>

            </section>
            <InvertedDivider />
        </>
    );
};

export default Hero;
