import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../Features/counterSlice'

export default configureStore({
    reducer:{
        counter: counterSlice
    }
})