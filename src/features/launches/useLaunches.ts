import { useQuery } from '@tanstack/react-query';
import { getLaunches } from './api';

export const useLaunches = () => {
    return useQuery({
        queryKey: ['launches'],
        queryFn: getLaunches,
    });
};
