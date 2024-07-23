import actionTypes from './actionTypes'
import * as apis from '../../services/airport'

export const getAirports = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAirports()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AIRPORTS,
                airports: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AIRPORTS,
            airports: null
        })
    }
}