class ProductModel {
    constructor(doc) {
        this._name = doc._name;
        this._description = doc._description;
    }

    //Getter & Setters
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}