import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
  id,
}) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </section>
  );
};
