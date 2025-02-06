import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../views/Home";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import AppointmentsView from "../views/AppointmentsView";
import DoctorListView from "../views/DoctorListView";
import ServicesListView from "../views/ServicesListView";
import SecureRoute from "./SecureRoute";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<SecureRoute allowedRoles={["admin"]}><Dashboard /></SecureRoute>} />
                    <Route path="/appointments" element={<SecureRoute allowedRoles={["admin"]}><AppointmentsView /></SecureRoute>} />
                    <Route path="/doctors" element={<SecureRoute allowedRoles={["admin", "user"]}><DoctorListView /></SecureRoute>} />
                    <Route path="/services" element={<SecureRoute allowedRoles={["admin", "user"]}><ServicesListView /></SecureRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default AppRoutes;