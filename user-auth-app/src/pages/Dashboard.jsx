import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import dashboardImg from '../assets/dashboard.jpeg';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      <img
        src={dashboardImg}
        alt="Dashboard Overview"
        className="dashboard-image"
      />
    </div>
  );
};

export default Dashboard;