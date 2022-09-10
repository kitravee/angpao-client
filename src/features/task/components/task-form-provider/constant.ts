import { TaskFormData } from '../../types';

export const DEFAULT_TASK_FORM = {
  title: { th: '', en: '' },
  description: { th: '', en: '' },
  commissionType: 'FIX',
  categoryId: undefined,
  provinceId: undefined,
  phone: '',
  locationUrl: '',
  tags: [],
  imageUrl: undefined,
  thaiValue: '',
  foreignerValue: '',
  taskDetail: { th: '', en: '' },
} as TaskFormData;
