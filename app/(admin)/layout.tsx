import { RequireAdmin } from "@/lib/admin";

export default async function AdminLayout({ children }: LayoutProps<"/">) {
  await RequireAdmin();
  return children;
}
