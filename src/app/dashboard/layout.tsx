import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";

// this page is only for logged users
const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerAuthSession();
  if (!session) redirect("/");

  return <>{children}</>;
};

export default layout;
