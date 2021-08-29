import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../slice/albumSlice";

export default configureStore({
  reducer: {
    album: albumReducer,
  },
});
