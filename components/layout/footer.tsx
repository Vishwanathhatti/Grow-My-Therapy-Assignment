import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100 font-light text-gray-600">
            <div className="container mx-auto px-6">

                {/* Top Section: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center md:text-left">

                    {/* Column 1: Address/Contact */}
                    <div className="space-y-4 md:text-center"> {/* Centered in template logic for first block usually, actually template had specific alignments */}
                        {/* Template Block 1 was Centered */}
                        <h3 className="text-xl font-serif text-[#2C3E50] mb-4">Grow My Therapy</h3>
                        <div className="space-y-1 text-sm leading-relaxed">
                            <p>123th Street 45 W</p>
                            <p>Santa Monica, CA 90401</p>
                            <br />
                            <p><a href="mailto:email@example.com" className="underline hover:text-gray-900">email@example.com</a></p>
                            <p><a href="tel:5555555555" className="hover:text-gray-900">(555) 555-5555</a></p>
                        </div>
                    </div>

                    {/* Column 2: Hours */}
                    <div className="space-y-4 md:text-center"> {/* Template Block 2 (Hours) was Left aligned? No, let's check. Block 59da... text-align: center? No, usually center in middle. I'll center it. */}
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-4">Hours</h4>
                        <p className="text-sm leading-relaxed">
                            Monday – Friday<br />
                            10am – 6pm
                        </p>
                    </div>

                    {/* Column 3: Find (Links) */}
                    <div className="space-y-4 md:text-right">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-4">Find</h4>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link href="/" className="hover:text-gray-900 underline decoration-transparent hover:decoration-gray-400 transition-all">Home</Link>
                            <Link href="/contact" className="hover:text-gray-900 underline decoration-transparent hover:decoration-gray-400 transition-all">Contact</Link>
                            <Link href="/blog" className="hover:text-gray-900 underline decoration-transparent hover:decoration-gray-400 transition-all">Blog</Link>
                        </nav>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-10"></div>

                {/* Bottom Section: Legal & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <div className="flex gap-6 flex-wrap justify-center">
                        <Link href="/privacy-policy" className="hover:text-gray-600">Privacy & Cookies Policy</Link>
                        <Link href="/good-faith-estimate" className="hover:text-gray-600">Good Faith Estimate</Link>
                        <Link href="/terms-conditions" className="hover:text-gray-600">Website Terms & Conditions</Link>
                        <Link href="/disclaimer" className="hover:text-gray-600">Disclaimer</Link>
                    </div>
                    <div className="text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} Grow My Therapy. All rights reserved.</p>
                        <p className="mt-2 text-[10px] opacity-60">Website Template Credits: Go Bloom Creative</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
