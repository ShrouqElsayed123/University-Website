import { useState } from "react";

export default function FaqsDashboard() {
    // ✅ Object واحد لكل البيانات
    const [faqsData, setFaqsData] = useState({
        header: "Frequently Asked Questions",
        paragraph:
            "Here you can find answers to the most common questions about our university.",
        faqs: [
            {
                id: 1,
                question: "What programs does the university offer?",
                answer:
                    "The university offers undergraduate and postgraduate programs in multiple faculties.",
            },
            {
                id: 2,
                question: "Where is the university located?",
                answer: "The university is located in Menoufia, Egypt.",
            },
            {
                id: 3,
                question: "How many students are currently enrolled?",
                answer:
                    "There are more than 20,000 students enrolled across all faculties.",
            },
        ],
    });

    const [formData, setFormData] = useState({ question: "", answer: "" });
    const [editId, setEditId] = useState(null);

    // ✅ handle change for FAQ form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // ✅ Add FAQ
    const handleAdd = () => {
        if (!formData.question || !formData.answer) return;
        const newFaq = { id: Date.now(), question: formData.question, answer: formData.answer };
        setFaqsData({
            ...faqsData,
            faqs: [...faqsData.faqs, newFaq],
        });
        setFormData({ question: "", answer: "" });
    };

    // ✅ Update FAQ
    const handleUpdate = () => {
        setFaqsData({
            ...faqsData,
            faqs: faqsData.faqs.map((f) =>
                f.id === editId ? { ...f, ...formData } : f
            ),
        });
        setFormData({ question: "", answer: "" });
        setEditId(null);
    };

    // ✅ Delete FAQ
    const handleDelete = (id) => {
        setFaqsData({
            ...faqsData,
            faqs: faqsData.faqs.filter((f) => f.id !== id),
        });
    };

    // ✅ Start Editing
    const handleEdit = (faq) => {
        setFormData({ question: faq.question, answer: faq.answer });
        setEditId(faq.id);
    };

    return (
        <div className="p-6 bg-white shadow rounded-2xl mt-6">
            {/* Header + Paragraph */}
            <div className="mb-6">
                <input
                    type="text"
                    value={faqsData.header}
                    onChange={(e) =>
                        setFaqsData({ ...faqsData, header: e.target.value })
                    }
                    className="text-2xl font-bold mb-2 text-yellow-600 w-full border-b border-gray-300 focus:outline-none"
                />
                <textarea
                    value={faqsData.paragraph}
                    onChange={(e) =>
                        setFaqsData({ ...faqsData, paragraph: e.target.value })
                    }
                    className="text-gray-600 w-full border p-2 rounded"
                />
            </div>

            <h2 className="text-xl font-bold mb-4 text-yellow-600">❓ Manage FAQs</h2>

            {/* Form لإضافة / تعديل FAQ */}
            <input
                type="text"
                name="question"
                placeholder="Enter Question"
                value={formData.question}
                onChange={handleChange}
                className="border p-2 w-full mb-2 rounded"
            />
            <textarea
                name="answer"
                placeholder="Enter Answer"
                value={formData.answer}
                onChange={handleChange}
                className="border p-2 w-full mb-2 rounded"
            />

            {editId ? (
                <button
                    onClick={handleUpdate}
                    className="px-4 py-2 bg-yellow-600 text-white rounded mb-4"
                >
                    Update FAQ
                </button>
            ) : (
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-green-600 text-white rounded mb-4"
                >
                    Add FAQ
                </button>
            )}

            {/* قائمة الـ FAQs */}
            <div>
                {faqsData.faqs.length === 0 ? (
                    <p className="text-gray-500">No FAQs yet</p>
                ) : (
                    faqsData.faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="mb-3 p-4 border rounded-lg shadow-sm bg-gray-50"
                        >
                            <details>
                                <summary className="font-semibold cursor-pointer">
                                    {faq.question}
                                </summary>
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            </details>

                            {/* أزرار تعديل / حذف */}
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => handleEdit(faq)}
                                    className="px-3 py-1 bg-blue-600 text-white rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(faq.id)}
                                    className="px-3 py-1 bg-red-600 text-white rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
