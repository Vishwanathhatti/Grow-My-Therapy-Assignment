"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif tracking-wide text-gray-900">
                    Grow My Therapy
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/blog" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-8 px-6 flex flex-col gap-6 items-center shadow-lg">
                    <Link href="/blog" className="text-lg uppercase tracking-widest text-gray-600 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </Link>
                    <Link href="/contact" className="text-lg uppercase tracking-widest text-gray-600 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
