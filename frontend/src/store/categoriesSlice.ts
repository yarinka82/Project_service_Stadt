import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Category {
  id: number;
  name: string;
}

interface CategoriesState {
  items: Category[];
  loading: boolean;
  error: string | null;
}

interface CategoriesResponse {
  data: Category[];
}

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<
  Category[],
  void,
  { rejectValue: string }
>("categories/fetchCategories", async (_, thunkAPI) => {
  try {
    const response = await fetch("/categories");

    if (!response.ok) {
      return thunkAPI.rejectWithValue("Failed to fetch categories");
    }

    const result: CategoriesResponse = await response.json();

    return result.data;
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch categories");
  }
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export default categoriesSlice.reducer;