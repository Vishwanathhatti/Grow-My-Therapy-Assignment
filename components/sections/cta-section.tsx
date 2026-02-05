import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";

export function CtaSection() {
    return (
        <section className="py-24 px-6 bg-white text-center">
            <div className="container mx-auto max-w-2xl space-y-8">
                <FadeIn direction="up">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-2">
                        Get started today.
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mt-4">
                        Ready to take the first step towards a happier, healthier you? <br className="hidden md:block" />
                        Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                    </p>

                    <div className="pt-8">
                        <Link href="/contact">
                            <Button size="lg" className="rounded-none bg-[#2C3E50] hover:bg-[#1a252f] text-white px-10 tracking-widest uppercase text-sm">
                                Get in touch
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
