import { useInfiniteQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import queryString from 'query-string';

import { ContentLanguages, Status, Rate } from '@/features/task/types';
import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';
// just a funnyname
export interface Searchgination {
  data: {
    merchant: Merchant;
    task: SearchTask;
  }[];
  meta: Meta;
}

interface Merchant {
  description: string | null;
  merchantId: number;
  name: string;
}

export interface SearchTask {
  description: ContentLanguages;
  id: string;
  imageUrl: string[];
  locationUrl: string[];
  name: ContentLanguages;
  phone: string;
  status: Status;
  createdDate: string;
  createdBy: string;
  tags: string[];
  taskDetail: Rate[];
}

interface Meta {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number;
  totalPage: number;
  totalRecord: number;
}

const search = async (accessToken?: string, param?: any) => {
  const res = await AgApi.get<Searchgination>(param, {
    headers: { ...getAuthHeader(accessToken) },
  });
  return res.data;
};

export const useSearch = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return useInfiniteQuery<Searchgination>(
    ['search', router.query],
    async ({ pageParam = 1 }) => {
      const query = queryString.stringify(
        {
          currentPage: pageParam,
          limit: 6,
          provinceId: 1,
          status: 'ACTIVE',
          ...router.query,
        },
        {
          skipNull: true,
        },
      );
      const data = await search(
        session?.access_token as string,
        `search?${query}`,
      );
      return data;
    },
    {
      getNextPageParam: (response) => {
        return response.meta.hasNextPage
          ? response.meta.currentPage + 1
          : undefined;
      },
    },
  );
};
