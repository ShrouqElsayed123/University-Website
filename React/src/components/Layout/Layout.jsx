import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

export default function Layout() {
  const { i18n } = useTranslation();
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey(prev => prev + 1);
  }, [i18n.language]);

  return (
    <>
      <div
        key={animateKey}
        className="animate-fade-in transition-opacity duration-1000 bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen"
      >
        <Navbar />
        <Outlet />
        <Footer />

        {/* ✅ زر الرجوع لأعلى */}
        <ScrollToTopButton />
      </div>
    </>
  );
}
