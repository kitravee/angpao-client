import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';

type CategoriesResponse = {
  data: Categories;
  statusCode: 200 | 500;
  message: '';
};

type Category = {
  id: number;
  name: {
    th: string;
    en: string;
  };
  status: 'ACTIVE' | 'INACTIVE';
};

export type Categories = Category[];

export const getCategories = async (accessToken?: string) => {
  const response = await AgApi.get<undefined, CategoriesResponse>('/category', {
    headers: { ...getAuthHeader(accessToken) },
  });
  return response.data;
};

export const useGetCategories = () => {
  const { data } = useSession();
  return useQuery({
    queryFn: () => {
      return getCategories(data?.access_token);
    },
    queryKey: ['categories'],
    staleTime: 60 * 1000,
    retry: 3,
  });
};
