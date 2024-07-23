import actionTypes from '../actions/actionTypes'

const initState = {
    flights: [],
    dataUpdate: null,
    msg: ''
}

const flightReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_FLIGHTS:
            return {
                ...state,
                flights: action.flights || [],
                msg: action.msg || ''
            }
        case actionTypes.SEARCH_FLIGHTS:
            return {
                ...state,
                flights: action.flights || [],
                msg: action.msg || ''
            }
        case actionTypes.UPDATE_DATA:
            return {
                ...state,
                dataUpdate: action.dataUpdate || null
            }
        case actionTypes.RESET_DATAUPDATE:
            return {
                ...state,
                dataUpdate: null
            }
        default:
            return state
    }
}

export default flightReducer