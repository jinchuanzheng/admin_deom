import axios from "axios"
//创建axios对象
const Server = axios.create({
    //地址
    baseURL: "",
    //超时时间
    timeout: 3000,
});
Server.interceptors.request.use(config => {
    // Do something before request is sent

    const token = localStorage.getItem("jy_token") ? localStorage.getItem("yy_token") : "";

    config.headers.Authorization ="Bearer " + token;

    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

Server.interceptors.response.use(response => {
    // Do something before response is sent

    // if(response.data.code == "202"){
    //     localStorage.removeItem("yy_token");
    //     localStorage.removeItem("jy_info");
    //     router.push({path : "/login"})
    //   }
      
    if(response.status == 200){
        return response.data
    }
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

export default Server;