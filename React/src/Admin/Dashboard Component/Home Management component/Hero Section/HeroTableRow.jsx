import React from "react";

export default function HeroTableRow({ item, onEdit, onDelete }) {
    return (
        <tr className="text-center">
            <td className="px-4 py-2 border">{item.id}</td>
            <td className="px-4 py-2 border">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-12 object-cover mx-auto rounded"
                />
            </td>
            <td className="px-4 py-2 border">{item.title}</td>
            <td className="px-4 py-2 border">{item.subtitle}</td>
            <td className="px-4 py-2 border">{item.buttonText}</td>
            <td className="px-4 py-2 border">{item.buttonLink}</td>
            <td className="px-4 py-2 border space-x-2">
                <button
                    onClick={() => onEdit(item)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
