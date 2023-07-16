import { Route, Routes } from 'react-router-dom'
import {  routes  } from './routes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {routes?.map((route) => (
                    <Route 
                        key={route.name}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Routes>
        </>
    )
}