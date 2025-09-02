import React from 'react'
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
    <header className="flex items-center justify-between bg-white shadow p-4">
          <div className="flex items-center gap-2">
            <button className="md:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Admin</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>
    </>
  )
}
