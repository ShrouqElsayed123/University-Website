import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import FacultyGoal from "../../components/FaculitiesComponent/FacultyGoal";
import OverviewSection from "../../components/FaculitiesComponent/OverviewSection";
import { useTranslation } from "react-i18next";
import FacultyVision from "../../components/FaculitiesComponent/FacultyOverview";
import Header from "../../components/FaculitiesComponent/Header";
import FacultyOverview from "../../components/FaculitiesComponent/FacultyOverview";
import FacultyGallery from "../../components/FaculitiesComponent/FacultyGallery/FacultyGallery";
import FacultyDoctors from "../../components/FaculitiesComponent/FacultyGallery/FacultyDoctors";
import FacultyLevels from "../../components/FaculitiesComponent/FacultyLevels";

export default function FacultyPage() {
    const { slug } = useParams(); // ناخد الـ slug من الرابط
    const [facultyData, setFacultyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const { t } = useTranslation();

    useEffect(() => {
        const fetchFaculty = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(
                    `http://localhost:1337/api/university-faculties1?filters[slug][$eq]=${slug}&populate=Faculty_level&locale=${currentLang}`
                );
                if (res.data.data.length === 0) {
                    setError("Faculty not found");
                    setFacultyData(null);
                } else {
                    setFacultyData(res.data.data[0]);
                }
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError("Error fetching data");
                setFacultyData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchFaculty();
    }, [slug, currentLang]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">{error}</div>;
    if (!facultyData) return <div>No data available</div>;

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
        </div>
    );
}
