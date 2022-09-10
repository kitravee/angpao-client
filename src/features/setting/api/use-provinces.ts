import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';

type ProvinceResponse = {
  data: Provinces;
  statusCode: 200 | 500;
  message: '';
};

type Province = {
  id: number;
  name: {
    th: string;
    en: string;
  };
};

export type Provinces = Province[];

export const getProvinces = async (accessToken?: string) => {
  const response = await AgApi.get<undefined, ProvinceResponse>(
    '/master/province',
    {
      headers: { ...getAuthHeader(accessToken) },
    },
  );
  return response.data;
};

export const useGetProvinces = () => {
  const { data } = useSession();
  return useQuery({
    queryFn: () => {
      return getProvinces(data?.access_token);
    },
    queryKey: ['provinces'],
    staleTime: 60 * 1000,
    retry: 3,
  });
};
