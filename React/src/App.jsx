import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from './components/Layout/Layout';
import ImageGallery from "./components/HomeComponent/ImageGallery/ImageGallery";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import FacultyLevels from "./components/FaculitiesComponent/FacultyLevels";
import TimelinePage from './pages/TimelinePage/TimelinePage';
import About from './pages/About/About';
import VisionPage from './pages/VisionPage/VisionPage';

import ArchievePage from './pages/ArchievePage/ArchievePage';
import FacultyGoal from './components/FaculitiesComponent/FacultyGoal';
// import OverviewSection from './components/FaculitiesComponent/OverviewSection';
import FacultyPage from './pages/FacultyPage/FacultyPage';
import Elearning from "./components/ElectronicPlatform/Elearning";
import StudentPortal from "./components/ElectronicPlatform/StudentPortal";
import StudentPortalSection from "./components/ElectronicPlatform/StudentPortal";
import Dentistry from "./pages/facultiesPages/Dentistry";
import Medicine from "./pages/facultiesPages/Medicine";
import Engineering from "./pages/facultiesPages/Engineering";
import HealthSciences from "./pages/facultiesPages/HealthSciences";
import Humanities from "./pages/facultiesPages/Humanities";
import VeterinaryMedicine from "./pages/facultiesPages/VeterinaryMedicine";
import PhysicalTherapy from "./pages/facultiesPages/PhysicalTherapy";
import Pharmacy from "./pages/facultiesPages/Pharmacy";
import Nursing from "./pages/facultiesPages/Nursing";
import ArtificialIntelligence from "./pages/facultiesPages/ArtificialIntelligence";
// import Layout1 from "./Admin/Dashboard Component/Layout";
import DashboardLayout from "./Admin/Layout/DashboardLayout";
import { HeroProvider } from "./Admin/Dashboard Component/Home Management component/Hero Section/Hero.Context";
import HeroPage from "./Admin/Dashboard Pages/HeroPage/HeroPage";

function App() {
  const { i18n } = useTranslation();


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // ✨ دي اللي هتحل مشكلتك بنسبة 100%

    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/", element: (
        <Layout />
      ), children: [
        { index: true, element: <Home /> },
        { path: 'imagegallery', element: <ImageGallery /> },

        { path: 'timeline', element: <TimelinePage /> },
        { path: 'about', element: <About /> },
        { path: 'vision', element: <VisionPage /> },
        { path: 'contactus', element: <ContactUsPage /> },

        { path: 'archive', element: <ArchievePage /> },
        { path: 'facultygoal', element: <FacultyGoal /> },
        { path: '/FacultyLevels', element: <FacultyLevels /> },
        // { path: 'overviewsection', element: <OverviewSection /> },
        { path: '/faculties/:slug', element: <FacultyPage /> },
        { path: '/elearning', element: <Elearning /> },
        { path: '/studentportal', element: <StudentPortal /> },
        { path: 'about', element: <About /> },
        { path: 'vision', element: <VisionPage /> },
        { path: 'contactus', element: <ContactUsPage /> },

        { path: 'archive', element: <ArchievePage /> },
        { path: 'facultygoal', element: <FacultyGoal /> },
        { path: '/FacultyLevels', element: <FacultyLevels /> },
        // { path: 'overviewsection', element: <OverviewSection /> },
        { path: 'medicine', element: <Medicine /> },
        { path: 'dentistry', element: <Dentistry /> },
        { path: 'engineering', element: <Engineering /> },
        { path: 'healthsciences', element: <HealthSciences /> },
        { path: 'humanities', element: <Humanities /> },
        { path: 'veterinarymedicine', element: <VeterinaryMedicine /> },
        { path: 'physicaltherapy', element: <PhysicalTherapy /> },
        { path: 'pharmacy', element: <Pharmacy /> },
        { path: 'nursing', element: <Nursing /> },
        { path: 'artificialintelligence', element: <ArtificialIntelligence /> },
        { path: 'studentportalsection', element: <StudentPortalSection /> },

      ]
    },
    {
      path: "/admin",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <HeroPage /> }, // دي هتظهر لما تفتح /admin مباشرة
      ],
    }


  ]);

  return (
    <HeroProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>

    </HeroProvider>


  );
}

export default App;
