import { useState } from "react";

const initialAbout = {
    title: "Menoufia National University",
    description:
        "جامعة المنوفية تتميز بمساحة كبيرة وعدد كليات متنوع وعدد كبير من الطلاب.",
    images: [], // هنخليها فاضية عشان المستخدم يرفع الصور بنفسه
    cards: [
        { id: 1, type: "Message", icon: "🎓", content: "رسالة الجامعة مختصرة هنا..." },
        { id: 2, type: "Vision", icon: "🌟", content: "رؤية الجامعة مختصرة هنا..." },
    ],
};

export default function AboutDashboard() {
    const [aboutData, setAboutData] = useState(initialAbout);
    const [previews, setPreviews] = useState([]);

    const handleChange = (field, value) => {
        setAboutData({ ...aboutData, [field]: value });
    };

    const handleCardChange = (id, value) => {
        setAboutData({
            ...aboutData,
            cards: aboutData.cards.map((card) =>
                card.id === id ? { ...card, content: value } : card
            ),
        });
    };

    // رفع الصور
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 3); // ناخد أول 3 صور بس
        setAboutData({ ...aboutData, images: files });

        // previews للصور
        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setPreviews(previewUrls);
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* العناوين */}
            <label>Title</label>
            <input
                type="text"
                value={aboutData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="border p-2 rounded"
            />

            {/* الوصف */}
            <label>para 1</label>
            <textarea
                value={aboutData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="border p-2 rounded w-full h-24"
            />
            <label>para 2</label>
            <textarea
                value={aboutData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="border p-2 rounded w-full h-24"
            />

            {/* رفع الصور */}
            <div>
                <label className="block mb-2">Upload up to 3 Images</label>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="border p-2 rounded"
                />

                {/* previews */}
                <div className="flex gap-4 mt-4">
                    {previews.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`preview-${index}`}
                            className="w-32 h-32 object-cover rounded shadow"
                        />
                    ))}
                </div>
            </div>

            {/* الكروت */}
            <div className="flex gap-4">
                {aboutData.cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white shadow p-4 rounded-lg flex flex-col gap-2 flex-1"
                    >
                        <span className="text-green-500 text-2xl">{card.icon}</span>
                        <h4 className="font-bold">{card.type}</h4>
                        <textarea
                            value={card.content}
                            onChange={(e) => handleCardChange(card.id, e.target.value)}
                            className="border p-2 rounded h-20"
                        />
                    </div>
                ))}
            </div>

            {/* زرار حفظ التعديلات */}
            <button
                onClick={() => console.log("Updated Data:", aboutData)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-max"
            >
                Save Changes
            </button>
        </div>
    );
}
