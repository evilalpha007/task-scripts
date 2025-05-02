import axios from 'axios';
import { Launches } from './types';

export const getLaunches = async (): Promise<Launches[]> => {
    const res = await axios.get('https://api.spacexdata.com/v4/launches');
    return res.data;
};
