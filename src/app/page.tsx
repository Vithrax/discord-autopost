import { getServerAuthSession } from "@/server/auth";
import LoginButton from "@/components/login-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-20">
      <h1 className="max-w-5xl text-center text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Scheduling posts on Discord the right way.
      </h1>
      <p className="text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Let us help you plan your messages ahead.
        <br className="sm:hidden" /> Just pick a time
        <br /> We will handle the rest.
      </p>
      <div className="flex items-center justify-between">
        {session ? (
          <Link href="/dashboard" className={buttonVariants({ size: "lg" })}>
            Go to app
          </Link>
        ) : (
          <LoginButton session={session} />
        )}
      </div>
    </div>
  );
}
