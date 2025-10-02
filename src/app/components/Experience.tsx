import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    company: "Skyworks Solutions, Singapore",
    role: "Factory Automation Intern (Hardware)",
    period: "Jan 2025 - Jun 2025",
    description: [
      "Automated database queries and inventory updates using Python & SQL, reducing manual work significantly",
      "Designed interactive Power BI dashboards for monitoring production flow",
      "Installed 600+ RFID tags to improve lot traceability and reduce errors",
    ],
  },
  {
    company: "FoloUp, Singapore",
    role: "Junior Software Engineer",
    period: "May 2024 - Nov 2024",
    description: [
      "Built full-stack features using React, Bootstrap, and TypeScript for AI-driven interview platform",
      "Developed LLM-powered workflows for question generation and candidate response analysis",
      "Optimized database queries for efficient profile and session data management",
    ],
  },
  {
    company: "Floramis, Singapore",
    role: "Software Engineering Intern",
    period: "May 2024 - Aug 2024",
    description: [
      "Trained image classification models reaching 99.9% accuracy for binary and 80% for multi-class plant species",
      "Enhanced Unity project UI to streamline workflows for professional recordings",
      "Developed automated Python image scraper collecting 800,000+ images for model training",
    ],
  },
  {
    company: "Monster Group, Indonesia",
    role: "UI/UX Designer Intern",
    period: "May 2023 - Jul 2023",
    description: [
      "Designed 3 user interfaces in Figma for a recycling bin project, improving usability",
      "Created mobile-first responsive designs for client websites and apps",
      "Performed SWOT analyses to generate actionable insights, improving client satisfaction",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Work Experiences
        </h2>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {experiences.map((exp, idx) => (
            <Accordion.Item
              key={idx}
              value={`item-${idx}`}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg flex justify-between items-center">
                  <span>
                    {exp.role} @ {exp.company}
                  </span>
                  <span className="text-gray-500">{exp.period}</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 py-4 border-t border-gray-200 text-gray-700">
                <ul className="list-disc list-inside space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default Experience;
