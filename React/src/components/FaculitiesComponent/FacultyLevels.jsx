
import { useState } from "react";
import { ShoppingCart, CreditCard, Gift, Package } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const tabs = [
  {
    id: "choose",
    label: "Choose",
    icon: <ShoppingCart size={24} />,
    title: "Choose your item",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris.",
  },
  {
    id: "pay",
    label: "Pay",
    icon: <CreditCard size={24} />,
    title: "Secure Payment",
    content:
      "Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor.",
  },
  {
    id: "wrap",
    label: "Wrap",
    icon: <Gift size={24} />,
    title: "We will wrap it",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris.",
  },
  {
    id: "ship",
    label: "Ship",
    icon: <Package size={24} />,
    title: "We ship it",
    content:
      "Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor.",
  },
];
export default function FacultyLevels() {
  const [activeTab, setActiveTab] = useState("wrap");
  const { t } = useTranslation();


  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center flex items-center flex-col gap-3">
        <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
          <HiOutlineBuildingLibrary className="w-6 h-6" />
          <span className="text-sm  tracking-widest uppercase">
            {t('tcourse')}
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Trans
              i18nKey="course"
              components={{ highlight: <span className="text-mainColor" /> }}
            />
          </h2>
        </div>
      </div>
      {/* الشبكة */}
      <div className="flex flex-col md:flex-row border rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex md:flex-col border-b md:border-b-0 md:border-r bg-gray-50 w-full md:w-48">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 md:gap-3 p-4 w-full text-sm font-medium transition 
              ${activeTab === tab.id
                  ? "text-red-500 border-l-4 md:border-l-0 md:border-r-4 border-red-500 bg-white"
                  : "text-gray-500 hover:text-gray-800"
                }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 text-center md:text-left">
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <div key={tab.id}>
                  <div className="flex justify-center md:justify-start mb-4 text-gray-600">
                    {tab.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{tab.title}</h2>
                  <p className="text-gray-600">{tab.content}</p>
                </div>
              )
          )}
        </div>
      </div>

    </section>





  );
}





