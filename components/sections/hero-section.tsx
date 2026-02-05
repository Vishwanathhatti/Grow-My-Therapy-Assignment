import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-24 md:py-12 overflow-hidden bg-[#F9F8F6]">
            {/* Width constrained container */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">

                {/* Left: Image with Arch */}
                <div className="relative w-full h-[60vh] md:h-[80vh] flex justify-center md:justify-end order-1 md:order-1">
                    <FadeIn direction="up" delay={0.1} className="relative w-full max-w-md h-full">
                        <div className="relative w-full h-full rounded-t-[100px] md:rounded-t-[200px] overflow-hidden shadow-2xl">
                            <Image
                                src="/office/Dr. Maya Reynolds.png"
                                alt="Dr. Maya Reynolds - Clinical Psychologist"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-2 md:order-2 z-10">
                    <FadeIn direction="up" delay={0.3}>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#2C3E50] leading-tight">
                            Find calm in <br /> the chaos.
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <p className="text-xl text-gray-600 font-light max-w-lg">
                            Psychotherapy for high-achieving adults in Santa Monica, navigating anxiety, trauma, and burnout.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.5}>
                        <Button size="lg" className="rounded-none bg-[#8B7355] hover:bg-[#6e5d46] text-white px-12 py-6 tracking-widest uppercase text-sm font-light">
                            Book a Consultation
                        </Button>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
