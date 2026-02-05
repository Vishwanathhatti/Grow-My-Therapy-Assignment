import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";

export function IntroSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Text */}
                <div className="flex flex-col items-start space-y-6 order-2 md:order-1">
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-6">
                            You don't have to carry it all.
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600 font-light leading-relaxed mb-6">
                            <p>
                                I help adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                            </p>
                            <p>
                                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                            </p>
                        </div>
                        <Button variant="outline" size="lg" className="rounded-none border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white uppercase tracking-widest text-xs px-10 mt-4 transition-all">
                            Get in touch
                        </Button>
                    </FadeIn>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-[50vh] md:h-[70vh] order-1 md:order-2">
                    <FadeIn direction="up" delay={0.2} className="relative w-full h-full">
                        <div className="relative w-full h-full rounded-t-[100px] md:rounded-t-[200px] overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                                alt="Calm gentle plant"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
