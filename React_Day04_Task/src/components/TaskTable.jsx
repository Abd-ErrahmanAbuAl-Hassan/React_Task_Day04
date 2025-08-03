import React from 'react';

export default function TaskTable({ tasks, onDelete }) {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Creation Date</th>
          <th>Procedure</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.createdAt}</td>
            <td>
              <button onClick={() => onDelete(index)}><i className="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
