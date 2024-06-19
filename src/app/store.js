import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import userReducer, { login } from './userSlice';
import echoReducer, { updateEcho } from './echoSlice';
const rootReducer = {
    chat : chatReducer,
    echo : echoReducer,
    user: userReducer
}
const store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
    })    
}); 
store.dispatch(updateEcho());
store.dispatch(login());
export default store;

