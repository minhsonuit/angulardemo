export class Auth{
    expires:Date;
    issued:Date;
    access_token:String;
    exprires_in:Number;
    token_type:String;
    userName:String;
    constructor(ob:any)
    {
        this.expires = ob[".expires"];
        this.issued = ob[".issued"];
        this.access_token=ob["access_token"];
        this.exprires_in=ob["exprires_in"];
        this.token_type=ob["token_type"];
        this.userName=ob["userName"];

    }

}