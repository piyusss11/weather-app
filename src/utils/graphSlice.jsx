import { createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
  name: "graph",
  initialState: {
    dayGraph: null,
  },
  reducers: {
    addDayGraph: (state, action) => {
      state.dayGraph = action.payload;
    },
  },
});
export const { addDayGraph } = graphSlice.actions;
export default graphSlice.reducer;
