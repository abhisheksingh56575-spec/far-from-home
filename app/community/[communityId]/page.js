
import Link from "next/link";
import { ArrowLeft, Users, MessageCircle, Heart, Globe, ShieldCheck } from "lucide-react";

const communityData = {
  india: {
    name: "India", flag: "🇮🇳",
    intro: "A welcoming space for Indian students studying around the world.",
    topics: ["University and admission experiences", "Food and cultural traditions", "Accommodation and living tips", "Making friends and networking"],
    tips: ["Share useful university experiences.", "Help new students settle into their destination.", "Respect different opinions and backgrounds."]
  },
  nepal: {
    name: "Nepal", flag: "🇳🇵",
    intro: "Connect with Nepali students and share your experiences abroad.",
    topics: ["Student life abroad", "Nepali food and culture", "Study and accommodation tips", "Friendship and networking"],
    tips: ["Welcome new students.", "Share helpful local information.", "Keep discussions friendly and respectful."]
  },
  bangladesh: {
    name: "Bangladesh", flag: "🇧🇩",
    intro: "Find a familiar connection with Bangladeshi students around the world.",
    topics: ["University life and study advice", "Food and cultural connections", "Housing and budgeting", "Student friendships"],
    tips: ["Share your learning experiences.", "Support students preparing to travel.", "Respect every community member."]
  },
  nigeria: {
    name: "Nigeria", flag: "🇳🇬",
    intro: "A place for Nigerian students to connect, support and learn from each other.",
    topics: ["Study abroad experiences", "Nigerian food and traditions", "Accommodation and finances", "Career and networking"],
    tips: ["Share reliable student resources.", "Encourage students who are new abroad.", "Keep conversations welcoming."]
  },
  china: {
    name: "China", flag: "🇨🇳",
    intro: "Connect with Chinese students and exchange experiences from student life abroad.",
    topics: ["Education and university experiences", "Language and cultural exchange", "Food and accommodation", "Friendship and networking"],
    tips: ["Share useful cultural advice.", "Help students adjust to a new place.", "Respect different perspectives."]
  },
  pakistan: {
    name: "Pakistan", flag: "🇵🇰",
    intro: "Meet Pakistani students and build connections wherever your studies take you.",
    topics: ["University and study guidance", "Food and cultural traditions", "Housing and daily life", "Friendship and career networking"],
    tips: ["Share your student journey.", "Support new international students.", "Keep the community respectful."]
  }
};

export default async function CommunityDetailPage({ params }) {
  const { communityId } = await params;
  const slug = String(communityId).toLowerCase();
  const community = communityData[slug];

  if (!community) {
    return (
      <main className="ffh-directory">
        <div className="ffh-country-empty">
          <Users size={40} />
          <h1>Community not found</h1>
          <p>Please choose one of our available student communities.</p>
          <Link href="/community" className="ffh-directory-button">Back to Community</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="ffh-directory">
      <div className="ffh-detail-container">
        <Link href="/community" className="ffh-detail-back">
          <ArrowLeft size={17} /> All Communities
        </Link>

        <section className="ffh-detail-hero">
          <div className="ffh-detail-flag">{community.flag}</div>
          <span className="ffh-directory-eyebrow"><Globe size={15} /> STUDENT COMMUNITY</span>
          <h1>{community.name} Students</h1>
          <p>{community.intro}</p>
        </section>

        <section className="ffh-detail-content">
          <div className="ffh-detail-panel">
            <div className="ffh-detail-panel-icon"><MessageCircle /></div>
            <h2>What you can explore</h2>
            <p>Connect with students and exchange helpful experiences about:</p>
            <ul>
              {community.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </div>

          <div className="ffh-detail-panel ffh-detail-welcome">
            <div className="ffh-detail-panel-icon"><Heart /></div>
            <h2>A community that feels familiar</h2>
            <p>Moving to a new country can feel challenging. Connecting with students who share familiar experiences can help you feel more supported.</p>
            <div className="ffh-detail-note">
              <ShieldCheck size={20} />
              <span>Be kind, protect personal information and verify important advice through official sources.</span>
            </div>
          </div>
        </section>

        <section className="ffh-detail-tips">
          <Users size={25} />
          <div>
            <h2>Community guidelines</h2>
            <ul>
              {community.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>

        <div className="ffh-detail-bottom">
          <Link href="/community" className="ffh-directory-button">
            <ArrowLeft size={16} /> Explore other communities
          </Link>
        </div>
      </div>
    </main>
  );
}
