import { useState } from "react";
import Header from "../../Dashboard Component/Home Management component/Header/Header";
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";

export default function StatisticsDashboard() {
    const initialStats = [
        { id: 1, label: "Number of Students", value: 25000, icon: "student" },
        { id: 2, label: "Number of Faculties", value: 15, icon: "faculty" },
        { id: 3, label: "Number of Staff", value: 1200, icon: "staff" },
        { id: 4, label: "Number of Program", value: 350, icon: "program" }
    ];
    const iconMap = {
        "student": <FaBookOpen className="text-[30px]" />,
        "faculty": <FaUserGraduate className="text-[30px]" />,
        "staff": <i className={`fa-solid fa-building-columns text-[30px]	`}></i>,
        "program": <i className={`fa-solid fa-chalkboard-user text-[30px]`}></i>,
    }
    const [stats, setStats] = useState(initialStats);

    const handleChange = (id, field, value) => {
        setStats(
            stats.map(stat => stat.id === id ? { ...stat, [field]: value } : stat)
        );
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <Header title="Statistics Section" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => (
                    <div key={stat.id} className="bg-white shadow p-4 rounded-lg flex flex-col items-start gap-2">
                        <span className="text-secondaryColor/70">{iconMap[stat.icon]}</span>
                        <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => handleChange(stat.id, "label", e.target.value)}
                            className="border p-1 rounded w-full"
                        />
                        <input
                            type="number"
                            value={stat.value}
                            onChange={(e) => handleChange(stat.id, "value", e.target.value)}
                            className="border p-1 rounded w-full"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={() => console.log("Updated Statistics:", stats)}
                className="bg-mainColor text-white px-4 py-2 rounded-lg w-max mt-4"
            >
                Save Changes
            </button>
        </div>
    );
}
