import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';


function ManageProducts() {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();
  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/api/product/${id}`);
    fetchProducts();
  };
  const EditProduct = (id) => {
    navigate(`/edit/${id}`); 
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <body className='b3'>
        <div className='c1'>
      <nav >
        <Link to="/Dashboard" className='c5'>Home</Link>
        <Link to="/AddProducts" className='c5'>Add products</Link>
        <Link to="/manageproducts" className='c5'>Manage products</Link>
        <Link to="/" className='c5' onClick={handleLogout}>Logout</Link>
      </nav>
      </div>
        <h2>Manage Products</h2>
    <div className='d3'>
      
      {products.map((p) => (
        <div key={p.id} style={{float:'left' ,border: '4px solid gray', marginBottom:'20px',padding: '15px',marginLeft:'10px', borderRadius: '8px', width: '300px'}} className='d4'>
          <img src={`http://localhost:8080/api/uploads/${p.image}`} alt={p.name} style={{ width: '100%', height: '150px',objectFit: 'cover',paddingTop:10}} />
          <div><b>{p.name} </b><br/>${p.price}<br/>
            {p.description}
          </div>
          <br/>
          <button onClick={() => deleteProduct(p.id)}className='b4'>Delete</button>
          <button onClick={() => EditProduct(p.id)} className='b4'>Edit</button>
        </div>
      ))}
    </div>
    <Link to='/AddProducts'className='bm'><button className='b0'> Add More products</button></Link>
    </body>
  );
}

export default ManageProducts;
