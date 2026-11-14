import Link from "next/link";
import {
  FileText,
  CreditCard,
  Utensils,
  Languages,
  Users,
  ShieldAlert,
  ArrowRight,
  Globe2
} from "lucide-react";

const supportOptions = [
  {
    icon: <FileText size={26} />,
    title: "Documentation",
    description: "Visa, university and important document guidance.",
    href: "/documentation"
  },
  {
    icon: <CreditCard size={26} />,
    title: "Banking & SIM",
    description: "Bank accounts, SIM cards and money-related guidance.",
    href: "/banking"
  },
  {
    icon: <Utensils size={26} />,
    title: "Food & Grocery",
    description: "Find familiar food and useful grocery information.",
    href: "/food"
  },
  {
    icon: <Languages size={26} />,
    title: "Language Help",
    description: "Useful language resources for everyday communication.",
    href: "/language"
  },
  {
    icon: <Users size={26} />,
    title: "Community",
    description: "Connect with students and build your support network.",
    href: "/community"
  },
  {
    icon: <ShieldAlert size={26} />,
    title: "Emergency",
    description: "Important emergency contacts and information.",
    href: "/emergency"
  }
];

export default function Dashboard() {
  return (
    <main className="dashboard-page">

      {/* Welcome */}
      <section className="dashboard-header">

        <div>
          <span className="section-label">
            STUDENT DASHBOARD
          </span>

          <h1>
            Welcome back, Abhishek 👋
          </h1>

          <p>
            Everything you need to feel more comfortable
            and connected while studying abroad.
          </p>
        </div>

        <div className="country-badge">
          <Globe2 size={22} />
          <span>International Student</span>
        </div>

      </section>


      {/* Quick Actions */}
      <section className="dashboard-section">

        <div className="section-heading dashboard-heading">

          <div>
            <span className="section-label">
              QUICK ACTIONS
            </span>

            <h2>
              What do you need help with?
            </h2>
          </div>

        </div>


        <div className="support-grid">

          {supportOptions.map((item) => (

            <Link
              href={item.href}
              className="support-card"
              key={item.title}
            >

              <div className="support-icon">
                {item.icon}
              </div>

              <div className="support-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <ArrowRight
                size={20}
                className="support-arrow"
              />

            </Link>

          ))}

        </div>

      </section>


      {/* Recent Activity */}
      <section className="dashboard-bottom">

        <div className="activity-card">

          <div className="card-header">

            <div>
              <span className="section-label">
                RECENT ACTIVITY
              </span>

              <h2>
                Your recent support
              </h2>
            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon">
              <FileText size={20} />
            </div>

            <div>
              <h3>
                Documentation resources
              </h3>

              <p>
                Explore important student documents.
              </p>
            </div>

            <ArrowRight size={18} />

          </div>


          <div className="activity-item">

            <div className="activity-icon">
              <Users size={20} />
            </div>

            <div>
              <h3>
                Student community
              </h3>

              <p>
                Find students with similar interests.
              </p>
            </div>

            <ArrowRight size={18} />

          </div>

        </div>


        {/* Help Card */}
        <div className="help-card">

          <div className="help-icon">
            <Globe2 size={30} />
          </div>

          <h2>
            New to your destination?
          </h2>

          <p>
            Explore region-specific information about
            living, studying and settling into your new home.
          </p>

          <Link
            href="/explore"
            className="primary-button"
          >
            Explore Resources
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}