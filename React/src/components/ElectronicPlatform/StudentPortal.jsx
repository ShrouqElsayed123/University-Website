import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { User, Lock, Unlock, Plane } from "lucide-react";

export default function StudentPortalSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [portalData, setPortalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:1337/api/electronicplatforms1?locale=${currentLang}`)
      .then((res) => {
        const data = res.data.data[0]?.data;
        setPortalData(data);
       console.log(data)
      })
      .catch((err) => {
        console.error("Error fetching portal data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentLang]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!portalData) return <div className="text-center py-10 text-red-500">No data found</div>;

  return (
    <section className="bg-[#f8f7f3] dark:bg-gray-900 py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {portalData?.title}
          </h2>

          <a
            href={portalData?.platform_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition duration-300 text-sm sm:text-base"
          >
            {portalData?.button_text}
          </a>

          <p className="mt-6 text-base font-semibold text-gray-800 dark:text-gray-200">
            {portalData?.steps_title}
          </p>
        </div>

        {/* Steps Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Step icon={<User size={28} />} title={portalData?.step1_title} description={portalData?.step1_subtitle} />
          <Step icon={<Unlock size={28} />} title={portalData?.step2_title} description={portalData?.step2_subtitle} />
          <Step icon={<Lock size={28} />} title={portalData?.step3_title} description={portalData?.step3_subtitle} />
          <Step icon={<Plane size={28} />} title={portalData?.step4_title} description={portalData?.step4_subtitle} />
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-16 h-16 bg-green-700 text-white flex items-center justify-center rounded-full shadow">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}