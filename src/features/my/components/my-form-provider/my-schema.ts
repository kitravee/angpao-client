import * as yup from 'yup';

export const mySchema = yup.object().shape({
  // roleName: yup.string().required('กรุณาเลือกประเภทผู้ใช้'),
  userTypeInfo: yup.string().required('กรุณากรอกชื่อ'),
  merchantName: yup.string().optional(),
});
