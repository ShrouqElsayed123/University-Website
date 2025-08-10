import React from "react";

export default function FacultyGoal({ goals }) {
    return (
        <div className="p-6 bg-gray-100 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🎯 {goals.title}</h2>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">🎯 {goals.subtitle}</h2>

            <div className="grid gap-4 w-full max-w-4xl sm:grid-cols-2 md:grid-cols-3">
                {goals.desc.map((goal, index) => {
                    // تحقق إذا العنصر هو كائن وله title
                    const isObject = typeof goal === "object" && goal !== null && "title" in goal;

                    return (
                        <div
                            key={isObject ? goal.id : index}
                            className="bg-white shadow-md rounded-2xl p-4 text-center border-l-4 border-mainColor"
                        >
                            <div className="text-2xl mb-2">🎯</div>
                            {isObject ? (
                                <>
                                    <h3 className="font-semibold mb-1">{goal.title}</h3>
                                    <p className="text-gray-700">{goal.description}</p>
                                </>
                            ) : (
                                <p className="text-gray-700">{goal}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
