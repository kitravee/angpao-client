import { TaskFormData } from '../../types';

export const DEFAULT_TASK_FORM = {
  title: { th: '', en: '' },
  description: { th: '', en: '' },
  phone: '',
  locationUrl: '',
  tags: [],
  imageUrl: [],
  thaiRateValue: '',
  thaiServiceValue: '',
  foreignerRateValue: '',
  foreignerServiceValue: '',
  taskDetail: { th: '', en: '' },
} as TaskFormData;
