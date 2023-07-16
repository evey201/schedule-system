export const AUTH_START = 'AUTH_START'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

const enum REDUCER_ACTION_TYPE {
    AUTH_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
}

type StateType = {
    error?: unknown,
    loading?: boolean,
    authenticated?: boolean,
    data?: unknown,
    activeAccount?: unknown,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: unknown
}

// const initialState

export const AuthReducer = (state: StateType, action: ReducerAction) => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case REDUCER_ACTION_TYPE.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload,
                authenticated: false,
            }
        case REDUCER_ACTION_TYPE.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
                authenticated: true,
            }
        case REDUCER_ACTION_TYPE.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
                authenticated: true,
            }
        case REDUCER_ACTION_TYPE.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}