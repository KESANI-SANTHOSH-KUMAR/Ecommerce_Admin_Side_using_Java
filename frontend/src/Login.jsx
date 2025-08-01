import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RELI.css'; // Import the CSS file

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/Dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className='h8'>
    <div className="auth-container">
      <div className="auth-form">
        <h2>Admin Login</h2>
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
        <button onClick={handleLogin} className="btn">Login</button><br/><br/>
        <p>
          Don't have an account?{' '}
          <button className="btn-register" onClick={() => navigate('/register')}>Register</button>
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
