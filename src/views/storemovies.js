import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movie1: {},
    seatsBooking: [],
    movieName: "",
    moviePlot: "",
    moviePoster: ""
  },
  reducers: {
    seatsBooking: (state, action) => {
      state.seatsBooking = action.payload;
    },
    movieName: (state, action) => {
      state.movieName = action.payload;
    },
    moviePlot: (state, action) => {
      state.moviePlot = action.payload;
    },
    moviePoster: (state, action) => {
      state.moviePoster = action.payload;
    },
  }
});

export const { seatsBooking, movieName, moviePlot, moviePoster } = movieSlice.actions;

export default movieSlice.reducer;
