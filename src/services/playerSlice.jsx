import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialiseSelector, slice } from "../utils/Utils";

const initialState = {
  isPending: false,
  hasError: false,
  data: {},
};

export const getPlayer = createAsyncThunk(
  "player/getPlayer",
  async (params) => {
    const { data, headers } = await axios.get(
      `https://www.balldontlie.io/api/v1/players`,
      {
        params: {
          page: params?.page,
          per_page: params?.size,
        },
      }
    );
    return { data, headers };
  }
);

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: {
    ...slice(getPlayer),
  },
});

const playerReducer = playerSlice.reducer;

export const playerSelector = ({ players }) => initialiseSelector(players);

export default playerReducer;
