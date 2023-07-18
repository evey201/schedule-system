import { useAuth } from "../hooks";
import { Outlet, Navigate } from 'react-router-dom'

type RoleType = {
    role?: string[]
}

export const ProtectedRoute = ({ role, ...props }: RoleType) => {
    console.log('props', role)
    const { state } = useAuth();

    return state.authenticated ? <Outlet {...props} /> : <Navigate to="/login" />
}