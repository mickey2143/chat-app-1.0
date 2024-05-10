import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = req.json();
  const username = body.user;
  const user = await prisma.users.findMany({
    where: {
      OR: [{ username }],
    },
  });

  if (user.length > 0) {
    return Response.json({ user: true });
  } else {
    return Response.json({ user: false });
  }
}
