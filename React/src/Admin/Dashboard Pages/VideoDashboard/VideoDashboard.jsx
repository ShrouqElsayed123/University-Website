import { useState, useEffect } from "react";
import axios from "axios";

export default function VideoDashboard() {
    const [videoData, setVideoData] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        paragraph: "",
        video: null,
    });

    // ✅ Fetch data once
    useEffect(() => {
        axios
            .get("http://localhost:8085/home/video/1") // استبدلي 1 بالـ ID بتاع الفيديو
            .then((res) => setVideoData(res.data))
            .catch(() => console.log("No video data yet"));
    }, []);

    // ✅ handle change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "video") {
            setFormData({ ...formData, video: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // ✅ Add (لو مفيش بيانات)
    const handleAdd = async () => {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("paragraph", formData.paragraph);
        data.append("video", formData.video);

        const res = await axios.post("http://localhost:8085/home/video", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        setVideoData(res.data);
    };

    // ✅ Update (لو فيه بيانات موجودة)
    const handleUpdate = async () => {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("paragraph", formData.paragraph);
        if (formData.video) data.append("video", formData.video);

        const res = await axios.put("http://localhost:8085/home/video/1", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        setVideoData(res.data);
    };

    return (
        <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
                🎥 Video Section
            </h2>

            {/* لو مفيش داتا */}
            {!videoData ? (
                <>
                    <input
                        type="text"
                        name="title"
                        placeholder="Video Title"
                        onChange={handleChange}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <textarea
                        name="paragraph"
                        placeholder="Video Description"
                        onChange={handleChange}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleChange}
                        className="mb-2"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                        Add Video
                    </button>
                </>
            ) : (
                <>
                    <h3 className="font-bold text-lg">{videoData.title}</h3>
                    <p className="text-gray-600">{videoData.paragraph}</p>
                    <video
                        src={`http://localhost:8085/uploads/${videoData.video}`}
                        controls
                        className="w-full max-h-64 rounded my-4"
                    ></video>

                    {/* Update Form */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Update Title"
                        onChange={handleChange}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <textarea
                        name="paragraph"
                        placeholder="Update Description"
                        onChange={handleChange}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleChange}
                        className="mb-2"
                    />
                    <button
                        onClick={handleUpdate}
                        className="px-4 py-2 bg-yellow-600 text-white rounded"
                    >
                        Update Video
                    </button>
                </>
            )}
        </div>
    );
}
