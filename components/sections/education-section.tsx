import { Accordion } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";

const education = [
    {
        title: "Education",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Psy.D. in Clinical Psychology</strong> - Pepperdine University</li>
                <li><strong>M.A. in Psychology</strong> - Pepperdine University</li>
                <li><strong>B.A. in Psychology</strong> - UCLA</li>
            </ul>
        )
    },
    {
        title: "Licenses & Certifications",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Licensed Clinical Psychologist (CA License #12345)</li>
                <li>Certified EMDR Therapist</li>
                <li>Certificate in Mindfulness-Based Stress Reduction (MBSR)</li>
            </ul>
        )
    },
    {
        title: "Professional Affiliations",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>American Psychological Association (APA)</li>
                <li>California Psychological Association (CPA)</li>
            </ul>
        )
    }
];

export function EducationSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h3 className="text-3xl md:text-4xl font-serif text-[#2C3E50]">My Professional Background</h3>
                    </FadeIn>
                </div>
                <FadeIn direction="up" delay={0.2}>
                    <Accordion items={education} />
                </FadeIn>
            </div>
        </section>
    );
}
