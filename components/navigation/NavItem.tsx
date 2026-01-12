"use client";

import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
  isActive: boolean;
}

export function NavItem({ href, label, icon, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? "bg-blue-50 text-blue-700 border border-blue-200"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
