import React from 'react';
import { Link } from 'react-router-dom';

export default function UserTable({ users }) {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td><Link to={`/users/${user.id}`}><button className="details-btn">Details</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
