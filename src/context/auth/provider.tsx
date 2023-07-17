/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    createContext,
    useReducer,
    ReactNode,
    Dispatch,
    useMemo,
    useCallback,
    useState,
    useEffect
} from 'react'
import logger from 'use-reducer-logger'
import {
    AuthReducer,
} from './reducer'
import { useNavigate } from 'react-router-dom'
import { setAuthToken, getAuthToken } from '../../services'
import { Loading } from '../../components'


enum REDUCER_ACTION_TYPES {
    AUTH_START = 'AUTH_START',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGOUT_START = 'LOGOUT_START',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_FAIL = 'LOGOUT_FAIL'
  }

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
    login: ({ email, password }: { email: string; password: string }) => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthProviderProps = {
    children?: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate()
    const [loadingApp, setLoadingApp] = useState<boolean>(true)
    const [state, dispatch] = useReducer( process.env.NODE_ENV === 'development'
    ? logger(AuthReducer) : AuthReducer,
        initialState
    )
    
    // const login = ({ email, password }: { email: string; password: string }): void => {
    //     try {
    //         dispatch({ type: REDUCER_ACTION_TYPES.AUTH_START });
    //         if (email === 'admin@gmail.com' && password !== '12345') return dispatch({type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password'})
    //         if (email === 'admin@gmail.com' && password === '12345') {
    //             const data = {
    //                 role: 'manager',
    //                 email: 'admin@gmail.com',
    //                 firstName: 'admin',
    //                 lastName: 'admin'
    //             }
    //             setAuthToken(data);
    //             dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
    //             navigate('/')
    //         }
    //         if (email === 'evey@gmail.com' && password !== '12345') return dispatch({type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password'})
    //         if (email === 'evey@gmail.com' && password === '12345') {
    //             const data = {
    //                 role: 'presenter',
    //                 email: 'evey@gmail.com',
    //                 firstName: 'Evey',
    //                 lastName: 'Alabi'
    //             }
    //             setAuthToken(data);
    //             dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
    //             navigate('/')
    //         }
    //         if (email === 'peter@gmail.com' && password !== '12345') return dispatch({type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password'})
    //         if (email === 'peter@gmail.com' && password === '12345') {
    //             const data = {
    //                 role: 'presenter',
    //                 email: 'evey@gmail.com',
    //                 firstName: 'Peter',
    //                 lastName: 'Alabi'
    //             }
    //             setAuthToken(data);
    //             dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
    //             navigate('/')
    //         }
    //         if (email === 'victor@gmail.com' && password !== '12345') return dispatch({type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password'})
    //         if (email === 'victor@gmail.com' && password === '12345') {
    //             const data = {
    //                 role: 'presenter',
    //                 email: 'victor@gmail.com',
    //                 firstName: 'Victor',
    //                 lastName: 'Alabi'
    //             }
    //             setAuthToken(data);
    //             dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
    //             navigate('/')
    //         }
    //         if (email === 'julian@gmail.com' && password !== '12345') return dispatch({type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password'})
    //         if (email === 'julian@gmail.com' && password === '12345') {
    //             const data = {
    //                 role: 'presenter',
    //                 email: 'julian@gmail.com',
    //                 firstName: 'Julian',
    //                 lastName: 'Alabi'
    //             }
    //             setAuthToken(data);
    //             dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
    //             navigate('/')
    //         }
    //     } catch (error) {
    //         const errorMessage = error || 'Unable to connect'
    //         dispatch({type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: errorMessage})
    //     }
    // } 
    const login = useCallback(({ email, password }: { email: string; password: string }): void => {
        try {
            dispatch({ type: REDUCER_ACTION_TYPES.AUTH_START });
            if (email === 'admin@gmail.com' && password !== '12345') return dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password' });
            if (email === 'admin@gmail.com' && password === '12345') {
              const data = {
                role: 'manager',
                email: 'admin@gmail.com',
                firstName: 'admin',
                lastName: 'admin',
              };
              setAuthToken(data);
              dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
              navigate('/');
            }
            if (email === 'evey@gmail.com' && password !== '12345') return dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password' });
            if (email === 'evey@gmail.com' && password === '12345') {
              const data = {
                role: 'presenter',
                email: 'evey@gmail.com',
                firstName: 'Evey',
                lastName: 'Alabi',
              };
              setAuthToken(data);
              dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
              navigate('/');
            }
            if (email === 'peter@gmail.com' && password !== '12345') return dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password' });
            if (email === 'peter@gmail.com' && password === '12345') {
              const data = {
                role: 'presenter',
                email: 'peter@gmail.com',
                firstName: 'Peter',
                lastName: 'Alabi',
              };
              setAuthToken(data);
              dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
              navigate('/');
            }
            if (email === 'victor@gmail.com' && password !== '12345') return dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password' });
            if (email === 'victor@gmail.com' && password === '12345') {
              const data = {
                role: 'presenter',
                email: 'victor@gmail.com',
                firstName: 'Victor',
                lastName: 'Alabi',
              };
              setAuthToken(data);
              dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
              navigate('/');
            }
            if (email === 'julian@gmail.com' && password !== '12345') return dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: 'Incorrect user name or password' });
            if (email === 'julian@gmail.com' && password === '12345') {
              const data = {
                role: 'presenter',
                email: 'julian@gmail.com',
                firstName: 'Julian',
                lastName: 'Alabi',
              };
              setAuthToken(data);
              dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
              navigate('/');
            }
        } catch (error) {
            const errorMessage = error || 'Unable to connect';
            dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL, payload: errorMessage });
          }
        },
        [dispatch, navigate]
    );
    


    const getCurrentUser = useCallback(() => {
        try {
            dispatch({ type: REDUCER_ACTION_TYPES.AUTH_START })
            const data =  getAuthToken();
            const res: unknown = JSON.parse(data as string)
            if (data) {
                dispatch({
                    type: REDUCER_ACTION_TYPES.LOGIN_SUCCESS,
                    payload: res,
                })
                return res
            }
        } catch (error) {
            dispatch({ type: REDUCER_ACTION_TYPES.LOGIN_FAIL }) 
            navigate('/login')
        }
    }, [navigate])

    useEffect(() => {
        const loadApp = () => {
            setLoadingApp(true)
            getCurrentUser()
            setLoadingApp(false)
        }
        loadApp()
    }, [getCurrentUser])

    const contextValue = useMemo(() => ({
        state,
        dispatch,
        login,
        // logout,
        getCurrentUser,
    }), [state, login, getCurrentUser]);
    

    if (loadingApp) {
        return <Loading fullscreen />
    }
    return (
        <AuthContext.Provider
            value={contextValue}
        >
            {children}
        </AuthContext.Provider>
    )
}
