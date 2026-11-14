import Link from "next/link";
import {
  Languages,
  MessageCircle,
  BookOpen,
  Mic,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const languageOptions = [
  {
    icon: <BookOpen size={26} />,
    title: "Learn Everyday Words",
    description:
      "Build your vocabulary with useful words and phrases for daily life."
  },
  {
    icon: <MessageCircle size={26} />,
    title: "Everyday Conversations",
    description:
      "Learn simple expressions that can help you communicate confidently."
  },
  {
    icon: <Mic size={26} />,
    title: "Improve Speaking",
    description:
      "Practice pronunciation and become more comfortable speaking with others."
  },
  {
    icon: <Languages size={26} />,
    title: "Translation Support",
    description:
      "Use translation resources when you need help understanding unfamiliar words."
  }
];

const tips = [
  "Learn a few local phrases every day",
  "Practice speaking with other students",
  "Listen to local conversations",
  "Keep a translation app available",
  "Do not be afraid of making mistakes"
];

export default function LanguagePage() {
  return (
    <main className="language-page">

      {/* HERO */}

      <section className="language-hero">

        <div>

          <span className="section-label">
            LANGUAGE SUPPORT
          </span>

          <h1>
            Find your voice
            <span> in a new place.</span>
          </h1>

          <p>
            Helpful language resources to make everyday
            conversations easier while living and studying abroad.
          </p>

        </div>

        <div className="language-hero-icon">
          <Languages size={75} />
        </div>

      </section>


      {/* RESOURCES */}

      <section className="language-section">

        <div className="section-heading">

          <span className="section-label">
            LANGUAGE RESOURCES
          </span>

          <h2>
            Build your confidence
          </h2>

          <p>
            Start with simple tools and practical communication tips.
          </p>

        </div>


        <div className="language-grid">

          {languageOptions.map((item) => (

            <div
              className="language-card"
              key={item.title}
            >

              <div className="language-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* TIPS */}

      <section className="language-tips">

        <div>

          <span className="section-label">
            DAILY PRACTICE
          </span>

          <h2>
            Small steps every day
          </h2>

          <p>
            You do not need to become fluent overnight.
            Consistent practice can make communication easier.
          </p>

        </div>


        <div className="language-checklist">

          {tips.map((tip) => (

            <div key={tip}>
              <CheckCircle size={20} />
              <span>{tip}</span>
            </div>

          ))}

        </div>

      </section>


      {/* CONVERSATION CARD */}

      <section className="language-conversation">

        <div className="conversation-icon">
          <Mic size={28} />
        </div>

        <div>

          <h2>
            Practice makes progress
          </h2>

          <p>
            Try speaking with classmates, neighbours and
            other students. Every conversation is an opportunity
            to improve.
          </p>

        </div>

      </section>


      {/* NAVIGATION */}

      <div className="language-navigation">

        <Link href="/food">
          ← Food & Grocery
        </Link>

        <Link href="/community">
          Student Community
          <ArrowRight size={17} />
        </Link>

      </div>

    </main>
  );
}