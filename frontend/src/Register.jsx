import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RELI.css'; // Import the same CSS file

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/register', form);
      alert('Registration Successful');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
  
    <div className='h8'>
    <div className="auth-container">
      <div className="auth-form">
        <h2>Admin Registration</h2>
        <input
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          className="input-field"
        />
        <button onClick={handleRegister} className="btn">Register</button>
        <p>
          Already have an account?{' '}
          <button className="btn-register" onClick={() => navigate('/login')}>Login</button>
        </p>
      </div>
    </div>
    </div>
   
  );
}

export default Register;
