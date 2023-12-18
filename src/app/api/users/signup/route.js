import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

connectMongoDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { first_name, last_name, email, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );
    }

    await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    const response = NextResponse.json({
      message: "Signup successful",
      success: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
