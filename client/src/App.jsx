
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import Budget from "./pages/Budget.jsx";
import Expenses from "./pages/Expenses.jsx";
import Income from "./pages/Income.jsx";

import ProtectedRoute from "./context/ProtectedRoute.jsx";




function App() {
  return (
   

    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>  } />
      <Route path="/budget" element={
        <ProtectedRoute>
          <Budget />
        </ProtectedRoute>
      } />
      <Route path="/expenses" element={
        <ProtectedRoute>
          <Expenses />
        </ProtectedRoute>
      } />

     <Route path="/income" element={
         <ProtectedRoute>
           <Income />
         </ProtectedRoute>
       } />


     </Routes>

   </BrowserRouter>

  )
}

export default App;
