import {fetcher} from "./fetcher";
import useSWR from "swr";
import { APIData } from './definitions';


export const getWeather = () => {
    const data = useSWR<APIData, Error>('/data/2.5/forecast?q=ikeja&cnt=5&appid=274d2b8e3ffab7a8f8f7c0c226a162c6', fetcher);
    return data;
}