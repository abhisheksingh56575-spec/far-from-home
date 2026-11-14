
import Link from "next/link";
import { Globe, ArrowRight, MapPin } from "lucide-react";

const countries = [
  { name: "India", slug: "india", code: "IN", flag: "🇮🇳", description: "Information and guidance for students studying in India." },
  { name: "Canada", slug: "canada", code: "CA", flag: "🇨🇦", description: "Guidance for students adjusting to life in Canada." },
  { name: "United Kingdom", slug: "uk", code: "GB", flag: "🇬🇧", description: "Useful resources for international students in the UK." },
  { name: "Australia", slug: "australia", code: "AU", flag: "🇦🇺", description: "Prepare for student life in Australia." },
  { name: "United States", slug: "usa", code: "US", flag: "🇺🇸", description: "Helpful resources for students in the USA." },
  { name: "Germany", slug: "germany", code: "DE", flag: "🇩🇪", description: "Discover student guidance for living in Germany." },
];

export default function ExplorePage() {
  return (
    <main className="ffh-directory">
      <section className="ffh-directory-hero">
        <span className="ffh-directory-eyebrow"><Globe size={15} /> EXPLORE DESTINATIONS</span>
        <h1>Find information <span>made for you.</span></h1>
        <p>Explore region-specific information, resources and support designed to make your international student journey easier.</p>
      </section>

      <section className="ffh-directory-section">
        <div className="ffh-directory-heading">
          <span>CHOOSE YOUR DESTINATION</span>
          <h2>Where are you studying?</h2>
          <p>Select your destination to discover information relevant to your new home.</p>
        </div>

        <div className="ffh-directory-grid">
          {countries.map((country) => (
            <Link
              href={`/information/${country.slug}`}
              className="ffh-directory-card"
              key={country.slug}
            >
              <div className="ffh-directory-card-top">
                <span className="ffh-directory-flag">{country.flag}</span>
                <span className="ffh-directory-code">{country.code}</span>
              </div>
              <h3>{country.name}</h3>
              <p>{country.description}</p>
              <span className="ffh-directory-link">Explore information <ArrowRight size={17} /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
