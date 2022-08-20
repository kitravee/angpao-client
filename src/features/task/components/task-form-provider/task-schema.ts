import * as yup from 'yup';

const ContentLanguagesSchema = yup.object().shape({
  th: yup.string().required('Required'),
  en: yup.string().optional(),
});

export const taskSchema = yup.object().shape({
  title: ContentLanguagesSchema,
  description: ContentLanguagesSchema,
  phone: yup
    .string()
    .min(10, 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก')
    .max(10, 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก'),
  // locationUrl: yup
  //   .string()
  //   .required('กรุณากรอกอีเมลล์')
  //   .required('Please Google map location'),
  tag: yup.array().optional(),
  // imageUrl: yup.object().shape({}),
  thaiRateValue: yup.string().required('Required'),
  thaiServiceValue: yup.string().required('Required'),
  foreignerRateValue: yup.string().required('Required'),
  foreignerServiceValue: yup.string().required('Required'),
  taskDetail: ContentLanguagesSchema,
});
