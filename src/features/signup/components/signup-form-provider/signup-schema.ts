import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  userType: yup.string().required('กรุณาเลือกประเภทผู้ใช้'),
  email: yup
    .string()
    .required('กรุณากรอกอีเมลล์')
    .email('รูปแบบอีเมลล์ไม่ถูกต้อง'),
  password: yup
    .string()
    .min(6, 'รหัสผ่านขั้นต่ำ 6 หลัก')
    .max(20, 'รหัสผ่านเกิน 20 หลัก'),
  phone: yup
    .string()
    .min(10, 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก')
    .max(10, 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก'),
});
