import React, { useState, useEffect } from "react";

export default function HeroModal({ isOpen, onClose, formData, setFormData, onSubmit, editing }) {
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (!isOpen) {
            setPreview(null);
            return;
        }

        if (!formData.image) {
            setPreview(null);
        } else if (formData.image instanceof File) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(formData.image);
        } else {
            setPreview(formData.image); // Base64 أو URL موجود
        }
    }, [isOpen, formData.image]);

    if (!isOpen) return null;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                setFormData({ ...formData, image: base64 });
                setPreview(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h3 className="text-xl font-bold mb-4">
                    {editing ? "Edit Hero Section" : "Add New Hero Section"}
                </h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                    className="space-y-3"
                >
                    <input
                        type="text"
                        placeholder="Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subtitle"
                        value={formData.subtitle}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                    {preview && (
                        <img src={preview} alt="Preview" className="w-full h-24 object-cover rounded mb-2" />
                    )}

                    <input
                        type="text"
                        placeholder="Button Text"
                        value={formData.buttonText}
                        onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Button Link"
                        value={formData.buttonLink}
                        onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                        className="w-full border px-3 py-2 rounded"
                    />

                    <div className="flex justify-end space-x-2 mt-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded border">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
                            {editing ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
