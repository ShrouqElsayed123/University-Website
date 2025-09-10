import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Dashboard Component/Home Management component/Header/Header";

const initialAbout = {
    paragraph1: "هذا نص البراجراف الأول من الكود",
    paragraph2: "هذا نص البراجراف الثاني من الكود",
    message: "رسالة الجامعة هنا",
    vision: "رؤية الجامعة هنا",
    imageUrl: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"]
};

export default function AboutDashboard() {
    const [aboutData, setAboutData] = useState(null);
    const [previews, setPreviews] = useState([]);
    const apiUrl = "http://10.1.44.26:8085/home/aboutUs/allAboutUs";

    // عند تحميل الصفحة: جلب البيانات
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                if (res.data && res.data.length) {
                    // لو فيه بيانات موجودة، استخدم آخر واحدة
                    const lastData = res.data[res.data.length - 1];
                    setAboutData(lastData);
                    setPreviews(lastData.imageUrl || []);
                } else {
                    // لو مفيش بيانات، اعمل POST مرة واحدة فقط
                    axios.post(apiUrl, initialAbout)
                        .then(postRes => {
                            setAboutData(postRes.data);
                            setPreviews(postRes.data.imageUrl || []);
                        })
                        .catch(err => console.error("Error posting initial data:", err));
                }
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    if (!aboutData) return <p>Loading...</p>;

    const handleChange = (field, value) => {
        setAboutData({ ...aboutData, [field]: value });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 3);
        const urls = files.map(file => URL.createObjectURL(file));
        setPreviews(urls);
        setAboutData({ ...aboutData, imageUrl: urls });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${apiUrl}/${aboutData.id}`, aboutData);
            alert("تم حفظ التعديلات بنجاح!");
        } catch (err) {
            console.error(err);
            alert("حدث خطأ أثناء الحفظ");
        }
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <Header title="About Us Section" />
            <form>
                <div className="space-y-6">

                    <div>
                        <label className="text-lg font-semibold mb-1 block">Paragraph 1</label>
                        <textarea
                            value={aboutData.paragraph1 || ""}
                            onChange={e => handleChange("paragraph1", e.target.value)}
                            className="border p-2 rounded w-full h-24"
                        />
                    </div>

                    <div>
                        <label className="text-lg font-semibold mb-1 block">Paragraph 2</label>
                        <textarea
                            value={aboutData.paragraph2 || ""}
                            onChange={e => handleChange("paragraph2", e.target.value)}
                            className="border p-2 rounded w-full h-24"
                        />
                    </div>

                    <div>
                        <label className="text-lg font-semibold mb-1 block">Message</label>
                        <textarea
                            value={aboutData.message || ""}
                            onChange={e => handleChange("message", e.target.value)}
                            className="border p-2 rounded w-full h-24"
                        />
                    </div>

                    <div>
                        <label className="text-lg font-semibold mb-1 block">Vision</label>
                        <textarea
                            value={aboutData.vision || ""}
                            onChange={e => handleChange("vision", e.target.value)}
                            className="border p-2 rounded w-full h-24"
                        />
                    </div>

                    {/* رفع الصور */}
                    <div>
                        <label className="text-lg font-semibold mb-1 block">Upload up to 3 Images</label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="border p-2 rounded"
                        />
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

                    <button
                        onClick={handleSave}
                        className="bg-mainColor text-white px-4 py-2 rounded-lg w-max"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
