import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialiseSelector, slice } from "../utils/Utils";

const initialState = {
  isPending: false,
  hasError: false,
  data: {},
  meta: {},
};

export const getTeam = createAsyncThunk("team/getTeam", async (params) => {
  const { data, headers } = await axios.get(
    `https://www.balldontlie.io/api/v1/teams`,
    {
      params: {
        page: params?.page,
        per_page: params?.size,
      },
    }
  );
  return { data, headers };
});

export const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: {
    ...slice(getTeam),
  },
});

const teamReducer = teamSlice.reducer;

export const teamSelector = ({ teams }) => initialiseSelector(teams);

export default teamReducer;
