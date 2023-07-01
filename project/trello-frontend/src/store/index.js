import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})
