
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Student from "@/models/Student";

export async function GET() {
  try {
    await connectDB();

    const students = await Student.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      students,
    });
  } catch (error) {
    console.error("GET Profile Error:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, country, university } = body;

    if (!name || !email || !country) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and country are required",
        },
        { status: 400 }
      );
    }

    const student = await Student.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      country,
      university: university || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Student profile saved successfully!",
        student,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Profile Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.code === 11000
          ? "This email is already registered"
          : "Unable to save profile: " + error.message,
      },
      { status: error.code === 11000 ? 409 : 500 }
    );
  }
}
