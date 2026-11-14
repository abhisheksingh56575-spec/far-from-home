
"use client";

import Link from "next/link";
import { useState } from "react";

const documents = [
  {
    slug: "visa",
    title: "Visa Guide",
    description: "Learn about student visa requirements and application process.",
    icon: "🛂",
    category: "Immigration",
  },
  {
    slug: "bank-account",
    title: "Bank Account Guide",
    description: "Learn how to open a bank account abroad.",
    icon: "🏦",
    category: "Finance",
  },
  {
    slug: "accommodation",
    title: "Accommodation Guide",
    description: "Find student housing and rental information.",
    icon: "🏠",
    category: "Living",
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    description: "Understand student health insurance requirements.",
    icon: "🏥",
    category: "Health",
  },
  {
    slug: "part-time-work",
    title: "Part-time Work",
    description: "Learn about student work permissions.",
    icon: "💼",
    category: "Career",
  },
  {
    slug: "university",
    title: "University Documents",
    description: "Explore important academic documents.",
    icon: "🎓",
    category: "Education",
  },
];

export default function DocumentationPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || doc.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main style={{
      padding: "50px 7%",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
        Documentation Hub
      </h1>

      <p style={{ color: "#64748b", marginBottom: "30px" }}>
        Explore important guides for international students.
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "14px",
          border: "1px solid #cbd5e1",
          borderRadius: "10px",
          fontSize: "15px",
          marginBottom: "20px"
        }}
      />

      {/* Category Filter */}
      <div style={{ marginBottom: "30px" }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            fontSize: "15px",
            background: "white"
          }}
        >
          <option value="All">All Categories</option>
          <option value="Immigration">Immigration</option>
          <option value="Finance">Finance</option>
          <option value="Living">Living</option>
          <option value="Health">Health</option>
          <option value="Career">Career</option>
          <option value="Education">Education</option>
        </select>
      </div>

      {/* Document Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "22px"
      }}>

        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <Link
              key={doc.slug}
              href={`/documentation/${doc.slug}`}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                textDecoration: "none",
                color: "#172033"
              }}
            >
              <div style={{ fontSize: "35px" }}>{doc.icon}</div>

              <h2 style={{ margin: "15px 0 10px" }}>
                {doc.title}
              </h2>

              <p style={{ color: "#64748b", lineHeight: "1.6" }}>
                {doc.description}
              </p>

              <span style={{
                display: "inline-block",
                marginTop: "12px",
                color: "#3159bd",
                fontWeight: "bold"
              }}>
                {doc.category}
              </span>

              <p style={{
                color: "#3159bd",
                fontWeight: "bold",
                marginTop: "15px"
              }}>
                Read Guide →
              </p>
            </Link>
          ))
        ) : (
          <p style={{ color: "#64748b" }}>
            No documents found. Try another search.
          </p>
        )}

      </div>

    </main>
  );
}
