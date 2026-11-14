import { Globe2, Search, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Globe2 size={26} />,
    title: "Choose your destination",
    description:
      "Select where you are studying and get information relevant to your destination."
  },
  {
    number: "02",
    icon: <Search size={26} />,
    title: "Explore resources",
    description:
      "Find guidance about documents, banking, food, language and everyday life."
  },
  {
    number: "03",
    icon: <Users size={26} />,
    title: "Connect with students",
    description:
      "Join communities and connect with students who understand your experience."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-section">

      <div className="section-heading">

        <span className="section-label">
          HOW IT WORKS
        </span>

        <h2>
          Support that starts
          <span> with you.</span>
        </h2>

        <p>
          Tell us where you're from and where you're going.
          We'll help you find the right resources.
        </p>

      </div>

      <div className="steps-container">

        {steps.map((step) => (
          <div className="step-card" key={step.number}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}