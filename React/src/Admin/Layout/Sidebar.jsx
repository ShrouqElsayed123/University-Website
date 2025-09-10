import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [openFaculties, setOpenFaculties] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-4 text-2xl font-bold border-b">University Admin</div>

        <nav className="flex-1 p-4 space-y-2">
          {/* Faculties Dropdown */}
          <div>
            <button
              onClick={() => setOpenFaculties(!openFaculties)}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-200"
            >
              <span>Home Management</span>
              {openFaculties ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {openFaculties && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="hero"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Hero Section
                </Link>

                <Link
                  to="about"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  About Section
                </Link>
                <Link
                  to="stats"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Statistics Section
                </Link>
                <Link
                  to="video"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Video section
                </Link>
                <Link
                  to="/admin/faculties/add"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  News Section
                </Link>
                <Link
                  to="/admin/faculties/add"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  University Faculties
                </Link>
                <Link
                  to="faqs"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  FAQs Section
                </Link>
                <Link
                  to="feedback"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Feedback Section
                </Link>
                <Link
                  to="/admin/faculties/add"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Contactus Section
                </Link>
              </div>
            )}
          </div>

          {/* Departments */}
          <Link
            to="/admin/departments"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Departments
          </Link>

          {/* News */}
          <Link
            to="/admin/news"
            className="block p-2 rounded hover:bg-gray-200"
          >
            News
          </Link>
        </nav>

        {/* Logout */}
        <button className="flex items-center gap-2 p-4 border-t hover:bg-gray-200">
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}
