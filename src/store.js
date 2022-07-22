import {combineReducers, configureStore} from "@reduxjs/toolkit"
import UserDataReducer from './reducers/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'userData',
    storage,
  }
 
  const reducer = combineReducers({
    UserData : UserDataReducer
  })

  const persistedReducer=persistReducer(persistConfig,reducer)

  export const store = configureStore({
    reducer:persistedReducer
  })


//   this is only for redux toolkit

// const store = configureStore({
//     reducer: {
// UserData : UserDataReducer
//     }
// })

// export default store


// import  {configureStore} from "@reduxjs/toolkit"
// import loggedDataReducer from './reducers/userSlice'

// const store = configureStore({
//     reducer:{
//         loggedInData : loggedDataReducer
//     }
// })


// export default store


