import { createSlice } from '@reduxjs/toolkit';
import Echo from 'laravel-echo';
import io from 'socket.io-client';
window.io = io;
const echoSlice = createSlice({
  name: 'echo',
  initialState: {
    echoObject : {}
  },
  reducers: {
    updateEcho: (state, action) => {
      const echo = new Echo({
        broadcaster: 'socket.io',
        host: `${window.location.hostname}:6001`,
      });
      state.echoObject = echo;
    }
  },
});

export const { updateEcho } = echoSlice.actions;
const { reducer } = echoSlice;
export default reducer;