import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    currentCity: "delhi",
    cityInfo: null,
    cities: [],
    defaultCities: ["delhi", "new York", "berlin", "london", "cape town"],
  },
  reducers: {
    addCity: (state, action) => {
      state.currentCity = action.payload;
      state.cities.push(action.payload);
      // state.defaultCities.push(action.payload)
    },
    addCityInfo: (state, action) => {
      state.cityInfo = action.payload;
    },
  },
});

export const { addCity,addCityInfo } = citySlice.actions;
export default citySlice.reducer;
