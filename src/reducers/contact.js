import { SHOW_ERRORS, IS_LOADING, SET_MESSAGE, UPDATE_FORM } from './types';

const initialState = {
    isLoading: false,
    showErrors: false,
    message: {
        text: '',
        type: ''
    },
    form: {
        name: '',
        phone: '',
        email: '',
        message: ''
    }
}

export default function contact(state = initialState, action = {}) {
    switch (action.type) {
        case SHOW_ERRORS:
            return {
                ...state,
                showErrors: action.value
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case UPDATE_FORM:
            return {
                ...state,
                form: { ...state.form, ...action.value }
            }
        case SET_MESSAGE:
            if (action.value.type === "OK") {
                return {
                    ...initialState,
                    message: action.value
                }
            } else {
                return {
                    ...state,
                    message: action.value
                }
            }
        default:
            return state;
    }
}