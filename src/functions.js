function addToCart(productName="Elma",quanitity) {
    console.log("Sepete Eklendi! : " + productName + "Adet : " + quanitity) ;
}

//addToCart();
addToCart(`Yumurta`,10);
//addToCart();


//Arrow Function
let sayHello = ()=>{
console.log(`Hello World!`);
}

sayHello()

let sayHello2 = function () {
    console.log(`Hello World 2`);
}

sayHello2()

function addToCart2(productName,quantity,unitInPrice) {
    //console.log(productName,quantity,unitInPrice); 
}

addToCart2(`Elma`,5,10)
addToCart2(`Armu`,2,20)
addToCart2(`Limon`,3,15)


let product1 = {productName: `Elma`, unitPrice :10, quantity:5}

function addToCart3(product) {
    console.log(`Ürün : ` +product.productName)
    console.log(`Adet : ` + product.unitPrice)
    console.log(`Fiyat : ` +product.quantity)
}


addToCart3(product1)

let product2 = {productName: `Elma`, unitPrice :10, quantity:5}
let product3 = {productName: `Elma`, unitPrice :10, quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName);

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1);


function addToCart4(productsffff) {
    console.log(products);
}

let products =[
    {productName: `Elma`, unitPrice :10, quantity:5},
    {productName: `Armut`, unitPrice :10, quantity:5},
    {productName: `Karpuz`, unitPrice :10, quantity:5}]

addToCart4(products);

function add(bisey,...numbers) { //rest
    let total=0
    for (let i = 0; i < numbers.length; i++) {
       total=total+numbers[i]
        
    }
    console.log(total);
    console.log(bisey);
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers=[10,20,30,50,40,60,5]

console.log( Math.max(...numbers));//spread


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name : "İç Anadolu",population:"20M"},
    {name : "Marmara",population:"30M"},
    {name : "Karadeniz",population:"10M"},
    [
        ["Ankara", "Konya"],    
        ["İstanbul", "Bursa"],    
        ["Sinop", "Trabzon"]    
    ]
]    

console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}=
{productName: `Elma`, unitPrice :10, quantity:5})

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);


