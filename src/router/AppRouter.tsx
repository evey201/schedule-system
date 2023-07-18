import { Route, Routes } from 'react-router-dom'
import {  routes  } from './routes'
import { ProtectedRoute } from './ProtectedRoute'

type AppRouterProps = {
    props?: any
};

export const AppRouter = (props: AppRouterProps) => {
    return (
        <>
            <Routes>
                {routes?.map((route) => {
                    return route.restricted ? (
                        <Route key={route.name} path={route.path} element={<ProtectedRoute role={route.roles} { ...props}/>}>
                            <Route 
                                key={route.name}
                                path={route.path}
                                element={<route.element />}
                            />
                        </Route>
                    ) : (
                        <Route 
                            key={route.name}
                            path={route.path}
                            element={<route.element />}
                        />
                    )
                })}
            </Routes>
        </>
    )
}