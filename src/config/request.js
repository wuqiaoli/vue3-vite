import axios from "axios"
import { ERROR_CODE } from "@/config/errCode.js"
import { ElMessage, ElNotification } from 'element-plus'
// * 自定义实例默认值
const request = axios.create({
  baseURL: 'XX',
  timeout: 100000
})

// * 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 每个请求添加token
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// * 添加响应拦截器
axios.interceptors.response.use(
  res => {
    const { code, data, desc } = res;
    // * 异常处理
    if (code != 1) {
      // * 10086 token 过期
      if (code == 10086) {
        ElMessage.error(ERROR_CODE[code])
        return Promise.reject(new Error(ERROR_CODE[code]))
      }
      // 如果code === 501，则是批量导入异常的提示，应该是一个唯一标识
      if (code == 501) {
        // 格式化信息
        let msgData = [];
        data.forEach(item => {
          const msg = `行号：${item.errorRow},内容${item.errorList.join(",")}`;
          msgData.push(msg)
        });
        ElNotification({
          title: '温馨提示',
          message: msgData.join("<br>"),
          duration: 0,
          dangerouslyUseHTMLString: true,
          customClass: 'importCSVHeight'
        });
        return Promise.reject('error')
      }
      ElMessage.error(desc ?? ERROR_CODE.default)
      return res
    }
    return res
  },
  err => {
    const status = err.response ? err.response.status : "";
    ElMessage.error(ERROR_CODE[status] ?? ERROR_CODE.default)
    return Promise.reject(err)
  }
)

export default request