import { Interceptors } from "./Interceptors";
import {requestConfig} from "@/utils/http/requestConfig";
import {HttpResponse} from "@/types/HttpResponse";

// 请求配置
export class HttpServer {
    public axios: any;
    // 获取axios实例
    constructor() {
        this.axios = new Interceptors().getInterceptors();
    }
    //  请求
    async request(config: requestConfig): Promise<HttpResponse> {
        return new Promise((resolve, reject) => {
            this.axios(config).then((res: HttpResponse) => {
                resolve(res);
            }).catch((err: HttpResponse) => {
                reject(err)
            });
        });
    }
}

const request = new HttpServer()
export default request