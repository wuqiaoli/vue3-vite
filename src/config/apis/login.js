import request from '@/config/request.js'
export function login() {
  return request({
    url: `/userms/sso/loginpost`,
    method: 'post',
    data: {
      userMobile: 'admin',
      password: '123456'
    }
  })
}