import actionTypes from '../actions/actionTypes'

const initState = {
    airlines: [],
    msg: ''
}

const airlineReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_AIRLINES:
            return {
                ...state,
                airlines: action.airlines || [],
                msg: action.msg || ''
            }

        default:
            return state
    }
}

export default airlineReducer