import {Product} from "../../api/models/product";
import {Category} from "../../api/models/category";
import {Products, Categories} from "../../api/lists/lists";

if (Meteor.isServer) {
    Meteor.startup(() => {
        //Products
        if (Products.find().count() === 0) {
            const p1 = new Product({
                name: 'Палатка',
                desc: 'Временное жилище из ткни, быстро возводимая сборно-разборная конструкция, предназначенная для защиты от неблагоприятных погодных условий и временного размещения и проживания людей, производства работ, хозяйственных нужд, а также складирования различных материалов, имущества и аппаратуры в полевых условиях',
                img: 'images/products/tent1.jpg',
                qnt: 2,
                tags: ['tent']
            });

            const p2 = new Product({
                name: 'НеПалатка',
                desc: 'Временное жилdище из ткddни, быстро возводимая сборно-разборная конструкция, предназначенная для защиты от неблагоприятных погодных условий и временного размещения и проживания людей, производства работ, хозяйственных нужд, а также складирования различных материалов, имущества и аппаратуры в полевых условиях',
                img: 'images/products/tent1.jpg',
                qnt: 3,
                tags: ['non-tent']
            });

            const count = 5;
            for (let i = 0; i < count; i++) {
                Products.insert(p1);
            }

            Products.insert(p2);
        }

        //Categories
        if (Categories.find().count() === 0) {
            const c1 = new Category({
                name: 'Палатки',
                desc: 'Временное жилище из ткани, быстро возводимая сборно-разборная конструкция, предназначенная для защиты от неблагоприятных погодных условий и временного размещения и проживания людей, производства работ, хозяйственных нужд, а также складирования различных материалов, имущества и аппаратуры в полевых условиях',
                img: 'images/categories/tents.jpg',
                tag: 'tent'
            });

            Categories.insert(c1);
        }
    })
}