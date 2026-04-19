"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-16 flex justify-between items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <Link
        href="/"
        className="font-cormorant text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Theo Selenskiy
      </Link>

      <div className="flex items-center gap-6">
        <NavLink href="/" active={pathname === "/"}>
          Home
        </NavLink>
        <NavLink href="/cv" active={pathname === "/cv"}>
          CV
        </NavLink>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`relative text-sm tracking-wide transition-colors duration-200 group ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
