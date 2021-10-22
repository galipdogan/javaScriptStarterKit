console.log("Merhaba Kodlama.io");

//JS type safe degildir

let dolarDun=9.20
let dolarBugun = 9.30

{
    let dolarDun=9.10
}

console.log(dolarDun);

const euroDun = 11.2
//euroDun = 11

console.log(euroDun);

//array
//camelCasing
//PascalCasing
console.log("<ul>");
let konutKredileri=["Konut Kredisi",'Emlak Konut Kredisi',"Kamu Konut Kredisi"]

for (let i = 0; i < konutKredileri.length; i++) {
    //const element = konutKredileri[index];
    console.log("<li>"+konutKredileri[i]+"</li>");
}

console.log("</ul>");
