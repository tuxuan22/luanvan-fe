import authReducer from './authReducer'
import userReducer from './userReducer'
import flightReducer from './flightReducer'
import airportReducer from './airportReducer'
import airlineReducer from './airlineReducer'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { persistReducer } from 'redux-persist'

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}


const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
    flight: flightReducer,
    airport: airportReducer,
    airline: airlineReducer,
})

export default rootReducer