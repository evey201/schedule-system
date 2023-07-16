import { useAuth } from "../hooks";
import { Outlet, Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ ...props }) => {
    const { state } = useAuth();

    return state.authenticated ? <Outlet {...props} /> : <Navigate to="/login" />
}