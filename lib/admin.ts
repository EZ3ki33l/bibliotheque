import { headers } from "next/headers";
import { auth } from "./auth";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

export async function getAdminForUser(userId: string | undefined) {
  if (!userId) return null;

  return prisma.admin.findUnique({
    where: { userId },
  });
}

export async function RequireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const admin = await getAdminForUser(session.user.id);

  if (!admin) {
    redirect("/");
  }

  return { user: session.user, admin };
}
