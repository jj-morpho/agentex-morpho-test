"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/earn", label: "Earn" },
    { href: "/borrow", label: "Borrow" },
  ];

  return (
    <nav className="border-b border-[var(--morpho-border)] bg-[var(--morpho-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--morpho-blue)] flex items-center justify-center font-bold text-sm">
              M
            </div>
            <span className="text-lg font-semibold">Morpho</span>
          </Link>
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--morpho-blue)]/10 text-[var(--morpho-blue)]"
                    : "text-[var(--morpho-text-secondary)] hover:text-white hover:bg-[var(--morpho-surface-hover)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <button className="px-4 py-2 bg-[var(--morpho-blue)] hover:bg-[var(--morpho-blue-light)] rounded-lg text-sm font-medium transition-colors">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
