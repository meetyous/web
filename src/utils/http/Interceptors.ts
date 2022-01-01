// 首先引入axios和上一步封装的cookie方法
import axios ,{ AxiosInstance } from "axios";
import errorMsg from "@/utils/http/errorMsg";
import {ElMessage} from "element-plus";
import {config} from "@/utils/http/config";


export class Interceptors {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create(config);
        this.init();
    }

    // 初始化拦截器
    init() {
        // 请求接口拦截器
        this.instance.interceptors.request.use(

            (config) => {// 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
                debugger;
                if (config.headers) {
                    config.headers["toke"] = "toke"
                }
                return config
            },
            (err) => {
                console.error(err);
            }
        );
        // 响应拦截器
        this.instance.interceptors.response.use(
            (response) => {/**
             * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
             * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
             */
            const status = response.status
                let msg = ''
                if (status < 200 || status >= 300) {
                    // 处理http错误，抛到业务代码
                    msg = errorMsg(status)
                    ElMessage({
                        showClose: true,
                        message: msg,
                        type: 'error',
                    })
                }
                return response;
            },
            (error) => {
                if (error.message === "Request failed with status code 500") {
                    console.error("系统错误，请检查API是否正常！");
                    return;
                }
                let code = -110;
                let msg = ''
                if (error && error.response && error.response.status) {
                    code = error.response.status;
                    // 登陆过期
                    if (code === 401 || code === -3) {

                    }
                    msg = errorMsg(code)
                    ElMessage({
                        showClose: true,
                        message: msg,
                        type: 'error',
                    })
                } else {
                    console.error(error.message);
                }
                const err = { errCode: -110, errMsg: error.message || "Error" };
                return Promise.resolve(err);
            }
        );
    }
    // 返回一下
    getInterceptors() {
        return this.instance;
    }
}