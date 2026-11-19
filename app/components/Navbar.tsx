import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-900 px-4 py-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-2">
        <Image
          src="/stanbic-bank-logo-white.png"
          alt="Stanbic Bank"
          width={198}
          height={54}
          className="h-7 w-auto object-contain"
        />
        <span className="hidden text-sm font-semibold text-blue-100 sm:inline">
          Integrations Portal
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/profile"
          className="rounded-lg border border-white bg-transparent px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-900 sm:px-4 sm:py-2 sm:text-sm"
        >
          Profile
        </Link>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
