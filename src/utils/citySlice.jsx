import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    currentCity: "Delhi",
    currentCity7Day: null,
    cityInfo: null,
    searchCities: ["Tokyo", "Paris", "Istanbul", "Dubai", "Shanghai"],
    defaultCities: ["Delhi", "New York", "Berlin", "London", "Cape town"],
  },
  reducers: {
    addCity: (state, action) => {
      const newCity = action.payload.trim(); // will do trim the spaces
      if (newCity) {
        state.currentCity = newCity;
        state.searchCities.unshift(newCity);
        state.searchCities = state.searchCities.filter(
          (city) => city.trim() !== "" // remove empty strings if you put any by default
        ); 
      }
    },
    addCityInfo: (state, action) => {
      state.cityInfo = action.payload;
    },
    add7DayForcast: (state, action) => {
      state.currentCity7Day = action.payload;
    },
  },
});

export const { addCity, addCityInfo, add7DayForcast } = citySlice.actions;
export default citySlice.reducer;
