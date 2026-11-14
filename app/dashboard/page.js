
import Link from "next/link";
import {
  FileText,
  CreditCard,
  Utensils,
  Languages,
  Users,
  ShieldAlert,
  ArrowRight,
  Globe2,
  Sparkles,
} from "lucide-react";

const supportOptions = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Visa, university and important document guidance.",
    href: "/documentation",
    tag: "Essential",
  },
  {
    icon: CreditCard,
    title: "Banking & SIM",
    description: "Bank accounts, SIM cards and money-related guidance.",
    href: "/banking",
    tag: "Finance",
  },
  {
    icon: Utensils,
    title: "Food & Grocery",
    description: "Find familiar food and useful grocery information.",
    href: "/food",
    tag: "Daily life",
  },
  {
    icon: Languages,
    title: "Language Help",
    description: "Useful language resources for everyday communication.",
    href: "/language",
    tag: "Learning",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with students and build your support network.",
    href: "/community",
    tag: "Connect",
  },
  {
    icon: ShieldAlert,
    title: "Emergency",
    description: "Important emergency contacts and safety information.",
    href: "/emergency",
    tag: "Safety",
  },
];

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div className="dashboard-welcome">
          <span className="section-label">STUDENT DASHBOARD</span>
          <h1>Welcome back, Abhishek 👋</h1>
          <p>
            Everything you need to feel comfortable, confident
            and connected while studying abroad.
          </p>
        </div>

        <div className="country-badge">
          <Globe2 size={23} />
          <span>International Student</span>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading dashboard-heading">
          <div>
            <span className="section-label">QUICK ACTIONS</span>
            <h2>What do you need help with?</h2>
            <p>Explore helpful resources for your journey abroad.</p>
          </div>
          <span className="dashboard-sparkle">
            <Sparkles size={22} />
          </span>
        </div>

        <div className="support-grid">
          {supportOptions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                className="support-card"
                key={item.title}
              >
                <div className="support-card-top">
                  <div className="support-icon">
                    <Icon size={25} />
                  </div>
                  <span className="support-tag">{item.tag}</span>
                </div>

                <div className="support-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="support-card-footer">
                  <span>Explore resources</span>
                  <ArrowRight size={19} className="support-arrow" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="dashboard-bottom">
        <div className="activity-card">
          <div className="card-header">
            <div>
              <span className="section-label">RECENT ACTIVITY</span>
              <h2>Your student resources</h2>
            </div>
          </div>

          <Link href="/documentation" className="activity-item">
            <div className="activity-icon">
              <FileText size={21} />
            </div>
            <div className="activity-text">
              <h3>Documentation resources</h3>
              <p>Explore important student documents.</p>
            </div>
            <ArrowRight size={19} />
          </Link>

          <Link href="/community" className="activity-item">
            <div className="activity-icon">
              <Users size={21} />
            </div>
            <div className="activity-text">
              <h3>Student community</h3>
              <p>Connect with students from around the world.</p>
            </div>
            <ArrowRight size={19} />
          </Link>
        </div>

        <div className="help-card">
          <div className="help-icon">
            <Globe2 size={30} />
          </div>

          <span className="section-label">START YOUR JOURNEY</span>
          <h2>New to your destination?</h2>
          <p>
            Discover country-specific information about living,
            studying and settling into your new home.
          </p>

          <Link href="/explore" className="primary-button">
            Explore Resources
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
