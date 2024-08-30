const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

class Product {
    constructor(id, title, price, stock, photo, onsale, supplier, colors, description, taxPolicy) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.photo = photo;
        this.onsale = onsale;
        //private attribute
        this._supplier = supplier;
        //array of colors
        this.colors = colors;
        //description
        this.description = description;
        this.taxPolicy = taxPolicy;
    }

    get supplier() {
        return this._supplier;
    }
    set supplier(newName) {
        this._supplier = newName;
    }

    sellUnits(units){
        this.stock = this.stock - units
    }

}

// Crear seis instancias de la clase Product

const product1 = new Product("001", "Laptop LG Gram Intel Evo Core i7 Ultraligera Panel IPS de 17” 11 Generación", 6399, 10, ["./assets/Laptop Lg Gram Intel.jpeg"], "15% off", "TechStore", ["black", "orange", "green"], "balbalbla", "18 IGV");
const product2 = new Product("002", "Galaxy S24", 800, 15, ["./assets/pe-galaxy-s23-s918-sm-s918bzkvltp-thumb-534855456.webp", './assets/s24-2.webp', './assets/s24-3.webp', './assets/s24-4.webp'], "15% off", "MobileWorld", ["black", "orange", "green"], "balbalbla", "18 IGV");
const product3 = new Product("003", "Tablet 8\"", 200, 20, ["./assets/tablet-galaxy-s9.jpeg"], "15% off", "TabletCo", ["black", "orange", "green"], "balbalbla", "18 IGV");
const product4 = new Product("004", "Smartwatch Fitness", 150, 30, ["./assets/smart-watch.jpg"], "15% off", "WearableTech", ["black", "orange", "green"], "balbalbla", "18 IGV");
const product5 = new Product("005", "Cámara Reflex", 450, 8, ["./assets/camara-reflex.webp"], "15% off", "CameraShop", ["black", "orange", "green"], "balbalbla", "18 IGV");
const product6 = new Product("006", "Auriculares Bluetooth", 75, 50, ["./assets/auriculates-bluetooh.jpg"], "15% off", "AudioSolutions", ["black", "orange", "green"], "balbalbla", "18 IGV");

// Verificando una de las instancias
console.log(product1);


const products = [product1, product2, product3, product4, product5, product6];

