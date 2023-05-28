import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function validateBlogCreateData(
  blogData: Prisma.BlogUncheckedCreateInput
): Promise<string[]> {
  const { title, content, userId } = blogData;
  const errors: string[] = [];

  if (!title || title.trim().length < 10) {
    errors.push('Title must be at least 10 characters long.');
  }

  if (!content || content.trim().length < 80) {
    errors.push('Content must be at least 80 characters long.');
  }

  if (!userId || typeof userId !== 'string' || userId.trim() === '') {
    errors.push('Invalid user ID.');
  } else {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      errors.push('User does not exist.');
    }
  }

  return errors;
}
