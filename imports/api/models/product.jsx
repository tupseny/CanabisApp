//flow
export class Product {
    constructor(doc) {
        this.name = doc.name;
        this.desc = doc.desc;
        this.qnt = doc.qnt ? doc.qnt : 0 ;
        this.img = doc.img;
        this.tags = doc.tags;
    }
}