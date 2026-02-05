import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";

export function SymptomsSection() {
    return (
        <section className="py-24 px-6 bg-[#f7f7f7]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Image */}
                <div className="relative w-full h-[60vh] order-1">
                    <FadeIn direction="up" delay={0.1} className="relative w-full h-full">
                        <div className="relative w-full h-full rounded-t-[50%] overflow-hidden">
                            <Image
                                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg"
                                alt="Support"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Text */}
                <div className="flex flex-col items-start space-y-8 order-2">
                    <FadeIn direction="up" delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            You don’t have to do this all <em className="italic">alone</em>.
                        </h2>
                        <p className="text-lg text-gray-600 font-light mt-8">
                            If you are facing any of these, there’s hope:
                        </p>

                        <ul className="space-y-4 text-gray-600 font-light list-none mt-4">
                            {[
                                "Persistent feelings of sadness or hopelessness",
                                "Trouble focusing or making decisions",
                                "Difficulty maintaining relationships",
                                "Feeling constantly exhausted or unmotivated",
                                "A pervasive sense of being overwhelmed"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-gray-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="text-lg text-gray-900 font-medium mt-8">
                            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                        </p>

                        <Button variant="outline" size="lg" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-100 uppercase tracking-widest text-xs px-10 mt-8">
                            Work with me
                        </Button>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
