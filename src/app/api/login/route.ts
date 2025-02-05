// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    return NextResponse.json({ message: 'Login successful' });
  } else {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }
}
