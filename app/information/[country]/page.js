
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft, Globe, GraduationCap, Home, CreditCard,
  HeartPulse, FileText, ShieldCheck, BookOpen
} from "lucide-react";

const countries = {
  india: {
    name: "India", flag: "🇮🇳", currency: "Indian Rupee (INR)",
    language: "Hindi, English and regional languages",
    intro: "Your guide to studying and living in India.",
    visa: "Check applicable student visa and registration requirements through official Indian authorities.",
    housing: "Explore university hostels, paying guest accommodation and verified rental options.",
    banking: "Compare student-friendly bank accounts and required identity documents.",
    healthcare: "Check your university health centre and nearby hospitals.",
    tips: ["Keep copies of your passport and admission documents.", "Confirm accommodation before travelling.", "Save your university emergency contacts."]
  },
  canada: {
    name: "Canada", flag: "🇨🇦", currency: "Canadian Dollar (CAD)",
    language: "English and French",
    intro: "Your guide to studying and living in Canada.",
    visa: "Review your study permit conditions through the official IRCC website.",
    housing: "Explore campus residences and verified off-campus rentals.",
    banking: "Compare student bank accounts and newcomer banking offers.",
    healthcare: "Check provincial health coverage and university insurance requirements.",
    tips: ["Understand your study permit conditions.", "Prepare for cold weather.", "Keep immigration documents accessible."]
  },
  uk: {
    name: "United Kingdom", flag: "🇬🇧", currency: "Pound Sterling (GBP)",
    language: "English",
    intro: "Your guide to studying and living in the United Kingdom.",
    visa: "Review Student visa guidance through the official GOV.UK website.",
    housing: "Compare university halls and verified private accommodation.",
    banking: "Check student account eligibility and proof-of-address requirements.",
    healthcare: "Review NHS access and any applicable immigration health surcharge.",
    tips: ["Check your visa work conditions.", "Arrange accommodation before arrival.", "Keep university contact details handy."]
  },
  australia: {
    name: "Australia", flag: "🇦🇺", currency: "Australian Dollar (AUD)",
    language: "English",
    intro: "Your guide to studying and living in Australia.",
    visa: "Review student visa conditions through the Australian Department of Home Affairs.",
    housing: "Explore university accommodation and verified rental listings.",
    banking: "Compare student accounts and identification requirements.",
    healthcare: "Understand Overseas Student Health Cover (OSHC).",
    tips: ["Maintain required OSHC cover.", "Check your visa work conditions.", "Plan your airport transport."]
  },
  usa: {
    name: "United States", flag: "🇺🇸", currency: "US Dollar (USD)",
    language: "English",
    intro: "Your guide to studying and living in the United States.",
    visa: "Review your F-1 or applicable visa requirements through official US resources.",
    housing: "Check university housing and verified off-campus rental options.",
    banking: "Compare student checking accounts and identification requirements.",
    healthcare: "Review your university health insurance requirements.",
    tips: ["Keep your I-20 and immigration documents safe.", "Understand employment restrictions.", "Save campus emergency contacts."]
  },
  germany: {
    name: "Germany", flag: "🇩🇪", currency: "Euro (EUR)",
    language: "German",
    intro: "Your guide to studying and living in Germany.",
    visa: "Review student visa and residence permit requirements through official German authorities.",
    housing: "Explore student dormitories and verified private rentals.",
    banking: "Check blocked account requirements and local bank options.",
    healthcare: "Arrange health insurance that meets German student requirements.",
    tips: ["Learn basic German phrases.", "Register your address after arrival where required.", "Understand your health insurance coverage."]
  }
};

const sections = [
  { title: "Visa & Documents", key: "visa", icon: FileText },
  { title: "Accommodation", key: "housing", icon: Home },
  { title: "Banking", key: "banking", icon: CreditCard },
  { title: "Healthcare", key: "healthcare", icon: HeartPulse }
];

export default function CountryInformationPage() {
  const params = useParams();
  const slug = String(params.country || "").toLowerCase();
  const country = countries[slug];

  if (!country) {
    return (
      <main className="ffh-country-page">
        <div className="ffh-country-empty">
          <Globe size={42} />
          <h1>Country guide not found</h1>
          <p>Please choose one of our supported destinations.</p>
          <Link href="/explore" className="ffh-country-button">Back to Explore</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="ffh-country-page">
      <div className="ffh-country-container">
        <Link href="/explore" className="ffh-country-back">
          <ArrowLeft size={17} /> Back to Explore
        </Link>

        <section className="ffh-country-hero">
          <div className="ffh-country-hero-content">
            <span className="ffh-country-eyebrow"><Globe size={15} /> YOUR DESTINATION GUIDE</span>
            <h1>{country.name}</h1>
            <p>{country.intro}</p>
          </div>
          <div className="ffh-country-flag">{country.flag}</div>
        </section>

        <section className="ffh-country-overview">
          <div className="ffh-country-section-heading">
            <span>GETTING STARTED</span>
            <h2>Essential information</h2>
            <p>Important things to know as you prepare for student life.</p>
          </div>

          <div className="ffh-country-facts">
            <article className="ffh-country-fact">
              <div className="ffh-country-icon"><CreditCard /></div>
              <div><span>OFFICIAL CURRENCY</span><h3>{country.currency}</h3></div>
            </article>
            <article className="ffh-country-fact">
              <div className="ffh-country-icon"><GraduationCap /></div>
              <div><span>LANGUAGES</span><h3>{country.language}</h3></div>
            </article>
          </div>
        </section>

        <section className="ffh-country-resources">
          <div className="ffh-country-section-heading">
            <span>STUDENT RESOURCES</span>
            <h2>Settle into your new home</h2>
            <p>Explore the essentials that can make your transition easier.</p>
          </div>

          <div className="ffh-country-resource-grid">
            {sections.map(({ title, key, icon: Icon }) => (
              <article className="ffh-country-resource" key={key}>
                <div className="ffh-country-icon"><Icon /></div>
                <h3>{title}</h3>
                <p className="ffh-country-detail">{country[key]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ffh-country-tips">
          <div className="ffh-country-tips-icon"><ShieldCheck size={30} /></div>
          <div>
            <span>BE PREPARED</span>
            <h2>Helpful tips for students</h2>
            <ul>{country.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
          </div>
        </section>

        <section className="ffh-country-footer">
          <BookOpen size={27} />
          <div>
            <h2>Your journey starts here.</h2>
            <p>Verify current visa, financial and healthcare rules with official government or university sources.</p>
          </div>
          <Link href="/explore" className="ffh-country-button">Explore destinations</Link>
        </section>
      </div>
    </main>
  );
}
