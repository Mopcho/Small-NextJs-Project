import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pageSize = Number(searchParams.get('pageSize')) || 9;
    const page = Number(searchParams.get('page')) || 1;

    let skip;
    if (pageSize) {
      skip = Number((page - 1) * pageSize);
    }

    const blogs = await prisma.blog.findMany({
      where: {},
      skip: skip || 0,
      take: pageSize || 9,
      include: {
        user: true,
      },
    });

    return NextResponse.json({ blogs, page, pageSize });
  } catch (err) {
    console.error(err);
  }
}
