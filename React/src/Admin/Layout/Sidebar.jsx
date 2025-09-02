import React from 'react'
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <>
     {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-4 text-2xl font-bold border-b">University Admin</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/admin/faculties"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Faculties
          </Link>
          <Link
            to="/admin/departments"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Departments
          </Link>
          <Link
            to="/admin/news"
            className="block p-2 rounded hover:bg-gray-200"
          >
            News
          </Link>
        </nav>
        <button className="flex items-center gap-2 p-4 border-t hover:bg-gray-200">
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  )
}
