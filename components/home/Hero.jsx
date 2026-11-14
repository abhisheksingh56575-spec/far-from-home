import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Built for international students
          </div>

          <h1>
            Your life abroad,
            <span> made a little easier.</span>
          </h1>

          <p>
            Far From Home brings documentation guidance, banking,
            food, language support and student communities together
            in one simple platform.
          </p>

          <div className="hero-buttons">

            <Link href="/dashboard" className="primary-button">
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link href="/explore" className="secondary-button">
              Explore Resources
            </Link>

          </div>

          <div className="hero-trust">

            <div>
              <ShieldCheck size={18} />
              Trusted resources
            </div>

            <div>
              <Users size={18} />
              Student community
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="globe-card">

            <div className="globe-icon">
              <Globe2 size={100} />
            </div>

            <h3>Wherever you go</h3>

            <p>
              Find the information and support you need
              to feel more at home.
            </p>

            <div className="country-mini-cards">

              <div>🇮🇳 India</div>
              <div>🇨🇦 Canada</div>
              <div>🇬🇧 UK</div>
              <div>🇦🇺 Australia</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}