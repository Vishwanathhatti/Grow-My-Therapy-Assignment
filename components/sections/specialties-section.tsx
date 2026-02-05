import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";

const specialties = [
    {
        title: "Anxiety & Panic",
        description: "Constant worry, tension, or a sense of impending doom shouldn't dictate your life. We work on regulating your nervous system and finding calm.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"
    },
    {
        title: "Trauma & PTSD",
        description: "Whether it's a recent event or past experiences affecting your present, we process trauma safely to help you feel secure in your body again.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2427&auto=format&fit=crop"
    },
    {
        title: "Burnout & Perfectionism",
        description: "For high-achievers who feel disconnected after years of pushing through stress. Reconnect with yourself and develop sustainable ways of living.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2340&auto=format&fit=crop"
    }
];

export function SpecialtiesSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <p className="text-xl md:text-2xl font-light text-gray-900">My Specialties</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {specialties.map((item, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.2} className="flex flex-col items-start gap-6">
                            {/* Image */}
                            <div className="relative w-[75%] aspect-square rounded-full overflow-hidden self-center md:self-start">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
