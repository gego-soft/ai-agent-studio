import React from "react";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Admin Portal</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Admin User
        </div>
      </div>
    </header>
  );
}
