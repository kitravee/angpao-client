import { useMutation } from '@tanstack/react-query';

import AgApi from '@/lib/ag-axios';

import { SignupFormData } from '../types';

type SignupResponse = {
  data: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    status: 'ACTIVE' | 'INACTIVE';
    description: string;
    createdDate: string;
    updatedDate: string;
    role: {
      id: number;
      name: 'MERCHANT' | string;
    };
    email: string;
  };
  statusCode: 200 | 500;
  message: '';
};

type SignupRequest = SignupFormData;

export const postSignup = async (data: SignupFormData) => {
  const response = await AgApi.post<SignupRequest, SignupResponse>(
    `/users`,
    data,
  );
  return response.data;
};

export const usePostSignup = () => {
  return useMutation({
    mutationFn: (params: SignupFormData) => {
      return postSignup(params);
    },
  });
};
