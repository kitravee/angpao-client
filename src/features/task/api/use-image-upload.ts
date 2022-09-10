import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';

type ImageUploadedResponse = {
  data: {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    original_filename: string;
    api_key: string;
  };
};

export const uploadImage = async (data?: FormData, accessToken?: string) => {
  const response = await AgApi.post<FormData, ImageUploadedResponse>(
    `/upload`,
    data,
    {
      headers: { ...getAuthHeader(accessToken) },
    },
  );
  return response?.data;
};

export const useUploadImage = async () => {
  const { data } = useSession();

  return useMutation({
    mutationFn: (params: FormData) => {
      return uploadImage(params, data?.access_token);
    },
  });
};
