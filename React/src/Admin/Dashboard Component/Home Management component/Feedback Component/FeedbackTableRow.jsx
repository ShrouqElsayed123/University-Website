import React, { useContext } from "react";
import { FeedbackContext } from "./Feedback.context";

export default function FeedbackTableRow({ feedback, onEdit }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <tr className="border-t">
      <td className="p-3">
        <img
          src={feedback.image}
          alt={feedback.name}
          className="w-12 h-12 rounded-full"
        />
      </td>
      <td className="p-3">{feedback.name}</td>
      <td className="p-3">{feedback.college}</td>
      <td className="p-3">{feedback.feedback}</td>
      <td className="p-3 flex gap-2">
        <button
          onClick={() => onEdit(feedback)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteFeedback(feedback.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
