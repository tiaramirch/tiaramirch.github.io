import React from "react";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  period,
  description,
}) => {
  return (
    <div className="card h-100 shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">{role}</h5>
        <h6 className="card-subtitle mb-2 text-primary">{company}</h6>
        <p className="text-muted">{period}</p>
        <ul>
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
