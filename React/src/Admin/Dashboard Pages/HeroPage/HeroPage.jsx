import React, { useState } from "react";
import HeroModal from "../../Dashboard Component/Home Management component/Hero Section/HeroModal";
import HeroTableRow from "../../Dashboard Component/Home Management component/Hero Section/HeroTableRow";

export default function HeroPage() {
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const initialFormData = {
        title: "",
        subtitle: "",
        image: null,
        buttonText: "",
        buttonLink: "",
    };
    const [formData, setFormData] = useState(initialFormData);

    // فتح المودال للإضافة
    const handleAdd = () => {
        setFormData(initialFormData);
        setEditingItem(null);
        setIsModalOpen(true);
    };

    // فتح المودال للتعديل
    const handleEdit = (item) => {
        setFormData(item);
        setEditingItem(item);
        setIsModalOpen(true);
    };

    // حذف عنصر
    const handleDelete = (id) => {
        setItems(items.filter((i) => i.id !== id));
    };

    // حفظ العنصر (Add أو Edit)
    const handleSubmit = () => {
        if (editingItem) {
            // تعديل
            setItems(items.map((i) => (i.id === editingItem.id ? formData : i)));
        } else {
            // إضافة
            setItems([...items, { ...formData, id: Date.now() }]);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleAdd}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Add Hero Section
            </button>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="text-center bg-gray-100">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Image</th>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Subtitle</th>
                        <th className="border px-4 py-2">Button Text</th>
                        <th className="border px-4 py-2">Button Link</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <HeroTableRow
                            key={item.id}
                            item={item}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>

            <HeroModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                editing={!!editingItem}
            />
        </div>
    );
}
