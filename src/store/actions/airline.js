import actionTypes from './actionTypes'
import * as apis from '../../services/airline'

export const getAirlines = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAirlines()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AIRLINES,
                airlines: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AIRLINES,
            airlines: null
        })
    }
}