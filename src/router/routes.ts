import React from 'react'
import {
    Login,
    Dashboard
} from '../pages'

type Routes = {
    name: string;
    path: string;
    hasAccess: boolean;
    element: React.FC<unknown>;
    roles: string[]
}

export const routes: Routes[] = [
    {
        name: 'Home',
        path: '/',
        hasAccess: false,
        roles: [],
        element: Dashboard,
    },
    {
        name: 'Login',
        path: '/login',
        hasAccess: false,
        roles: [],
        element: Login,
    }
]