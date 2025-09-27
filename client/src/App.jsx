import {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx'
const Signup = lazy(() => { return (import('./pages/Signup.jsx')) });
const Login = lazy(() => { return (import('./pages/login.jsx')) });
const Dashboard = lazy( () => { return (import('./pages/Dashboard.jsx')) });
const Budget = lazy( () => { return (import('./pages/Budget.jsx')) });
const Expenses = lazy( () => { return (import('./pages/Expenses.jsx')) });
const Income = lazy( () => { return (import('./pages/Income.jsx')) });

import ProtectedRoute from "./context/ProtectedRoute.jsx";


function App() {
  return (
   

    <BrowserRouter>

     <Routes>
      <Route path="/" element={<Home />} />
    
      <Route path="/signup" element={ <Suspense fallback={
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div> }> 
         <Signup /></Suspense> }
       />

      <Route path="/login" element={ <Suspense fallback={
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div> }> 
         <Login /></Suspense> }
       />

      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Suspense fallback = {
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div>
          }><Dashboard /></Suspense>        
        </ProtectedRoute>  } />

      <Route path="/budget" element={
        <ProtectedRoute>
          <Suspense fallback = {
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div>
          }><Budget /></Suspense>        
        </ProtectedRoute>  } />

      <Route path="/expenses" element={
        <ProtectedRoute>
          <Suspense fallback = {
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div>
          }><Expenses/></Suspense>
        </ProtectedRoute>
      } />

     <Route path="/income" element={
         <ProtectedRoute>
          <Suspense fallback = {
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div>
         }> <Income /></Suspense>
         </ProtectedRoute>
       } />
       
     </Routes>


   </BrowserRouter>

  )
}

export default App;
