"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/admin/ai-agent",
    icon: "📊",
  },
  {
    label: "Task Library",
    href: "/admin/ai-agent/tasks",
    icon: "📚",
  },
  {
    label: "Templates",
    href: "/admin/ai-agent/templates",
    icon: "📄",
  },
  {
    label: "Testing Sandbox",
    href: "/admin/ai-agent/sandbox",
    icon: "🧪",
  },
  {
    label: "Audit & Usage",
    href: "/admin/ai-agent/logs",
    icon: "📋",
  },
  {
    label: "Settings",
    href: "/admin/ai-agent/settings",
    icon: "⚙️",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">AI Agent Studio</h1>
        <p className="text-sm text-gray-500 mt-1">Clinical Documentation</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavItem
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={pathname === item.href || (item.href !== "/admin/ai-agent" && pathname.startsWith(item.href))}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
