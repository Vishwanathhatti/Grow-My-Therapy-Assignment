"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-t border-gray-200 last:border-b">
            <button
                type="button"
                onClick={onClick}
                className="flex items-center justify-between w-full py-6 text-left group transition-all"
            >
                <span className="text-xl md:text-2xl font-serif text-[#2C3E50] group-hover:text-[#8B7355] transition-colors pl-4">
                    {title}
                </span>
                <span className="p-2">
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-[#8B7355]" />
                    ) : (
                        <Plus className="w-5 h-5 text-[#8B7355]" />
                    )}
                </span>
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out pl-4 pr-12",
                    isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                )}
            >
                <div className="text-gray-600 font-light leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: { title: string; content: React.ReactNode }[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
