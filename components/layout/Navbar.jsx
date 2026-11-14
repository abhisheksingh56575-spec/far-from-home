"use client";

import Link from "next/link";
import { Globe } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link href="/" className="logo">
          <Globe size={26} />
          <span>Far From Home</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/community">Community</Link>
          <Link href="/emergency">Emergency</Link>
        </div>

        <Link href="/dashboard" className="nav-button">
          Get Started
        </Link>

      </div>
    </nav>
  );
}