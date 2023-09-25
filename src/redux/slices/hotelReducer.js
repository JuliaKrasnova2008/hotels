import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setHotels: (state, action) => {
      let hotels = action.payload;
      state.hotels = hotels;
    },
  },
});

export default hotelsSlice.reducer; //экспортируем хранилище
export const { setHotels } = hotelsSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
