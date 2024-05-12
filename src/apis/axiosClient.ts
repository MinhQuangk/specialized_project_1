import axios from "axios";
import queryString from "query-string"; 

// Tạo một instance của Axios với cài đặt cụ thể
const axiosClient = axios.create({
    paramsSerializer: params => queryString.stringify(params) // Sử dụng query-string để tạo chuỗi query params
});

// Interceptor để thực hiện các hành động trước khi gửi yêu cầu
axiosClient.interceptors.request.use(async (config : any )=>{
    config.header = {
        Authorization:'',
        Accept:'application.js',
        ...config.header
    }
    config.data 
    return config 
});

// Interceptor để xử lý các phản hồi từ máy chủ trước khi sử dụng trong ứng dụng
axiosClient.interceptors.response.use(
    res=>{
        if(res.data && res.status === 200){
            return res.data 
        }
        throw new Error('Error')
    },error =>{
        console.log(`Error api ${JSON.stringify(error)}`) 
        throw new Error(error.response)
    }
);
export default axiosClient;