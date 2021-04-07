export class SalesPerson {

    public email:string;

    constructor(public firstName:string,
        public lastName:string,
        
        public saleVolume:number )
        {
            this.email=this.lastName+"@camacode.com";
        }
}
