import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Text */}
                <div className="flex flex-col items-start space-y-6 order-2 md:order-1">
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] leading-tight mb-6">
                            About Dr. Maya
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed mb-6">
                            <p>
                                I’m a licensed clinical psychologist based in Santa Monica, California. My work focuses on anxiety, panic, trauma, and burnout.
                            </p>
                            <p>
                                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as CBT, EMDR, and mindfulness-based practices to help you feel more regulated in your daily life.
                            </p>
                        </div>

                        <Button size="lg" className="rounded-none bg-[#8B7355] hover:bg-[#6a5840] text-white px-12 tracking-wide uppercase text-sm mt-4">
                            More about me
                        </Button>
                    </FadeIn>
                </div>

                {/* Right: Image (Circle) */}
                <div className="relative w-full h-[50vh] md:h-[60vh] order-1 md:order-2 flex justify-center">
                    <FadeIn direction="up" delay={0.2} className="relative w-[80%] aspect-square">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Image
                                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg"
                                alt="Lilac"
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
