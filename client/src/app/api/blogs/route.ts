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
      take: pageSize,
      include: {
        user: true,
      },
    });

    const totalHits = await prisma.blog.count({
      where: {},
    });

    const isLastPage = totalHits <= pageSize * page;

    return NextResponse.json({ blogs, page, pageSize, isLastPage });
  } catch (err) {
    console.error(err);
  }
}
