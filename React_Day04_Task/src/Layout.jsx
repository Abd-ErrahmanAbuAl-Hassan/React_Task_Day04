import React, {  useState } from 'react';
import './styles/layout.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const [isAutheticated, setStatus] = useState(localStorage.getItem('isAutheticated') === 'true');
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.setItem('isAutheticated', false);
    setStatus(false);
    navigate('/'); 
  };

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/todo'>ToDo</Link></li>
        </ul>
        {!isAutheticated && <button className='login btn'><Link to='/login'>Login</Link></button>}
        {isAutheticated &&
          <div className='logout'>
            <h2>Hello Admin!</h2>
            <button className='btn' onClick={handleLogout}>Logout</button>
          </div>
        }
      </nav>

      <Outlet />

      <div className="footer">&copy; 2025 by Abdulrahman Mohamed. All rights reserved.</div>
    </>
  );
}
