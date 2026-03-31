"use client";

import { useState } from "react";
const AccordionItem = ({ item, isOpen, onToggle }) => {
    return (
        <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-delay={item.delay}
        >
            <h5 className="accordion-header">
                <button
                    className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={item.id}
                >
                    {item.question}
                </button>
            </h5>

            <div
                id={item.id}
                className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "500px" : 0,
                    transition: "max-height 0.35s ease",
                }}
            >
                <div className="accordion-body">{item.answer}</div>
            </div>
        </div>
    );
};
export default function Accordion({ items = [] }) {
    const initialActiveId = items?.find((item) => item.open)?.id ?? null;
    const [activeId, setActiveId] = useState(initialActiveId);

    const handleToggle = (id) => {
        setActiveId((current) => (current === id ? null : id));
    };

    return (
        <div className="accordion">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={activeId === item.id}
                    onToggle={() => handleToggle(item.id)}
                />
            ))}
        </div>
    );
}
