import { GetPage2DataReq, GetPage2DataResp } from '@/types/page2';
import { get } from '../index';

export const enum Page2Api {
  GetPage2Data = '/getPage2Data'
}

export const getPage2Data = get<GetPage2DataReq, GetPage2DataResp>(Page2Api.GetPage2Data);
