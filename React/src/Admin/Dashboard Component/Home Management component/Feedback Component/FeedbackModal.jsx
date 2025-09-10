import React, { useContext, useState, useEffect } from "react";
import { FeedbackContext } from "./Feedback.context";

export default function FeedbackModal({ isOpen, onClose, editingFeedback }) {
  const { addFeedback, updateFeedback } = useContext(FeedbackContext);
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    feedback: "",
    image: "",
  });

  useEffect(() => {
    if (editingFeedback) {
      setFormData(editingFeedback);
    } else {
      setFormData({ name: "", college: "", feedback: "", image: "" });
    }
  }, [editingFeedback]);

  const handleSave = () => {
    if (editingFeedback) {
      updateFeedback(formData);
    } else {
      addFeedback(formData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h3 className="text-xl font-bold mb-4">
          {editingFeedback ? "Edit Feedback" : "Add Feedback"}
        </h3>
        <input
          type="text"
          placeholder="Student Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="College"
          value={formData.college}
          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
          className="w-full border p-2 mb-2 rounded"
        />
        <textarea
          placeholder="Feedback"
          value={formData.feedback}
          onChange={(e) =>
            setFormData({ ...formData, feedback: e.target.value })
          }
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full border p-2 mb-2 rounded"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
