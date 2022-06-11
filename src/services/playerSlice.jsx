import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialiseSelector, slice } from "../utils/Utils";
import { API_URL } from "../variables/constants";

const initialState = {
  isPending: false,
  hasError: false,
  data: {},
  count: 0,
};

export const getPlayer = createAsyncThunk(
  "player/getPlayer",
  async (params) => {
    const { data, headers } = await axios.get(
      `https://www.balldontlie.io/api/v1/players`
    );
    return { data, headers };
  }
);

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: {
    ...slice(getPlayer, "id"),
  },
});

const playerReducer = playerSlice.reducer;

export const playerSelector = ({ players }) => initialiseSelector(players);

export default playerReducer;
