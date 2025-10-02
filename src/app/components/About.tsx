import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-32 bg-gray-50 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        About Me
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        I am a fourth-year Electrical Engineering student at the National
        University of Singapore, specialising in Robotics. I have minors in
        Artificial Intelligence and Computing (Design & Engineering). I am
        passionate about building hardware and software solutions that combine
        engineering, AI, and innovative design.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="p-8 bg-white rounded shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-purple-600 text-xl mb-4">
            Education & Specialisation
          </h3>
          <p className="mb-1">
            <strong>Degree:</strong> B.Eng. (Hons) - Electrical Engineering, NUS
          </p>
          <p className="mb-1">
            <strong>Dates:</strong> Aug 2022 - May 2026
          </p>
          <p className="mb-1">
            <strong>Specialisation:</strong> Robotics
          </p>
          <p>
            <strong>Minors:</strong> Artificial Intelligence, Computing (Design
            & Engineering)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
