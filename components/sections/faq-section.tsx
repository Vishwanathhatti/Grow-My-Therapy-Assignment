import Image from "next/image";
import { Accordion } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";

const faqs = [
    {
        title: "Do you take insurance?",
        content: "I do not accept insurance directly. However, I can provide you with a superbill (an itemized invoice) that you can submit to your insurance company for potential reimbursement. Please check with your provider about your out-of-network benefits."
    },
    {
        title: "What are your rates?",
        content: "My rate is $250 per 50-minute session. I offer a limited number of sliding scale slots for those in financial need. Payment is due at the time of service."
    },
    {
        title: "Do you have any openings?",
        content: "I am currently accepting new clients for daytime appointments. Evening slots are currently full, but I can add you to a waitlist."
    }
];

export function FaqSection() {
    return (
        <section className="py-24 px-6 bg-[#F9F8F6]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Image with Arch */}
                <div className="relative w-full h-[60vh] order-1 md:order-1">
                    <FadeIn direction="up" delay={0.1} className="relative w-full h-full">
                        <div className="relative w-full h-full rounded-t-[200px] overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2187&auto=format&fit=crop"
                                alt="Calm stones"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-start space-y-8 order-2 md:order-2 w-full">
                    <FadeIn direction="up" delay={0.2} className="w-full">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-8">FAQs</h2>
                        <Accordion items={faqs} />
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
