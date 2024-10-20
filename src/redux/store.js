// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contacts/slice";
// import { filterReducer } from "./filters/slice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filterReducer,
//   },
// });

// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], // Зберігати лише токен
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // Додайте інші редюсери, наприклад contacts
  },
});

export const persistor = persistStore(store);
export default store;
