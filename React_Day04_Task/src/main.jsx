import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { HashRouter, Route, Routes } from 'react-router-dom'; 
import Layout from './Layout';
import Home from './pages/Home';
import ToDo from './pages/ToDo';
import Users from './pages/Users';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import UserDetails from './components/UserDetails';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetails />} />
          <Route path='users/:id/todo' element={<ToDo />} />
          <Route path='/todo' element={<ToDo />} />
        </Route>
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  </HashRouter>
);
