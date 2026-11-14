
import Link from "next/link";
import { Users, ArrowRight, Globe } from "lucide-react";

const communities = [
  { name: "India", slug: "india", code: "IN", flag: "🇮🇳", description: "Connect with Indian students, share experiences and find familiar support." },
  { name: "Nepal", slug: "nepal", code: "NP", flag: "🇳🇵", description: "Meet Nepali students and build friendships abroad." },
  { name: "Bangladesh", slug: "bangladesh", code: "BD", flag: "🇧🇩", description: "Connect with Bangladeshi students around the world." },
  { name: "Nigeria", slug: "nigeria", code: "NG", flag: "🇳🇬", description: "Find Nigerian student connections and peer support." },
  { name: "China", slug: "china", code: "CN", flag: "🇨🇳", description: "Connect with Chinese students and exchange helpful advice." },
  { name: "Pakistan", slug: "pakistan", code: "PK", flag: "🇵🇰", description: "Meet Pakistani students and share your international journey." },
];

export default function CommunityPage() {
  return (
    <main className="ffh-directory">
      <section className="ffh-directory-hero">
        <span className="ffh-directory-eyebrow"><Users size={15} /> STUDENT COMMUNITY</span>
        <h1>Wherever you're <span>from.</span></h1>
        <p>Connect with students from different countries and find communities that feel familiar.</p>
      </section>

      <section className="ffh-directory-section">
        <div className="ffh-directory-heading">
          <span>FIND YOUR COMMUNITY</span>
          <h2>Meet students who understand you</h2>
          <p>Choose your community to explore student connections and helpful resources.</p>
        </div>

        <div className="ffh-community-grid">
          {communities.map((community) => (
            <Link
              href={`/community/${community.slug}`}
              className="ffh-community-card"
              key={community.slug}
            >
              <span className="ffh-community-flag">{community.flag}</span>
              <span className="ffh-community-code">{community.code}</span>
              <span className="ffh-community-name">{community.name}</span>
              <ArrowRight className="ffh-community-arrow" size={19} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
