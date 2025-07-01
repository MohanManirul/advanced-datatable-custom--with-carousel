import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/users/auth/Login";
import Register from "./pages/users/auth/Register";
import UserDashboardLayout from "./Layouts/UserDashboardLayout";
import Dashboard from "./pages/users/Dashboard";
import AdvocateDashboardLayout from "./Layouts/AdvocateDashboardLayout";
import AdvocateDashboard from "./pages/advocate/AdvocateDashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/" element={<UserDashboardLayout />}>
            <Route path="/user/dashboard" element={
            
              <ProtectedRoute>

                <Dashboard />
              </ProtectedRoute>
             
              
              } />
          </Route>

          <Route path="/" element={<AdvocateDashboardLayout />}>
            <Route path="/advocate/dashboard" element={<AdvocateDashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
