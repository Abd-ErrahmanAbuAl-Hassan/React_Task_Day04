import React, { useState } from 'react';

export default function ToDoForm({ onAddTask}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') return;

    onAddTask({
      title: title.trim(),
      description: description.trim()
    });

    setTitle('');
    setDescription('');

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Task</h1>

      <fieldset>
        <legend>Task Title</legend>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <legend>Description</legend>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </fieldset>

      <div className="form-buttons">
        <button type="submit">Add New</button>
      </div>
    </form>
  );
}
