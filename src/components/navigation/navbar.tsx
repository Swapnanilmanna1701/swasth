import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import Icons from "../global/icons";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { buttonVariants } from "../ui/button";
import UserAccount from "../user-account";
import Image from "next/image";

interface Props {
  user: User | null;
}

const Navbar = ({ user }: Props) => {
  return (
    <header className="sticky top-0 inset-x-0 w-full h-18 border-b border-border/40 bg-background/50 backdrop-blur-md z-50">
      <MaxWidthWrapper>
        <div className="flex justify-between w-full h-full">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center font-semibold gap-1 text-lg"
            >
              <Image
                src="/icons/logo.png"
                width={80}
                height={80}
                alt="Swasth Logo"
                className="object-contain w-auto
                 h-22 transition-all duration-700 ease-out dark:hidden"
              />
              Swasth
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ size: "sm" })}
                >
                  Dashboard
                </Link>
                <UserAccount />
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className={buttonVariants({ size: "sm" })}
                >
                  Start for free
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
