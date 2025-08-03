import React, { useState,useEffect } from "react";
import No_Task from "../components/No_Task";
import Form from "../components/ToDoForm";
import TaskTable from "../components/TaskTable";
import "../styles/todo.css";
import { useParams , useNavigate, Link} from "react-router-dom";

export default function ToDo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  // تحميل المهام من localStorage عند فتح الصفحة
  useEffect(() => {
    if (id) {
      const savedTasks = localStorage.getItem(`tasks_${id}`);
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }, [id]);

  // حفظ المهام في localStorage عند كل تغيير
  useEffect(() => {
    if (id) {
      localStorage.setItem(`tasks_${id}`, JSON.stringify(tasks));
    }
  }, [tasks, id]);

  const handleAddTask = (task) => {
    const taskWithDate = {
      ...task,
      createdAt: new Date().toLocaleDateString("en-CA"),
    };
    setTasks((prev) => [...prev, taskWithDate]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="main">
      {id ? (
        <>
          <div className="hero">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <div className="form">
              <Form onAddTask={handleAddTask} />
            </div>
          </div>

          <div className="result">
            <h1 className="task-counter">Tasks Count: {tasks.length}</h1>
            <div className="tasks">
              {tasks.length === 0 ? (
                <No_Task />
              ) : (
                <TaskTable tasks={tasks} onDelete={handleDeleteTask} />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="no-user">
          <h1>Please select a user to view their tasks.</h1>
          <div className="btn-group">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <Link to={`/users`}>
              <button className="todo-btn">Go to Users</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}