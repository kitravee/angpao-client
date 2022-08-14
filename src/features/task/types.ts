export interface TaskFormData {
  title: ContentLanguages;
  description: ContentLanguages;
  phone: string;
  locationUrl: string;
  tags: string[];
  imageUrl: string[];
  rates: Rate[];
  taskDetail: ContentLanguages;
}

type ContentLanguages = Record<'th' | 'en', string>;
type Rate = {
  rateType: 'THAI' | 'FOREIGNER';
  rateValue?: string;
  serviceValue?: string;
};
