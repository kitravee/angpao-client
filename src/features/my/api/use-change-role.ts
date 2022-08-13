import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';

import { MySubmitForm } from '../types';

type MyResponse = {
  data: any;
  statusCode: 200 | 500;
  message: '';
};

type MyRequest = MySubmitForm;

export const changeRole = async (data: MyRequest, accessToken?: string) => {
  const response = await AgApi.post<MyRequest, MyResponse>(
    `/users/change-role
    `,
    data,
    {
      headers: {
        ...getAuthHeader(accessToken),
      },
    },
  );
  return response.data;
};

export const useChangeRole = () => {
  const { data } = useSession();
  return useMutation({
    mutationFn: (params: MySubmitForm) => {
      return changeRole(params, data?.access_token);
    },
  });
};
