import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";


import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import logo from "../../assets/images/logo.png";
import ukFlag from "../../assets/images/usa.svg";
import saFlag from "../../assets/images/egypt.svg";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  const { darkMode, toggleTheme } = useTheme();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // جلب بيانات الـ Navbar من Strapi
  useEffect(() => {
    async function fetchNavbar() {
      try {
        const res = await axios.get(`http://localhost:1337/api/navbar-lists1?locale=${currentLang}`);
        const items = res.data.data[0]?.navbarlist || [];
        setNavItems(items);
      } catch (error) {
        console.error("خطأ أثناء تحميل قائمة التنقل:", error);
      }
    }

    fetchNavbar();
  }, [currentLang]);

  // إغلاق القوائم عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.2, ease: "easeInOut" },
      pointerEvents: "none"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
      pointerEvents: "auto"
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.25, ease: "easeIn" },
      pointerEvents: "none"
    }
  };


  return (
    <div className="w-full border-b">
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-20 h-w-20 object-contain" />
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-6 mt-4 md:mt-0 text-lg font-medium">
              {navItems.map((item, index) => {
                if (item.type === "link") {
                  return (
                    <li key={index}>
                      <NavLink
                        to={item.path}
                        className={function ({ isActive }) { return isActive ? "text-mainColor block py-2 px-3  font-bold md:p-0" : "block py-2 px-3 md:p-0"; }}


                      >
                        {t(item.title)}
                      </NavLink>
                    </li>
                  );
                }

                if (item.type === "dropdown") {
                  return (
                    <li key={index} className="relative" ref={openDropdown === item.title ? dropdownRef : null}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                        className="flex items-center justify-between gap-1 py-2 px-3 text-gray-700 hover:text-mainColor dark:text-white md:p-0 w-full"
                      >
                        {t(item.title)}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 7l4.5 4.5L14.5 7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.title && (
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            transition={{ duration: 0.3 }}
                            className={`mt-2 bg-white border rounded shadow-md z-50 ${isMobile ? "pl-4 py-2 space-y-1" : "absolute top-full left-0 w-56"
                              }`}
                          >
                            {item.submenu?.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavLink
                                  to={subItem.path}
                                  className={({ isActive }) =>
                                    isActive
                                      ? "block px-3 py-2 hover:bg-gray-100-100 rounded text-mainColor"
                                      : "block px-3 py-2 hover:bg-gray-100-100 rounded"
                                  }
                                  onClick={() => {
                                    setIsOpen(false); // قفل المينيو في الموبايل
                                    setOpenDropdown(null); // قفل الـ dropdown نفسه
                                  }}
                                >
                                  {t(subItem.title)}
                                </NavLink>

                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                if (item.type === "button") {
                  return (
                    <li key={index}>
                      <div className="btn-filled2">{t(item.title)}</div>
                    </li>
                  );
                }

                return null;
              })}

              {/* زر تغيير اللغة */}
              <li>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-24 h-11 px-2 rounded-full bg-gray-100 shadow-inner hover:shadow-lg transition"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto" />
                  ) : currentLang === "ar" ? (
                    <>
                      <img src={saFlag} alt="AR" className="w-9 h-w-9 rounded-full" />
                      <span className="text-sm font-semibold">AR</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-semibold">EN</span>
                      <img src={ukFlag} alt="EN" className="w-9 h-w-9 rounded-full" />
                    </>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  {darkMode ? "☀️" : "🌙"}
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
