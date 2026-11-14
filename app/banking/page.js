import Link from "next/link";
import {
  CreditCard,
  Building2,
  Send,
  ShieldCheck,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const bankingOptions = [
  {
    icon: <Building2 size={26} />,
    title: "Open a Bank Account",
    description:
      "Understand the basic steps and documents commonly needed to open a local student bank account.",
  },
  {
    icon: <CreditCard size={26} />,
    title: "Student Banking",
    description:
      "Learn what to check when choosing a student-friendly bank account.",
  },
  {
    icon: <Send size={26} />,
    title: "International Transfers",
    description:
      "Understand exchange rates, transfer fees and safe money transfer practices.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Banking Safety",
    description:
      "Learn how to protect your account, cards and online banking information.",
  },
];

const checklist = [
  "Keep your passport and student documents ready",
  "Compare student account options",
  "Check account and ATM fees",
  "Understand international transfer charges",
  "Enable banking security notifications",
];

export default function BankingPage() {
  return (
    <main className="banking-page">

      {/* HERO */}

      <section className="banking-hero">

        <div>
          <span className="section-label">
            BANKING & FINANCE
          </span>

          <h1>
            Manage your money
            <span> with confidence.</span>
          </h1>

          <p>
            Helpful banking information for international students,
            from opening an account to making international transfers.
          </p>
        </div>

        <div className="banking-hero-icon">
          <CreditCard size={80} />
        </div>

      </section>


      {/* OPTIONS */}

      <section className="banking-section">

        <div className="section-heading">

          <span className="section-label">
            BANKING RESOURCES
          </span>

          <h2>
            Everything you need to know
          </h2>

          <p>
            Explore the most important banking topics for students.
          </p>

        </div>


        <div className="banking-grid">

          {bankingOptions.map((item) => (

            <div
              className="banking-card"
              key={item.title}
            >

              <div className="banking-icon">
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


      {/* CHECKLIST */}

      <section className="banking-checklist">

        <div>

          <span className="section-label">
            GETTING STARTED
          </span>

          <h2>
            Before opening an account
          </h2>

          <p>
            Keep these things in mind when setting up your
            banking services abroad.
          </p>

        </div>


        <div className="banking-list">

          {checklist.map((item) => (

            <div key={item}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>

          ))}

        </div>

      </section>


      {/* IMPORTANT NOTE */}

      <section className="banking-note">

        <ShieldCheck size={25} />

        <div>
          <h3>
            Banking Safety
          </h3>

          <p>
            Never share your PIN, password, OTP or banking
            credentials with anyone. Always use your bank's
            official website or application for financial activity.
          </p>
        </div>

      </section>


      {/* NAVIGATION */}

      <div className="banking-navigation">

        <Link href="/dashboard">
          ← Back to Dashboard
        </Link>

        <Link href="/documentation">
          Explore Documentation
          <ArrowRight size={17} />
        </Link>

      </div>

    </main>
  );
}