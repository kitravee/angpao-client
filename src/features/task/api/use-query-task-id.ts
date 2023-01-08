import AgApi from '@/lib/ag-axios';
import { getAuthHeader } from '@/utils/auth-header';

import { Task } from '../types';

interface ResponseTask {
  data: Task;
}

export const queryTaskId = async (id?: string, accessToken?: string) => {
  const response = await AgApi.get<undefined, ResponseTask>(`tasks/${id}`, {
    headers: { ...getAuthHeader(accessToken) },
  });
  return response.data;
};
