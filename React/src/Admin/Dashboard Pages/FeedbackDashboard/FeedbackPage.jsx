import React, { useContext, useState } from "react";
import { FeedbackContext } from "../../Dashboard Component/Home Management component/Feedback Component/Feedback.context";
import FeedbackTableRow from "../../Dashboard Component/Home Management component/Feedback Component/FeedbackTableRow";
import FeedbackModal from "../../Dashboard Component/Home Management component/Feedback Component/FeedbackModal";


export default function FeedbackPage() {
  const { feedbacks } = useContext(FeedbackContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFeedback, setEditingFeedback] = useState(null);

  const handleAdd = () => {
    setEditingFeedback(null);
    setIsModalOpen(true);
  };

  const handleEdit = (fb) => {
    setEditingFeedback(fb);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Students Feedback</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Feedback
        </button>
      </div>

      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">College</th>
            <th className="p-3">Feedback</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb) => (
            <FeedbackTableRow
              key={fb.id}
              feedback={fb}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editingFeedback={editingFeedback}
      />
    </div>
  );
}
