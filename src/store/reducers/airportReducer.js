import actionTypes from '../actions/actionTypes'

const initState = {
    airports: [],
    msg: ''
}

const airportReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_AIRPORTS:
            return {
                ...state,
                airports: action.airports || [],
                msg: action.msg || ''
            }

        default:
            return state
    }
}

export default airportReducer