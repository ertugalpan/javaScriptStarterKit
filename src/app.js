console.log("Merhaba Kodlama.io")

//JS type safe değildir

let dolarBugun = 9.30

let dolarDun = 9.2
dolarDun = "9.20"
{
    let dolarDun =9.1
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11

console.log(euroDun)

//array ( array ise cogul isimlendirin)
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Ozel Konut Kredisi","Kamu Konut Kredisi"]


console.log("<ul>")
for(let i = 0; i < konutKredileri.length; i++){
    console.log("<li>"+konutKredileri+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)
