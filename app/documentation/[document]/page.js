
import Link from "next/link";
import { notFound } from "next/navigation";

const documentData = {
  visa: {
    title: "Student Visa Guide",
    icon: "🛂",
    description: "Learn about student visa requirements and application procedures.",
    sections: [
      {
        heading: "What is a Student Visa?",
        content: "A student visa allows international students to enter and stay in another country for education."
      },
      {
        heading: "Required Documents",
        content: "Common documents include a valid passport, university admission letter, proof of funds and photographs. Requirements vary by country."
      },
      {
        heading: "Application Process",
        content: "Visit the official immigration website, complete the application, submit the required documents and pay the applicable fee."
      }
    ]
  },

  "bank-account": {
    title: "Bank Account Guide",
    icon: "🏦",
    description: "Learn how to open and manage a bank account abroad.",
    sections: [
      {
        heading: "Why Do You Need a Bank Account?",
        content: "A local bank account helps you receive money, pay rent and manage your daily expenses."
      },
      {
        heading: "Required Documents",
        content: "Banks may ask for your passport, student ID, admission letter and proof of address."
      },
      {
        heading: "How to Open an Account",
        content: "Choose a bank, check its student account options and apply online or visit a branch."
      }
    ]
  },

  accommodation: {
    title: "Accommodation Guide",
    icon: "🏠",
    description: "Find a suitable place to stay while studying abroad.",
    sections: [
      {
        heading: "Types of Accommodation",
        content: "Students can choose university housing, shared apartments, private residences or homestays."
      },
      {
        heading: "Before Booking",
        content: "Check rent, location, deposit, facilities and distance from your university."
      },
      {
        heading: "Safety Tips",
        content: "Verify the property and landlord before sending money. Read the rental agreement carefully."
      }
    ]
  },

  "health-insurance": {
    title: "Health Insurance Guide",
    icon: "🏥",
    description: "Understand health insurance for international students.",
    sections: [
      {
        heading: "Why Is Insurance Important?",
        content: "Health insurance may help cover eligible medical expenses according to your policy."
      },
      {
        heading: "What to Check",
        content: "Check coverage, exclusions, emergency services and claim procedures."
      }
    ]
  },

  "part-time-work": {
    title: "Part-time Work Guide",
    icon: "💼",
    description: "Learn about part-time work opportunities for students.",
    sections: [
      {
        heading: "Work Permissions",
        content: "Your right to work depends on your visa conditions and the rules of your destination country."
      },
      {
        heading: "Finding Jobs",
        content: "Explore university career services and verified job websites."
      }
    ]
  },

  university: {
    title: "University Documents Guide",
    icon: "🎓",
    description: "Learn about important university documents.",
    sections: [
      {
        heading: "Important Documents",
        content: "Keep your admission letter, fee receipts, transcripts and student ID safe."
      },
      {
        heading: "Digital Copies",
        content: "Keep secure digital copies of your important academic documents."
      }
    ]
  }
};

export default async function DocumentPage({ params }) {
  const { document } = await params;

  const doc = documentData[document];

  if (!doc) {
    notFound();
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f8fafc",
      padding: "50px 7%",
      color: "#172033"
    }}>

      <Link
        href="/documentation"
        style={{
          color: "#3159bd",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        ← Back to Documentation
      </Link>

      <section style={{
        textAlign: "center",
        maxWidth: "750px",
        margin: "45px auto"
      }}>
        <div style={{ fontSize: "55px" }}>{doc.icon}</div>

        <h1 style={{ fontSize: "36px", margin: "15px 0" }}>
          {doc.title}
        </h1>

        <p style={{ color: "#64748b", fontSize: "17px" }}>
          {doc.description}
        </p>
      </section>

      <section style={{
        maxWidth: "850px",
        margin: "auto",
        display: "grid",
        gap: "20px"
      }}>
        {doc.sections.map((section, index) => (
          <article
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #e2e8f0"
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>
              {section.heading}
            </h2>

            <p style={{
              color: "#64748b",
              lineHeight: "1.8"
            }}>
              {section.content}
            </p>
          </article>
        ))}
      </section>

      <p style={{
        maxWidth: "850px",
        margin: "25px auto",
        padding: "18px",
        background: "#fff7e6",
        borderRadius: "10px",
        color: "#805b16",
        lineHeight: "1.7"
      }}>
        <strong>Note:</strong> This is general guidance.
        Always check official government and university websites
        for the latest requirements.
      </p>

    </main>
  );
}
