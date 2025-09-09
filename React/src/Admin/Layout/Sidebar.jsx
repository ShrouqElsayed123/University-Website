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
              <span>Faculties</span>
              {openFaculties ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {openFaculties && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/admin/faculties/list"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Faculty List
                </Link>
                <Link
                  to="/admin/faculties/add"
                  className="block p-2 rounded hover:bg-gray-100 text-sm"
                >
                  Add Faculty
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
