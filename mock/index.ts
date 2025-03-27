import { MockMethod } from 'vite-plugin-mock';
import { Page1Api } from '../src/request/page1';
import { Page2Api } from '../src/request/page2';
import getPage1Data from './data/page1/getPage1Data.json';
import getPage2Data from './data/page2/getPage2Data.json';

const enum Method {
  Post = 'post',
  Get = 'get'
}

export default [
  {
    url: Page1Api.GetPage1Data,
    method: Method.Get,
    response: getPage1Data
  },
  {
    url: Page2Api.GetPage2Data,
    method: Method.Get,
    response: getPage2Data
  }
] as MockMethod[];
