import {HttpResponse} from "@/types/HttpResponse";
import request from '../utils/http/index';
import {requestConfig} from "@/utils/http/requestConfig";
import requestConstant from "@/constant/requestConstant";
import loginConstant from "@/api/apiConstant/loginConstant";


//封装User类型的接口方法
export class TestInfo {
    /**
     * @description 查询User的信息
     * @param {number} teamId - 所要查询的团队ID
     * @return {HttpResponse} result
     */
    static async login(params: object): Promise<HttpResponse> {
       let axiosPromise = await request.request(
           new requestConfig(loginConstant.loginApi,requestConstant.RES_POST,params,requestConstant.RES_TYPE_JSON));
       return axiosPromise;
    }
}