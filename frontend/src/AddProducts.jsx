import { useState } from 'react';
import axios from 'axios';
import{Link}from 'react-router-dom';
function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [imageFile, setImageFile] = useState(null);

  const addProduct = async () => {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    if (imageFile) formData.append('image', imageFile);

    try {
      await axios.post('http://localhost:8080/api/add-product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product added');
      setProduct({ name: '', price: '', description: '' });
      setImageFile(null);
    } catch (err) {
      alert('Error adding product11111');
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };


  return (
    <div >
      <div className='c1'>
      <nav >
         <Link to="/Dashboard" className='c5'>Home</Link>
        <Link to="/AddProducts" className='c5'>Add products</Link>
        <Link to="/manageproducts" className='c5'>Manage products</Link>
        <Link to="/" className='c5' onClick={handleLogout}>Logout</Link>
      </nav>
      </div>
      <div className='ADD'style={{ maxWidth: '500px',marginLeft:'520px'}}>
      <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Product Description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button className='b7' onClick={addProduct} style={{ padding: '10px 20px', backgroundColor: 'gray', color: 'white' }}>
          Add Product
        </button>
       <Link to='/manageproducts' className='bm'> <button className='b7'style={{ padding: '10px 20px', backgroundColor: 'gray', color: 'white' }}>Manage products</button></Link>
      </div>
    </div>
  );
}

export default AddProduct;
