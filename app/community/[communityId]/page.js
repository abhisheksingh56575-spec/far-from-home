import Link from "next/link";
import { notFound } from "next/navigation";

const communityData = {
  "canada-students": {
    name: "Indian Students in Canada",
    location: "Canada",
    flag: "🇨🇦",
    members: 1240,
    description:
      "A supportive community for Indian students studying and living in Canada.",
  },

  "uk-students": {
    name: "International Students in UK",
    location: "United Kingdom",
    flag: "🇬🇧",
    members: 980,
    description:
      "Connect with students from different countries studying in the UK.",
  },

  "australia-students": {
    name: "Students in Australia",
    location: "Australia",
    flag: "🇦🇺",
    members: 760,
    description:
      "Share experiences and connect with students across Australia.",
  },

  "usa-students": {
    name: "Students in USA",
    location: "United States",
    flag: "🇺🇸",
    members: 650,
    description:
      "A community for students studying at universities across the USA.",
  },
};

export default async function CommunityDetailPage({ params }) {

  const { communityId } = await params;

  const community = communityData[communityId];

  if (!community) {
    notFound();
  }

  return (
    <main className="community-detail-page">

      <Link
        href="/community"
        className="community-back"
      >
        ← Back to Communities
      </Link>


      {/* COMMUNITY HERO */}

      <section className="community-detail-hero">

        <div className="community-detail-flag">
          {community.flag}
        </div>

        <div>

          <span className="section-label">
            STUDENT COMMUNITY
          </span>

          <h1>
            {community.name}
          </h1>

          <p>
            {community.description}
          </p>

        </div>

      </section>


      {/* STATS */}

      <section className="community-stats">

        <div>
          <strong>
            {community.members}
          </strong>

          <span>
            Members
          </span>
        </div>

        <div>
          <strong>
            {community.location}
          </strong>

          <span>
            Destination
          </span>
        </div>

        <div>
          <strong>
            Active
          </strong>

          <span>
            Community
          </span>
        </div>

      </section>


      {/* ABOUT */}

      <section className="community-detail-content">

        <div>

          <h2>
            About this community
          </h2>

          <p>
            This community is a place where international
            students can connect, ask questions, share
            experiences and support each other.
          </p>

          <p>
            You can discuss accommodation, university life,
            food, banking, transportation and everyday life.
          </p>

        </div>


        <div className="community-join-card">

          <h2>
            Join the community
          </h2>

          <p>
            Connect with students and make your experience
            abroad easier.
          </p>

          <button>
            Join Community
          </button>

        </div>

      </section>

    </main>
  );
}