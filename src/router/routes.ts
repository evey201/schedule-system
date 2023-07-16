import React from 'react'
import {
    Login,
    Dashboard
} from '../pages'

type Routes = {
    name: string;
    path: string;
    restricted: boolean;
    element: React.FC<unknown>;
    roles: string[]
}

export const routes: Routes[] = [
    {
        name: 'Home',
        path: '/',
        restricted: true,
        roles: [],
        element: Dashboard,
    },
    {
        name: 'Login',
        path: '/login',
        restricted: false,
        roles: [],
        element: Login,
    }
]