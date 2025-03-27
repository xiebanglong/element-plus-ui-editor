import { GetPage1DataReq, GetPage1DataResp } from '@/types/page1';
import { get } from '../index';

export const enum Page1Api {
  GetPage1Data = '/getPage1Data'
}

export const getPage1Data = get<GetPage1DataReq, GetPage1DataResp>(Page1Api.GetPage1Data);
