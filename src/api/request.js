// 二次封装axios
import axios from "axios";

// 利用axios对象的方法create去创建一个axios实例
const requests = axios.create({
  // 配置路径
  baseURL:'http://localhost:3000',
  // 代表请求超时5秒
  timeout:5000
})
export default requests