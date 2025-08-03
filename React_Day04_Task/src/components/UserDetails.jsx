import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <div className="user-details-container">
      {loading ? (
        <div className="loader"></div>
      ) : user ? (
        <div className="user-card">
          <h2>{user.name}</h2>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <div className="btn-group">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <Link to={`/users/${id}/todo`}>
              <button className="todo-btn">View Todos</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}
