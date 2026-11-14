import Link from "next/link";
import {
  Globe2,
  FileText,
  CreditCard,
  Utensils,
  Languages,
  Users,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

const countries = [
  {
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    description: "Information for students studying in India."
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    description: "Guidance for students adjusting to life in Canada."
  },
  {
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    description: "Useful resources for international students in the UK."
  },
  {
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    description: "Support and information for students in Australia."
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description: "Essential information for students in the USA."
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    description: "Resources for students starting life in Germany."
  }
];

const categories = [
  {
    icon: <FileText size={25} />,
    title: "Documentation",
    description:
      "Visa, university documents, registration and important paperwork.",
    href: "/documentation"
  },
  {
    icon: <CreditCard size={25} />,
    title: "Banking & SIM",
    description:
      "Bank accounts, payments, SIM cards and financial information.",
    href: "/banking"
  },
  {
    icon: <Utensils size={25} />,
    title: "Food & Grocery",
    description:
      "Food options, grocery stores and familiar international cuisines.",
    href: "/food"
  },
  {
    icon: <Languages size={25} />,
    title: "Language",
    description:
      "Useful phrases and resources for everyday communication.",
    href: "/language"
  },
  {
    icon: <Users size={25} />,
    title: "Community",
    description:
      "Find students, communities and people with similar experiences.",
    href: "/community"
  },
  {
    icon: <ShieldAlert size={25} />,
    title: "Emergency",
    description:
      "Emergency contacts and important safety information.",
    href: "/emergency"
  }
];

export default function ExplorePage() {
  return (
    <main className="explore-page">

      {/* HERO */}

      <section className="explore-hero">

        <div className="explore-hero-content">

          <span className="section-label">
            EXPLORE SUPPORT
          </span>

          <h1>
            Find information
            <span> made for you.</span>
          </h1>

          <p>
            Explore region-specific information, resources and
            support designed to make your international student
            journey easier.
          </p>

        </div>

        <div className="explore-globe">
          <Globe2 size={90} />
        </div>

      </section>


      {/* COUNTRIES */}

      <section className="explore-section">

        <div className="section-heading">

          <span className="section-label">
            CHOOSE YOUR DESTINATION
          </span>

          <h2>
            Where are you studying?
          </h2>

          <p>
            Select your destination to discover information
            relevant to your new home.
          </p>

        </div>


        <div className="country-grid">

          {countries.map((country) => (

            <Link
              href={`/information/${country.code.toLowerCase()}`}
              className="explore-country-card"
              key={country.code}
            >

              <div className="country-top">

                <span className="large-flag">
                  {country.flag}
                </span>

                <span className="country-code">
                  {country.code}
                </span>

              </div>

              <h3>
                {country.name}
              </h3>

              <p>
                {country.description}
              </p>

              <div className="country-link">
                Explore information
                <ArrowRight size={17} />
              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* SUPPORT CATEGORIES */}

      <section className="explore-section support-section">

        <div className="section-heading">

          <span className="section-label">
            SUPPORT CATEGORIES
          </span>

          <h2>
            What can we help with?
          </h2>

          <p>
            Get practical guidance for the most common
            challenges international students face.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category) => (

            <Link
              href={category.href}
              className="category-card"
              key={category.title}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>
                {category.title}
              </h3>

              <p>
                {category.description}
              </p>

              <span className="category-arrow">
                Learn more
                <ArrowRight size={17} />
              </span>

            </Link>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="explore-cta">

        <div>

          <span className="section-label">
            NEED MORE HELP?
          </span>

          <h2>
            You're not alone in this journey.
          </h2>

          <p>
            Connect with students and discover communities
            that understand what you're going through.
          </p>

        </div>

        <Link
          href="/community"
          className="explore-cta-button"
        >
          Join Community
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}