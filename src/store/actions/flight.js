import actionTypes from './actionTypes'
import * as apis from '../../services'
// import Amadeus from 'amadeus'

export const getFlights = () => async (dispatch) => {
    try {
        const response = await apis.apiGetFlights()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_FLIGHTS,
                flights: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_FLIGHTS,
            flights: null
        })
    }
}

export const searchFlights = (query) => async (dispatch) => {
    try {

        const response = await apis.apisearchFlights(query)

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.SEARCH_FLIGHTS,
                flights: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.SEARCH_FLIGHTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.SEARCH_FLIGHTS,
            flights: null
        })
    }
}

export const updateData = (dataUpdate) => ({
    type: actionTypes.UPDATE_DATA,
    dataUpdate
})

export const resetDataUpdate = () => ({
    type: actionTypes.RESET_DATAUPDATE,
})

// export const searchFlightsAmadeus = (searchData) => async (dispatch) => {
//     try {
//         const amadeus = new Amadeus({
//             clientId: 'perd9CD0fiGJ6Sf4AcKoDhH4c3jECk1B',
//             clientSecret: 'CPue1uAt81SsAW0g',
//         });
//         const response = await amadeus.shopping.flightOffersSearch.get({
//             originLocationCode: searchData.departure_airport_id,
//             destinationLocationCode: searchData.arrival_airport_id,
//             departureDate: searchData.departure_time,
//             adults: searchData.adultCount,
//             children: searchData.childCount,
//             infants: searchData.infantCount,
//             class: searchData.class_name,
//         });

//         dispatch({
//             type: actionTypes.SEARCH_FLIGHTS,
//             payload: response.data.offers,
//         });
//     } catch (error) {
//         console.error('Error searching flights:', error);
//     }
// };
