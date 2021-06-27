import axios from "axios";
import Vue from "vue";
import router from "../src/router";

const http = axios.create({
    baseURL: 'http://localhost:8089/api'
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (localStorage.token) {
        config.headers.Authorization = `Bearer ${localStorage.token}`
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


//响应拦截器
/* http.interceptors.response.use(res => {
    if (res.config.url === 'login') {
        Vue.prototype.$message({
            type: 'success',
            message: res.data.message
        })
    }
    return res
}, err => {
    const message = err.response.data.message

    if (message) {
        Vue.prototype.$message({
            type: 'error',
            message
        })
    }

    if (err.response.status === 401) {
        router.push('/login')
    }
}) */

export default http