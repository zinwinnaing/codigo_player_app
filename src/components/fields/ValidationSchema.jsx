/* eslint-disable func-names */
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  identifier: Yup.string().required("This is a required field"),
});
