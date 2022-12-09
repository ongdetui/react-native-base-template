import {createSlice} from '@reduxjs/toolkit';

export interface IAppState {}

export const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    // changeLanguage(state, action) {
    //   return (state = {
    //     ...state,
    //     language: action.payload,
    //   });
    // },
  },
  extraReducers: builder => {
    // builder.addCase(loadAppData.pending, state => {
    //   state.booted = false;
    // });
  },
});

export const {} = appSlice.actions;
export default appSlice.reducer;
