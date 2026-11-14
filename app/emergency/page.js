import Link from "next/link";
import {
  ShieldAlert,
  Phone,
  MapPin,
  HeartPulse,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const emergencyServices = [
  {
    icon: <Phone size={25} />,
    title: "Emergency Services",
    number: "112",
    description:
      "Use the appropriate emergency number in your destination country when you need immediate help.",
  },
  {
    icon: <HeartPulse size={25} />,
    title: "Medical Emergency",
    number: "Emergency Medical Help",
    description:
      "Contact local emergency medical services or go to the nearest emergency department.",
  },
  {
    icon: <ShieldAlert size={25} />,
    title: "Police",
    number: "Local Police",
    description:
      "Contact the local police service if you are in immediate danger or need urgent assistance.",
  },
  {
    icon: <MapPin size={25} />,
    title: "Embassy / Consulate",
    number: "Your Embassy",
    description:
      "Your country's embassy or consulate can provide consular assistance in certain situations.",
  },
];

const safetyTips = [
  "Keep your emergency contacts saved on your phone",
  "Know the emergency number for your destination",
  "Keep your passport and important documents secure",
  "Share your location with someone you trust when necessary",
  "Follow instructions from local emergency authorities",
];

export default function EmergencyPage() {
  return (
    <main className="emergency-page">

      {/* HERO */}

      <section className="emergency-hero">

        <div>

          <span className="section-label">
            SAFETY & EMERGENCY
          </span>

          <h1>
            Help when
            <span> you need it most.</span>
          </h1>

          <p>
            Important safety information and emergency resources
            for international students living away from home.
          </p>

        </div>

        <div className="emergency-hero-icon">
          <ShieldAlert size={78} />
        </div>

      </section>


      {/* EMERGENCY SERVICES */}

      <section className="emergency-section">

        <div className="section-heading">

          <span className="section-label">
            IMPORTANT CONTACTS
          </span>

          <h2>
            Know where to get help
          </h2>

          <p>
            Keep these resources available in case you need
            urgent assistance.
          </p>

        </div>


        <div className="emergency-grid">

          {emergencyServices.map((service) => (

            <div
              className="emergency-card"
              key={service.title}
            >

              <div className="emergency-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <strong>
                {service.number}
              </strong>

              <p>
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* SAFETY CHECKLIST */}

      <section className="emergency-checklist">

        <div>

          <span className="section-label">
            STAY PREPARED
          </span>

          <h2>
            Emergency preparedness
          </h2>

          <p>
            A few simple preparations can make it easier to
            respond calmly during an emergency.
          </p>

        </div>


        <div className="emergency-list">

          {safetyTips.map((tip) => (

            <div key={tip}>
              <CheckCircle size={20} />
              <span>{tip}</span>
            </div>

          ))}

        </div>

      </section>


      {/* IMPORTANT WARNING */}

      <section className="emergency-warning">

        <ShieldAlert size={28} />

        <div>

          <h2>
            If you are in immediate danger
          </h2>

          <p>
            Contact your local emergency services immediately.
            Do not rely only on information shown on this website.
            Emergency numbers and procedures vary by country.
          </p>

        </div>

      </section>


      {/* NAVIGATION */}

      <div className="emergency-navigation">

        <Link href="/community">
          ← Student Community
        </Link>

        <Link href="/profile">
          Go to Profile
          <ArrowRight size={17} />
        </Link>

      </div>

    </main>
  );
}