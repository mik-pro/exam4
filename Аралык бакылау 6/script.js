let shop = {
    name: "magnum",
    phoneNamber: 87470437180,
    products: [
        {
            productName: "samsung A-72",
            category: "Элуктроника",
            price: 220, 
            stock:10
        },
        {
            productName: "фудболка",
            category: "киым",
            price: 1500,
            stock: 5
        },
        {
            productName: "milk",
            category:"прадукта",
            price: 500,
            stock:  30
        },
        {
            productName: "kola",
            category:"прадукта",
            price: 300,
            stock:  25
        },
        {
            productName: "computer",
            category:"электроника",
            price: 500,
            stock:  2
        },
        
    ],

}

console.log(shop);

let nameMagazin  = prompt("дукен атауын озгертыныз") 
changeShopName(nameMagazin)
function changeShopName(magazinAty){
    shop.name=magazinAty
}
console.log(shop)
let nameNember  = prompt("номер озгерту")
changePhoneNumber(nameNember)
 function changePhoneNumber(newNember) {
    shop.phoneNamber=nameNember
 }  
 console.log(shop);
 function listProductNames(params) {
   return `${shop[0]}\n${shop[1]}\n${shop[2]}\n${shop[3]}`
 }
 alert(listProductNames())
 