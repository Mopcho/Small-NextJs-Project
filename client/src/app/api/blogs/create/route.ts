import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await prisma.blog.create({
      data: body,
    });
    return NextResponse.json({ response });
  } catch (err) {
    console.error(err);
  }
}
