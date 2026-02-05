import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";

export function OfficeSection() {
    return (
        <section className="py-24 px-6 bg-[#F5F5F0] text-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <div className="flex flex-col items-start space-y-8 order-2 md:order-1">
                    <FadeIn direction="up" delay={0.1}>
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50]">
                                Our Office
                            </h2>
                            <div className="w-20 h-1 bg-[#8B7355] mb-6"></div>
                            {/* Visual separator */}
                        </div>

                        <div className="space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.
                            </p>
                            <p>
                                My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                            </p>
                        </div>

                        <div className="mt-8 p-6 bg-white border-l-4 border-[#8B7355] shadow-sm w-full">
                            <h3 className="text-xl font-serif mb-2 text-[#2C3E50]">Visit Us</h3>
                            <address className="not-italic text-gray-600 font-light space-y-1">
                                <p>123th Street 45 W</p>
                                <p>Santa Monica, CA 90401</p>
                            </address>
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-[50vh] order-1 md:order-2">
                    <FadeIn direction="up" delay={0.2} className="relative w-full h-full">
                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl">
                            {/* Placeholder for a calm, sunny office */}
                            <Image
                                src="/office/office1.jpeg"
                                alt="Calm Therapy Office in Santa Monica"
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
