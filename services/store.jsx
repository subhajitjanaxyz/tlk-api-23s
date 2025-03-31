import { configureStore } from "@reduxjs/toolkit";
import { jsonapi } from "./getApicall";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store=configureStore({
    reducer:{
        [jsonapi.reducerPath]:jsonapi.reducer
    },
    middleware: (getdefaultMiddlware)=>getdefaultMiddlware().concat(jsonapi.middleware)
});
setupListeners(store.dispatch)