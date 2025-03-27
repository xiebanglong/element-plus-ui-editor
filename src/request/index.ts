import axios, { AxiosResponse } from 'axios';
import { Page1Api } from './page1';
import { Page2Api } from './page2';

export type Api = Page1Api | Page2Api;

export const get = <D extends JSONObject, T>(url: Api) => {
  return (params: D) => axios.get<Api, AxiosResponse<T>>(url, { params }).then(result => result.data);
};
