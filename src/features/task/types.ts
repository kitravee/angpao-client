export interface TaskFormSubmitData {
  title: ContentLanguages;
  description: ContentLanguages;
  phone: string;
  locationUrl: string;
  tags: string[];
  imageUrl: string[];
  rates: Rate[];
  taskDetail: ContentLanguages;
}

export interface TaskFormData {
  title: ContentLanguages;
  description: ContentLanguages;
  phone: string;
  locationUrl: string;
  tags: string[];
  imageUrl: string[];
  thaiRateValue: string;
  thaiServiceValue: string;
  foreignerRateValue: string;
  foreignerServiceValue: string;
  taskDetail: ContentLanguages;
}

type ContentLanguages = Record<'th' | 'en', string>;
type Rate = {
  rateType: 'THAI' | 'FOREIGNER';
  rateValue?: string;
  serviceValue?: string;
};
