import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcoming:null,
    trendingMovies:null,
    
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcoming:(state,action)=>{
      state.upcoming =action.payload;
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMovies =action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcoming,addTrendingMovies } =
  moviesSlice.actions;
  
export default moviesSlice.reducer; 