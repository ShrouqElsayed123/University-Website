import Header from "../../components/FaculitiesComponent/Header";
import FacultyOverview from "../../components/FaculitiesComponent/FacultyOverview";
import FacultyGallery from "../../components/FaculitiesComponent/FacultyGallery/FacultyGallery";
import FacultyDoctors from "../../components/FaculitiesComponent/FacultyGallery/FacultyDoctors";
import FacultyLevels from "../../components/FaculitiesComponent/FacultyLevels";
import { useTranslation } from "react-i18next";
import VideoSection from "../../components/FaculitiesComponent/VideoSection";
export default function Medicine() {
      const { t } = useTranslation();
  
return (
        <div className="space-y-8 p-4">

            <Header
                links={[
                    { to: "/", label: t('home') },
                    { to: "/", label: "Faculty of Medicine" },
                ]}
            />
            {/* <FacultyGoal /> */}

            <FacultyOverview />
            <FacultyGallery />
            <FacultyDoctors />
            <FacultyLevels />
            <VideoSection />
        </div>
    );
}
