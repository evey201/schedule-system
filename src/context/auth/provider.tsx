import {
    createContext,
    useReducer,
    ReactNode,
    Dispatch,
    useMemo,
    useCallback,
} from 'react'
import logger from 'use-reducer-logger'
import {
    AuthReducer,
    AUTH_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
} from './reducer'


type StateType = {
    error?: unknown,
    loading?: boolean,
    authenticated?: boolean,
    data?: unknown,
}
const initialState: StateType = {
    error: null,
    loading: false,
    authenticated: false,
    data: null,
}

type AuthContextType = {
    state: StateType;
    dispatch: Dispatch<any>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthProviderProps = {
    children?: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer( process.env.NODE_ENV === 'development'
    ? logger(AuthReducer) : AuthReducer,
        initialState
    )

    // const login = useCallback(async (values) => {
    //     dispatch({ type: AUTH_START })
    // }, [])
    

    const contextValue = useMemo(() => ({
        state,
        dispatch
        // login,
        // logout,
        // getCurrentUser,
    }), [state]);
    
    return (
        <AuthContext.Provider
            value={contextValue}
        >
            {children}
        </AuthContext.Provider>
    )
}
