export interface TaskFormSubmitData {
  title: ContentLanguages;
  description: ContentLanguages;
  categoryId: string;
  provinceId?: number;
  phoneNumbers: string[];
  locationUrl?: string;
  tags?: string[];
  imageUrl?: string[];
  rates: Rate[];
  taskDetail: ContentLanguages;
}

export interface TaskFormData {
  title: ContentLanguages;
  description: ContentLanguages;
  commissionType?: 'FIX' | 'PERCENTAGE';
  categoryId?: string;
  provinceId?: number;
  phone: string;
  locationUrl?: string;
  tags: string[];
  imageUrl?: FormData;
  thaiValue: string;
  foreignerValue: string;
  taskDetail: ContentLanguages;
}

export type ContentLanguages = Record<'th' | 'en', string>;
type Rate = {
  id?: number;
  commissionType?: 'THAI' | 'FOREIGNER';
  commissionValue?: number;
  commissionRateType?: 'PERCENTAGE' | 'FIX';
  serviceValue?: number;
};
