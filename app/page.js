import Link from "next/link";
import {
  FileText,
  CreditCard,
  Utensils,
  Languages,
  Users,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

import Hero from "../components/home/Hero";
import FeaturedCard from "../components/home/FeaturedCard";
import HowItWorks from "../components/home/HowItWorks";

const features = [
  {
    icon: <FileText size={25} />,
    title: "Documentation",
    description:
      "Understand important documents, applications and student requirements.",
    href: "/documentation"
  },
  {
    icon: <CreditCard size={25} />,
    title: "Banking & SIM",
    description:
      "Learn about banking, money transfers, SIM cards and local services.",
    href: "/banking"
  },
  {
    icon: <Utensils size={25} />,
    title: "Food & Grocery",
    description:
      "Discover food options, international groceries and familiar cuisines.",
    href: "/food"
  },
  {
    icon: <Languages size={25} />,
    title: "Language Support",
    description:
      "Useful language resources to make everyday communication easier.",
    href: "/language"
  },
  {
    icon: <Users size={25} />,
    title: "Student Community",
    description:
      "Connect with students from similar backgrounds and experiences.",
    href: "/community"
  },
  {
    icon: <ShieldAlert size={25} />,
    title: "Emergency Support",
    description:
      "Quick access to important emergency information and resources.",
    href: "/emergency"
  }
];

const countries = [
  {
    flag: "🇮🇳",
    name: "India"
  },
  {
    flag: "🇳🇵",
    name: "Nepal"
  },
  {
    flag: "🇧🇩",
    name: "Bangladesh"
  },
  {
    flag: "🇳🇬",
    name: "Nigeria"
  },
  {
    flag: "🇨🇳",
    name: "China"
  },
  {
    flag: "🇵🇰",
    name: "Pakistan"
  }
];

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <Hero />


      {/* FEATURES SECTION */}
      <section className="features-section">

        <div className="section-heading">

          <span className="section-label">
            EVERYTHING IN ONE PLACE
          </span>

          <h2>
            Support for everyday
            <span> student life.</span>
          </h2>

          <p>
            From paperwork to finding your community,
            get the guidance you need in one place.
          </p>

        </div>


        <div className="features-grid">

          {features.map((feature) => (
            <FeaturedCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <HowItWorks />


      {/* COUNTRIES SECTION */}
      <section className="countries-section">

        <div className="section-heading">

          <span className="section-label">
            GLOBAL COMMUNITY
          </span>

          <h2>
            Wherever you're
            <span> from.</span>
          </h2>

          <p>
            Connect with students from different countries
            and find communities that feel familiar.
          </p>

        </div>


        <div className="countries-grid">

          {countries.map((country) => (
            <Link
              href={`/information/${country.name.toLowerCase()}`}
              className="country-card"
              key={country.name}
            >

              <span className="country-flag">
                {country.flag}
              </span>

              <span>{country.name}</span>

              <ArrowRight size={18} />

            </Link>
          ))}

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="cta-section">

        <div className="cta-container">

          <div>

            <span className="section-label">
              START YOUR JOURNEY
            </span>

            <h2>
              Being far from home
              doesn't mean being alone.
            </h2>

            <p>
              Find information, support and people who
              understand your journey.
            </p>

          </div>


          <Link
            href="/dashboard"
            className="cta-button"
          >
            Get Started
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}