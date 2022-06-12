/* eslint-disable func-names */
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  identifier: Yup.string().required("This is a required field"),
});

export const teamSchema = Yup.object().shape({
  name: Yup.string().required("This is a required field"),
  player_count: Yup.number(),
  region: Yup.string(),
  country: Yup.string(),
});
