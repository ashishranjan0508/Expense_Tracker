import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar.jsx';


// Dashboard component
const Dashboard = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div>Dashboard</div>

    </div>
  );
};

export default Dashboard;