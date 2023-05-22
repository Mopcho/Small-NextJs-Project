import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };

    const hashedPass = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPass,
      },
    });

    return NextResponse.json({
      name: user.name,
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
