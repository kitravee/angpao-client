import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';

import { ContentLanguages, TaskFormSubmitData } from '../types';

interface CreateTaskResponse {
  data: {
    id: string;
    taskDetails: [
      {
        commissionType: string;
        commissionValue: number;
        serviceValue: number;
        commissionRateType: string;
        id: number;
      }[],
    ];
    name: {
      th: string;
      en: string;
    };
    category: {
      id: number;
      name: ContentLanguages;
      status: string;
    };
    phone: string[];
    createBy: number;
    createDate: string;
    description: ContentLanguages;
    detail: ContentLanguages;
    images: string[];
    locationUrl: string;
    provinceId: number;
    merchant: {
      id: number;
      name: string;
      createdDate: string;
      updatedDate: string;
      status: 'ACTIVE';
      description: null;
      serviceValue: number;
      serviceType: string;
    };
    status: string;
    updateBy: number;
    updateDate: string;
  };
}

export const createTask = async (
  data: TaskFormSubmitData,
  accessToken?: string,
) => {
  const response = await AgApi.post<TaskFormSubmitData, CreateTaskResponse>(
    `/tasks`,
    data,
    {
      headers: { ...getAuthHeader(accessToken) },
    },
  );
  return response.data;
};

export const useCreateTask = () => {
  const { data } = useSession();

  return useMutation({
    mutationFn: (params: TaskFormSubmitData) => {
      return createTask(params, data?.access_token);
    },
  });
};
