
import Link from "next/link";
import { Users, ArrowRight, Globe2, MessageCircle } from "lucide-react";

const communities = [
  { id: "india-students", name: "India", code: "IN", description: "Connect with Indian students and share your study abroad experiences.", members: "Indian student network" },
  { id: "nepal-students", name: "Nepal", code: "NP", description: "Meet students from Nepal and help each other settle into a new country.", members: "Nepali student network" },
  { id: "bangladesh-students", name: "Bangladesh", code: "BD", description: "Build friendships and share useful student resources.", members: "Bangladeshi student network" },
  { id: "nigeria-students", name: "Nigeria", code: "NG", description: "Connect with Nigerian students and exchange helpful advice.", members: "Nigerian student network" },
  { id: "china-students", name: "China", code: "CN", description: "Find support and connect with students from China.", members: "Chinese student network" },
  { id: "pakistan-students", name: "Pakistan", code: "PK", description: "Meet Pakistani students and share your experiences.", members: "Pakistani student network" },
];

export default function CommunityPage() {
  return (
    <main className="community-page">
      <section className="community-hero">
        <span className="section-label">GLOBAL COMMUNITY</span>
        <h1>Wherever you're <span>from.</span></h1>
        <p>Connect with students from different countries and find communities that feel familiar.</p>
      </section>

      <section className="community-list-section">
        <div className="community-list-heading">
          <div>
            <span className="section-label">FIND YOUR PEOPLE</span>
            <h2>Explore student communities</h2>
          </div>
          <Users size={30} />
        </div>

        <div className="community-grid">
          {communities.map((community) => (
            <Link
              href={`/community/${community.id}`}
              className="community-card"
              key={community.id}
            >
              <div className="community-card-top">
                <span className="community-country-code">{community.code}</span>
                <ArrowRight size={20} />
              </div>
              <h3>{community.name} Students</h3>
              <p>{community.description}</p>
              <div className="community-card-footer">
                <Users size={16} />
                <span>{community.members}</span>
              </div>
              <span className="community-explore">Explore community <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="community-join-banner">
        <div className="community-banner-icon"><MessageCircle size={30} /></div>
        <div>
          <span className="section-label">YOU ARE NOT ALONE</span>
          <h2>Your journey feels easier together.</h2>
          <p>Find people who understand your experiences and share helpful information.</p>
        </div>
        <Globe2 size={45} className="community-banner-globe" />
      </section>
    </main>
  );
}
