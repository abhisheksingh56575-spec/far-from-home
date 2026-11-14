"use server";

import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const country = formData.get("country")?.toString().trim();
  const university = formData.get("university")?.toString().trim();

  if (!name || !email || !country) {
    throw new Error("Please fill in all required fields.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  console.log("Profile submitted:", {
    name,
    email,
    country,
    university,
  });

  redirect("/profile?success=1");
}