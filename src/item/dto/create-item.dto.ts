export class CreateItemDto{
    readonly itemname: string;
    readonly unit: string;
    readonly itemcode: string;
    readonly hsn: string;
    readonly saleprice: string;
    readonly purchaseprice: string;
    readonly taxrate: string;
    readonly img: string;

    readonlyqty:number;
    static description: any;
    
}