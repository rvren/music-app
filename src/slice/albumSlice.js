import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    albums: [],
  },
  reducers: {
    updateLikedAlbums: (state, action) => {
      state.albums = action.payload;
    }
  },
});

export const { updateLikedAlbums } = albumSlice.actions;

export default albumSlice.reducer;
