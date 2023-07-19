import { ReactNode } from 'react';
import { AuthProvider } from './auth';

type Provider = {
    children?: ReactNode
}

export const Providers = ({ children }: Provider) => {
    return (
        <AuthProvider>
            { children }
        </AuthProvider>
    )
}