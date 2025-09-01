import React from "react";
import { Link } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
export default function Layout1() {
  return (
    <div className="flex h-screen bg-gray-100">
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

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
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

        {/* Content */}
        {/* <main className="flex-1 p-6 overflow-y-auto">{children}</main> */}
      </div>
    </div>
  );
}
