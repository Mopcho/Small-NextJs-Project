import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';
import { validateBlogCreateData } from '@/lib/serverValidations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const errors = await validateBlogCreateData(body);

    console.error(errors);
    console.error(body);

    if (errors.length > 0) {
      return NextResponse.json(
        {
          errors,
        },
        { status: 403 }
      );
    }

    const response = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        user: {
          connect: {
            id: body.userId,
          },
        },
      },
    });
    return NextResponse.json({ response });
  } catch (err) {
    console.error(err);
  }
}
