
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Globe2,
  BookOpen,
  Home,
  Utensils,
  CreditCard,
  MessageCircle,
} from "lucide-react";

const countryNames = {
  "india-students": "India",
  "nepal-students": "Nepal",
  "bangladesh-students": "Bangladesh",
  "nigeria-students": "Nigeria",
  "china-students": "China",
  "pakistan-students": "Pakistan",
  "canada-students": "Canada",
  "uk-students": "United Kingdom",
  "united-kingdom-students": "United Kingdom",
  "australia-students": "Australia",
  "usa-students": "United States",
  "us-students": "United States",
  "united-states-students": "United States",
};

const topics = [
  {
    title: "University Guidance",
    description: "Explore university resources, admission guidance and student support.",
    icon: BookOpen,
  },
  {
    title: "Accommodation",
    description: "Learn about student housing, hostels and rental options.",
    icon: Home,
  },
  {
    title: "Food & Grocery",
    description: "Find familiar food options and useful grocery information.",
    icon: Utensils,
  },
  {
    title: "Banking & Money",
    description: "Understand student banking, payments and financial basics.",
    icon: CreditCard,
  },
  {
    title: "Student Connections",
    description: "Meet other students and build a helpful support network.",
    icon: Users,
  },
  {
    title: "Community Support",
    description: "Share experiences and find guidance during your student journey.",
    icon: MessageCircle,
  },
];

export default async function CommunityDetailPage({ params }) {
  const { communityId } = await params;

  const country =
    countryNames[communityId] ||
    communityId
      .replace(/-students$/, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const code = country === "United Kingdom"
    ? "UK"
    : country === "United States"
    ? "US"
    : country.slice(0, 2).toUpperCase();

  return (
    <main className="community-detail-page">
      <Link href="/community" className="community-back-link">
        <ArrowLeft size={18} />
        Back to Community
      </Link>

      <section className="community-detail-hero">
        <div className="community-detail-code">{code}</div>
        <span className="section-label">STUDENT COMMUNITY</span>
        <h1>Welcome to the {country} Student Community</h1>
        <p>
          Connect with students from {country}, exchange experiences
          and discover helpful information for studying and living abroad.
        </p>
        <div className="community-detail-stat">
          <Users size={18} />
          Student support network
        </div>
      </section>

      <section className="community-topics-section">
        <span className="section-label">COMMUNITY RESOURCES</span>
        <h2>Explore student support</h2>
        <p>Useful topics to help you settle into student life in {country}.</p>

        <div className="community-topics-grid">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article className="community-topic-card" key={topic.title}>
                <div className="community-topic-icon">
                  <Icon size={22} />
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="community-detail-cta">
        <Globe2 size={30} />
        <div>
          <h2>Your journey is easier together.</h2>
          <p>Explore more resources for international students.</p>
        </div>
        <Link href="/explore" className="primary-button">
          Explore Resources <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
