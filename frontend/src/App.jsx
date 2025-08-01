import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

import AddProduct from './AddProducts';
import ManageProducts from './ManageProducts';
import Dashboard from './Dashboard';
import EditProduct from './EditProducts';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AddProducts" element={<AddProduct />} />
        <Route path="/manageproducts" element={<ManageProducts/>}/>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
