import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const id = params.id;

    const blog = await prisma.blog.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
  }
}
