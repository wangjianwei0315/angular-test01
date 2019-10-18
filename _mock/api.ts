export default class Api {
  protected statusCode:number;
  protected message: string;
  protected data:any;

  constructor(statusCode: number) {
    this.statusCode = statusCode;
  }

  public static success(data:any=null){
    const api = new Api(200);
    api.message ="成功";
    api.data = data;
    return api;
  }
  public static error(msg:string){
    const api = new Api(300)
    api.message = msg;
    return api;
  }
  public static page(list:any[]){
    return this.success(
      {
        total: 100,
        list
      }
    )
  }

}
