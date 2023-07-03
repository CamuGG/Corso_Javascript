function Smartphone (brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let iPhone = new Smartphone('apple', 'iphone', 1500);
let chuck = new Smartphone('Nokia', '3310', 10);

console.log(iPhone, chuck);
