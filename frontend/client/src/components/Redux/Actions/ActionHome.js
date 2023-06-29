import axios from "axios";
import {
  getAllPosts,
  filterAcendent,
  filterDesendent,
  filterTime,
  getPostId,
  getSearchPosts,
  loginSwitch,
  menssageData
} from "../Reducer/HomeReducer";

export const getHomePosts = () => async (dispatch) => {
  const endpoint =
    "https://codecommunity-production.up.railway.app/codec/api/post/";
  const { data } = await axios.get(endpoint);
  dispatch(getAllPosts(data));
};

export const filterAZ = () => async (dispatch) => {
  const endpoint =
    "https://codecommunity-production.up.railway.app/codec/api/post/?ordering=title";
  const { data } = await axios.get(endpoint);
  dispatch(filterAcendent(data));
};

export const filterZA = () => async (dispatch) => {
  const endpoint =
    "https://codecommunity-production.up.railway.app/codec/api/post/?ordering=-title";
  const { data } = await axios.get(endpoint);
  dispatch(filterDesendent(data));
};

export const filterPublications = (payload) => async (dispatch) => {
  dispatch(filterTime(payload));
};

export const getPostIds = (id) => async (dispatch) => {
  const endpoint = `https://codecommunity-production.up.railway.app/codec/api/post/${id}`;
  const { data } = await axios.get(endpoint);
  dispatch(getPostId(data));
};

export const search = (name) => async (dispatch) => {
  const endpoint = `https://codecommunity-production.up.railway.app/codec/api/post/?search=${name}`;
  const { data } = await axios.get(endpoint);
  dispatch(getSearchPosts(data));
};

export const addHomePosts = (post) => async (dispatch) => {
  const url = await axios.post(
    "https://codecommunity-production.up.railway.app/codec/api/post/",
    post
  );
  return url;
};

export const fakeButton = () => (dispatch) => {
  const data = false;
  dispatch(loginSwitch(data));
};
export const fakeLogin = () => (dispatch) => {
  const data = true;
  dispatch(loginSwitch(data));
};