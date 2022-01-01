export let config:any = {
    baseURL : process.env.VUE_APP_BASE_API,
    timeout: 3000,
    common: "test",
    headers: {'X-Requested-With': 'XMLHttpRequest'}
}

export default {config};