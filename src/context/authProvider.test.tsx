// @ts-ignore
import React, { useContext,} from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { AuthProvider, AuthContext, AuthContextType } from './auth'
import { ReducerAction } from "./auth/reducer";

describe('<AuthProvider />', () => {
    test('provides expected AuthContext obj to child elements', () => {
        const authContextValue: AuthContextType = {
            login({ email, password }: { email: string; password: string; }) {
                expect(email).toBeChecked;
                expect(password).toBeChecked;
            },
            logout() {
                fireEvent;
            },
            state: {
                error: undefined,
                loading: undefined,
                authenticated: undefined,
                data: undefined
            },
            dispatch: function (value: ReducerAction): void {
                throw new Error("Function not implemented.");
            }
        };
        render(
            <AuthProvider value={authContextValue}>
            <AuthContext.Consumer>
              {value => <div data-testid="context-value">{value}</div>}
            </AuthContext.Consumer>
          </AuthProvider>,
        );
        expect(screen.getByTestId('context-value')).toBeInTheDocument();
    })
})