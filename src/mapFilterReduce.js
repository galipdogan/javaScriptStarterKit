let cart = [
  { id: 1, productName: `Telefon`, quantity: 3, unitPrice: 4000 },
  { id: 2, productName: `Bardak`, quantity: 2, unitPrice: 30 },
  { id: 3, productName: `Kalem`, quantity: 1, unitPrice: 20 },
  { id: 4, productName: `Sarj Cihazi`, quantity: 2, unitPrice: 100 },
  { id: 5, productName: `Kitap`, quantity: 3, unitPrice: 30 },
  { id: 6, productName: `Kahve`, quantity: 5, unitPrice: 150 },
];


//map demek Ekrana yazdirma tek tek dolasmaya yarar. Dolasirken de nesne nesne geziyor. Iterate eder.
console.log(`<ul>`);
cart.map((product) => {
  console.log(`<li>`+ product.productName + ` : ` + product.unitPrice * product.quantity+`</li>`);
});
console.log(`</ul>`);

//reduction yapiyoruz toplami aliyoruz. Cok sik kullanilmiyor.
let total= cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)
console.log(total);


//filter filtreleme için kullanıyoruz. Istersek yeni bir array yaparak kullanabiliriz
let quantittyOver2=cart.filter(product=>product.quantity>2)

console.log(quantittyOver2);












function addToCart(sepet) {
  sepet.push({ id: 7, productName: `Kalem Tiras`, quantity: 1, unitPrice: 20 });
}

addToCart(cart);

console.log(cart);

let sayi = 10;

function sayiTopla(number) {
  number += 1;
}

sayiTopla(sayi);
console.log(sayi);
