// Table.tsx
import React from "react";

interface TableProps {
  columns: string[];
  data: { Id: number; TemplateName: string }[]; // Define the data structure
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onUpdate, onDelete }) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-4 py-2 text-left">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.Id}>
            {columns.map((column) => (
              <td key={column} className="px-4 py-2">{row[column as keyof typeof row]}</td>
            ))}
            <td className="px-4 py-2">
              <button onClick={() => onUpdate(row.Id)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
              <button onClick={() => onDelete(row.Id)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
