import React from "react";

// eslint-disable-next-line no-unused-vars
export default function OverviewSection({ FacultyOverview, ProgramOverview }) {
    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* كلية الطب */}
                <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-mainColor">
                    <h3 className="text-xl font-bold text-mainColor mb-4">
                        🏛️ {FacultyOverview?.title || "Overview of the Faculty"}
                    </h3>
                    {FacultyOverview?.desc?.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-justify mb-3">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* برنامج الطب والجراحة */}
                <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-mainColor">
                    <h3 className="text-xl font-bold text-mainColor mb-4">
                        📚 {ProgramOverview?.title || "Overview of the Program"}
                    </h3>
                    {ProgramOverview?.desc?.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-justify mb-3">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
