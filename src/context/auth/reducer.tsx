

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
    activeAccount?: unknown,
}

export type ReducerAction = {
    type: REDUCER_ACTION_TYPES,
    payload?: unknown
}

// const initialState

export const AuthReducer = (state: StateType, action: ReducerAction) => {
    switch(action.type) {
        case REDUCER_ACTION_TYPES.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case REDUCER_ACTION_TYPES.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload,
                authenticated: false,
            }
        case REDUCER_ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
                authenticated: true,
            }
        case REDUCER_ACTION_TYPES.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
                authenticated: false,
            }
        case REDUCER_ACTION_TYPES.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}