import { TaskFormData } from '../../types';

export const DEFAULT_TASK_FORM = {
  title: { th: '', en: '' },
  description: { th: '', en: '' },
  phone: '',
  locationUrl: '',
  tags: [],
  imageUrl: [],
  rates: [
    {
      rateType: 'THAI',
      rateValue: undefined,
      serviceValue: undefined,
    },
    {
      rateType: 'THAI',
      rateValue: undefined,
      serviceValue: undefined,
    },
  ],
  taskDetail: { th: '', en: '' },
} as TaskFormData;
