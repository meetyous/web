export class requestConfig{
    url?:string;
    method?:string;
    data?:object;
    params?:object;
    responseType?:string ;
    constructor(url:string,method:string,data:object,responseType:string){
        this.url= url
        this.method= method
        if(this.method == "get"){
            this.params = data;
        }else{
            this.data= data
        }
        this.responseType= responseType
    };
}