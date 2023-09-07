import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk(
    'messages/getGreeting',
    async () => {
      try {
        const response = await fetch('https://www.greetingsapi.com/random');
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  );

const messageSlice = createSlice ({
    name: 'messages',
    initialState: {
        greeting: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getGreeting.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getGreeting.fulfilled, (state, action) => {
            state.isLoading = false;
            state.greeting = action.payload.greeting;
        })
        .addCase(getGreeting.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export default messageSlice.reducer;