import Link from "next/link";

const communities = [
  {
    id: "canada-students",
    name: "Indian Students in Canada",
    location: "Canada",
    members: 1240,
    icon: "🇨🇦",
    description:
      "Connect with Indian students studying and living in Canada.",
  },
  {
    id: "uk-students",
    name: "International Students in UK",
    location: "United Kingdom",
    members: 980,
    icon: "🇬🇧",
    description:
      "Meet international students and share your UK experience.",
  },
  {
    id: "australia-students",
    name: "Students in Australia",
    location: "Australia",
    members: 760,
    icon: "🇦🇺",
    description:
      "A friendly community for students living and studying in Australia.",
  },
  {
    id: "usa-students",
    name: "Students in USA",
    location: "United States",
    members: 650,
    icon: "🇺🇸",
    description:
      "Connect with students across universities in the United States.",
  },
];

export default function CommunityPage() {
  return (
    <main className="community-page">

      {/* HERO */}

      <section className="community-hero">

        <span className="section-label">
          STUDENT COMMUNITY
        </span>

        <h1>
          You are never
          <span> alone.</span>
        </h1>

        <p>
          Connect with students who understand what it feels
          like to study and live far from home.
        </p>

      </section>


      {/* COMMUNITIES */}

      <section className="community-section">

        <div className="community-heading">

          <div>
            <span className="section-label">
              FIND YOUR COMMUNITY
            </span>

            <h2>
              Meet students like you
            </h2>

            <p>
              Join a community based on your destination.
            </p>
          </div>

          <span className="community-count">
            {communities.length} Communities
          </span>

        </div>


        <div className="community-grid">

          {communities.map((community) => (

            <Link
              href={`/community/${community.id}`}
              className="community-card"
              key={community.id}
            >

              <div className="community-card-top">

                <div className="community-flag">
                  {community.icon}
                </div>

                <span className="community-members">
                  {community.members} members
                </span>

              </div>

              <h3>
                {community.name}
              </h3>

              <p>
                {community.description}
              </p>

              <span className="community-view">
                View Community →
              </span>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}