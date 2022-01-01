import { App } from "vue";
import request from "../utils/http/index";
import { AxiosInstance } from "axios";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        // @ts-ignore
        $axios?: AxiosInstance;
    }
}

export const axiosPlugin = {
    install(app: App): void {
        app.config.globalProperties.$axios = request;
    },
};

export default axiosPlugin