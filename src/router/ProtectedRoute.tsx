import { useEffect, useState } from "react";
import { useAuth } from "../hooks";
import { Outlet, useNavigate } from 'react-router-dom'
import { Loading } from "../components";

type RoleType = {
    role?: string[]
}

export const ProtectedRoute = ({ role, ...props }: RoleType) => {
    const { state } = useAuth();
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        if (state.authenticated === false) {
            navigate('/login')
        }
        setLoading(false)
    }, [navigate, role, state.authenticated])
    // if (!role?.includes('manager')) return loading ? <Loading />: <Navigate to="/" />
    return loading ? <Loading />: <Outlet {...props} />
}