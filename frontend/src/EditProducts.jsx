import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'; 
function EditProduct() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [imageFile, setImageFile] = useState(null);
  const { id } = useParams();  
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:8080/api/product/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  const updateProduct = async () => {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    if (imageFile) formData.append('image', imageFile);

    try {
      await axios.put(`http://localhost:8080/api/edit/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product updated');
      navigate('/manageproducts');
    } catch (err) {
      alert('Error updating product111');
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };


  return (
    <div>
      <div className='c1'>
      <nav >
        <Link to="/Dashboard" className='c5'>Home</Link>
        <Link to="/AddProducts" className='c5'>Add products</Link>
        <Link to="/manageproducts" className='c5'>Manage products</Link>
        <Link to="/" className='c5' onClick={handleLogout}>Logout</Link>
      </nav>
      </div>
      <div className='edit1'>
      <h2>Edit Product</h2>
      <input
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      style={{ width: '100%', padding: '10px', marginBottom: '10px'}} /> <br></br> <br></br>
      <input
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
       style={{ width: '100%', padding: '10px', marginBottom: '10px'}}/><br></br> <br></br>
      <textarea
        placeholder="Product Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
       style={{ width: '100%', padding: '10px', marginBottom: '10px'}}/><br></br> <br></br>
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} /><br></br> <br></br>
      <button style={{ padding: '10px 20px', backgroundColor: 'gray', color: 'white' }}onClick={updateProduct}>Update</button>
       </div>
    </div>
  );
}

export default EditProduct;
