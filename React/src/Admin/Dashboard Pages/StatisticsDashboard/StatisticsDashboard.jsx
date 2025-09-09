import { useState } from "react";

export default function StatisticsDashboard() {
    const initialStats = [
        { id: 1, label: "Number of Students", value: 25000, icon: "🎓" },
        { id: 2, label: "Number of Faculties", value: 15, icon: "🏛️" },
        { id: 3, label: "Number of Staff", value: 1200, icon: "👩‍🏫" },
        { id: 4, label: "Campus Area (acres)", value: 350, icon: "🌳" }
    ];

    const [stats, setStats] = useState(initialStats);

    const handleChange = (id, field, value) => {
        setStats(
            stats.map(stat => stat.id === id ? { ...stat, [field]: value } : stat)
        );
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <h2 className="text-2xl font-bold text-yellow-500">University Statistics</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => (
                    <div key={stat.id} className="bg-white shadow p-4 rounded-lg flex flex-col items-start gap-2">
                        <span className="text-green-500 text-3xl">{stat.icon}</span>
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
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-max mt-4"
            >
                Save Changes
            </button>
        </div>
    );
}
