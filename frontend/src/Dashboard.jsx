import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <body>
      <div className='c1'>
      <nav >
        <Link to="/Dashboard" className='c5'>Home</Link>
        <Link to="/AddProducts" className='c5'>Add products</Link>
        <Link to="/manageproducts" className='c5'>Manage products</Link>
        <Link to="/" className='c5' onClick={handleLogout}>Logout</Link>
      </nav>
      </div>
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      <div className='d3'>
      
      {products.map((p) => (
        <div key={p.id} style={{float:'left' ,border: '4px solid gray', marginBottom:'20px',padding: '15px',marginLeft:'10px', borderRadius: '8px', width: '300px'}} className='d4'>
          <img src={`http://localhost:8080/api/uploads/${p.image}`} alt={p.name} style={{ width: '100%', height: '150px',objectFit: 'cover',paddingTop:10}} />
          <div><b>{p.name} </b><br/>${p.price}<br/>
            {p.description}
          </div>
        </div>
      ))}
    </div>
        
    </div>
    
    </body>
  );
}

export default Dashboard;
