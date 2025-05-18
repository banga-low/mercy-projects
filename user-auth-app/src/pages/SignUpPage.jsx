import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/signUp.css'; 

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Signup successful! Please check your email for confirmation.');
      navigate('/login');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSignUp} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            className="signup-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="signup-button"
          >
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;