import * as yup from 'yup';

export const signinSchema = yup.object().shape({
  username: yup
    .string()
    .required('กรุณากรอกอีเมลล์')
    .email('รูปแบบอีเมลล์ไม่ถูกต้อง'),
  password: yup
    .string()
    .min(6, 'รหัสผ่านขั้นต่ำ 6 หลัก')
    .max(20, 'รหัสผ่านเกิน 20 หลัก'),
});
