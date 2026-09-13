import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Aglomeration {
  id: number;
  name: string;
}

interface AglomerationsState {
  items: Aglomeration[];
  loading: boolean;
  error: string | null;
}

interface AglomerationsResponse {
  data: Aglomeration[];
}

const initialState: AglomerationsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchAglomerations = createAsyncThunk<
  Aglomeration[],
  void,
  { rejectValue: string }
>('aglomerations/fetchAglomerations', async (_, thunkAPI) => {
  try {
    const response = await fetch('/aglomerations');

    if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to fetch aglomerations');
    }

    const result: AglomerationsResponse = await response.json();

    return result.data;
  } catch {
    return thunkAPI.rejectWithValue('Failed to fetch aglomerations');
  }
});

const aglomerationsSlice = createSlice({
  name: 'aglomerations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAglomerations.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAglomerations.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAglomerations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export default aglomerationsSlice.reducer;