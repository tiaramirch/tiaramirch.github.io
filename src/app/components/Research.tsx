import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const researchProjects = [
  {
    title: "Multiview 3D Point Cloud Registration",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Adapted a GCSAC-based pipeline to reconstruct complex 3D objects accurately",
      "Implemented voxel grid downsampling, Fast Point Feature Histograms (FPFH), and sparse similarity graph construction using Python and Open3D",
      "Evaluated on Stanford Bunny and Dragon datasets, demonstrating high geometric fidelity",
    ],
  },
];

const Research: React.FC = () => {
  return (
    <section id="research" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Research Projects
        </h2>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {researchProjects.map((proj, idx) => (
            <Accordion.Item
              key={idx}
              value={`proj-${idx}`}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg flex justify-between items-center">
                  <span>{proj.title}</span>
                  <span className="text-gray-500">{proj.period}</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 py-4 border-t border-gray-200 text-gray-700">
                <ul className="list-disc list-inside space-y-1">
                  {proj.description.map((point, i) => (
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

export default Research;
