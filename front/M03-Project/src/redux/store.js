import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer'

const store = configureStore({
    reducer: {
        userData: userReducer
    }
})

export default store;