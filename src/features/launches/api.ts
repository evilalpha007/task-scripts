import axios from 'axios';
import { Launch } from './types';

export const getLaunches = async (): Promise<Launch[]> => {
    const res = await axios.get('https://api.spacexdata.com/v4/launches');
    return res.data;
};
