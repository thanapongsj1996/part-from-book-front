import * as yup from 'yup'

export const YUP_VALIDATION = {
  FIRST_NAME: yup.string().required('กรุณาระบุชื่อของคุณ'),
  LAST_NAME: yup.string().required('กรุณาระบุนามสกุลของคุณ'),
  EMAIL: yup
    .string()
    .required('กรุณาระบุอีเมลของคุณ')
    .email('อีเมลของคุณไม่ถูกต้อง'),
  PHONE_NUMBER: yup
    .string()
    .required('Phone number is required')
    .matches(/^(?:\d){3}-?(?:\d){3}-?(?:\d){4}$/, 'Enter a valid phone number'),
  USERNAME: yup.string().required('กรุณาระบุชื่อผู้ใช้ของคุณ'),
  PASSWORD: yup
    .string()
    .required('กรุณาระบุรหัสผ่านของคุณ')
    .min(8, 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร')
    .matches(
      // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,}$/,
      // 'Must contain at least one uppercase letter, one lowercase letter, one number and one special character'
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'รหัสผ่านต้องประกอบไปด้วย ตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก และตัวเลขอย่างน้อยอย่างละ 1 ตัว'
    ),
  PASSWORD_CONFIRM: yup
    .string()
    .required('กรุณายืนยันรหัสผ่านของคุณ')
    .oneOf([yup.ref('password')], 'รหัสผ่านไม่ตรงกัน'),
  PEN_NAME: yup.string().required('กรุณาระบุนามปากกาของคุณ'),
}
