import { useTranslation } from "react-i18next";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import AboutSection from "../../components/AboutComponent/AboutUniversity/AboutSection";
import HomeFaculties from "../../components/HomeComponent/HomeFaculties/HomeFaculties";
import Building from "../../components/AboutComponent/AboutUniversity/Building";
import UniversityProgram from "../../components/AboutComponent/AboutUniversity/UniversityProgram";

export default function About() {
  const { t } = useTranslation();

  return (
    <>

      <PagesHeader
        links={[
          { to: "/", label: t('home') },
          { to: "/timeline", label: t('about') },
        ]}
      />
      <AboutSection />
      <Building />
      <HomeFaculties />
      <UniversityProgram />


    </>
  );
}
