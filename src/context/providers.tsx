import { ReactNode } from 'react';
import { AuthProvider } from './auth/provider';

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