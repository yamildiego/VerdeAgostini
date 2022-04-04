import { LOCALE_SET, IS_LOADING, SET_MESSAGE, SHOW_ERRORS, UPDATE_FORM } from "../reducers/types";
import Constants from "./../config";
import axios from "axios";

const server = axios.create({ withCredentials: true });

export const localeSet = (lang) => ({
  type: LOCALE_SET,
  lang,
});

export const isLoading = (value) => ({
  type: IS_LOADING,
  value,
});

export const showErrors = (value) => ({
  type: SHOW_ERRORS,
  value,
});
export const setMessange = (text, type) => ({
  type: SET_MESSAGE,
  value: { text, type },
});

export const updateForm = (form) => ({
  type: UPDATE_FORM,
  value: form,
});

export const sendFormAsync = (form) => {
  return async (dispatch) => {
    if (form.name === "" || form.message === "" || form.email === "") {
      dispatch(showErrors(true));
    } else {
      dispatch(isLoading(true));
      await server
        .post(`${Constants.urlServer}/contact`, { ...form, website: 0 })
        .then((response) => {
          if (response.data.status === "OK") dispatch(setMessange("contact.form.ok", "OK"));

          if (response.data.status === "ERROR") dispatch(setMessange("contact.form.error", "ERROR"));
          dispatch(isLoading(false));
        })
        .catch((error) => {
          dispatch(setMessange("contact.form.error", "ERROR"));
          dispatch(isLoading(false));
        });
    }
  };
};
