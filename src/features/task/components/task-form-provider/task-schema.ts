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
  provinceId: yup.number().required(),
  categoryId: yup.number().required(),
  commissionType: yup.string().required(),
  thaiValue: yup.string().required(),
  foreignerValue: yup.string().required(),
  // thaiValue: yup.string().when('commissionType', {
  //   is: 'FIX',
  //   then: yup.string().required('Required'),
  // }),
  // foreignerValue: yup.string().when('commissionType', {
  //   is: 'FIX',
  //   then: yup.string().required('Required'),
  // }),
  tag: yup.array().optional(),
  // imageUrl: yup.object().shape({}),

  taskDetail: ContentLanguagesSchema,
});
