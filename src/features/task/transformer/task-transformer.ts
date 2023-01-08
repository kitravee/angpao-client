import { TaskFormData, TaskFormSubmitData } from '../types';

export const taskSubmitTransform = (data: TaskFormData): TaskFormSubmitData => {
  return {
    title: data?.title,
    description: data?.description,
    provinceId: data.provinceId, //????
    categoryId: data?.categoryId || '12', //????
    locationUrl: data?.locationUrl,
    phoneNumbers: [data?.phone],
    taskDetail: data?.taskDetail,
    rates: [
      {
        commissionType: 'THAI',
        commissionValue: parseFloat(data?.thaiValue.replace(/,/g, '')),
        commissionRateType: data?.commissionType,
        serviceValue: 0,
      },
      {
        commissionType: 'FOREIGNER',
        commissionValue: parseFloat(data?.foreignerValue.replace(/,/g, '')),
        commissionRateType: data?.commissionType,
        serviceValue: 0,
      },
    ],
    tags: data?.tags,
    imageUrl: [data?.imageUrl] as any[],
  };
};
