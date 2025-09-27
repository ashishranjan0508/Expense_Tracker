import { Suspense } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from "./config/route-config.js";
import Home from "./pages/Home.jsx";


function App() {
  return (
   

    <BrowserRouter>

     <Routes>
     <Route path="/" element = {<Home/>} />

     {PUBLIC_ROUTES.map( ({path, component : Component}) => {
      return (
        <Route key = {path}
         path={path}
         element={ <Suspense fallback={
         <div className="flex justify-center items-center h-screen">
         <div className="text-xl font-bold">Loading...</div></div> }> 
         <Component/>
         </Suspense> }
       />
      )
     }
     )}


     {PROTECTED_ROUTES.map(
      ({path, component : Component}) => {
        return(
         <Route
         key={path}
         path={path}
         element = {
          <ProtectedRoute>
          <Suspense fallback = {
          <div className="flex justify-center items-center h-screen">
          <div className="text-xl font-bold">Loading...</div></div>
          }>
           <Component/>
          </Suspense>
          </ProtectedRoute>
         }
         />
        )
      }
     )}
       
     </Routes>
   </BrowserRouter>

  )
}

export default App;
