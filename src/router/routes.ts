import React from 'react'
import {
    Login,
    Dashboard,
    Teams
} from '../pages'

type Routes = {
    name: string;
    path: string;
    restricted: boolean;
    element: React.FC;
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
        name: 'Teams',
        path: '/teams',
        restricted: true,
        roles: ['manager'],
        element: Teams,
    },
    {
        name: 'Login',
        path: '/login',
        restricted: false,
        roles: [],
        element: Login,
    }
]