
"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Globe,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";

export default function ProfilePage() {
  async function handleProfileSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const profileData = {
      name: formData.get("name"),
      email: formData.get("email"),
      country: formData.get("country"),
      university: formData.get("university"),
    };

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      const responseText = await response.text();

      console.log("API Status:", response.status);
      console.log("API Response:", responseText);

      if (!responseText) {
        alert("Empty API response. Check terminal.");
        return;
      }

      const data = JSON.parse(responseText);

      if (!response.ok) {
        alert(data.message || "Profile could not be saved.");
        return;
      }

      alert(data.message || "Profile saved successfully!");
      form.reset();
    } catch (error) {
      console.error("Profile API Error:", error);
      alert("Something went wrong. Check terminal.");
    }
  }

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div>
          <span className="section-label">MY PROFILE</span>
          <h1>
            Your student <span>profile.</span>
          </h1>
          <p>
            Keep your personal and study information updated so
            Far From Home can provide a more personalized experience.
          </p>
        </div>

        <div className="profile-avatar">
          <User size={70} />
        </div>
      </section>

      <section className="profile-container">
        <div className="profile-card">
          <div className="profile-card-header">
            <div>
              <span className="section-label">
                PERSONAL INFORMATION
              </span>
              <h2>Update your details</h2>
            </div>
          </div>

          <form
            onSubmit={handleProfileSubmit}
            className="profile-form"
          >
            <div className="form-group">
              <label htmlFor="name">
                <User size={17} /> Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <Mail size={17} /> Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">
                <Globe size={17} /> Destination Country
              </label>
              <select id="country" name="country" required>
                <option value="">Select your country</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="United States">United States</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="university">
                <GraduationCap size={17} /> University / College
              </label>
              <input
                id="university"
                name="university"
                type="text"
                placeholder="Enter your university or college"
              />
            </div>

            <button type="submit" className="profile-button">
              Save Profile
            </button>
          </form>
        </div>

        <aside className="profile-side-card">
          <div className="profile-side-icon">
            <Globe size={25} />
          </div>

          <h3>Why keep your profile updated?</h3>

          <p>
            Your profile helps you keep important student
            information organized in one place.
          </p>

          <ul>
            <li>Personal information</li>
            <li>Study destination</li>
            <li>University details</li>
            <li>Student support resources</li>
          </ul>
        </aside>
      </section>

      <div className="profile-navigation">
        <Link href="/dashboard">
          <ArrowLeft size={17} />
          Back to Dashboard
        </Link>

        <Link href="/emergency">Emergency Support</Link>
      </div>
    </main>
  );
}
