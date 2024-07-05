const products = [
    { name: 'Apple', price: 1.0, quantity: 10 },
    { name: 'Banana', price: 0.5, quantity: 0 },
    { name: 'Cherry', price: 2.0, quantity: 5 },
    { name: 'Date', price: 1.5, quantity: 0 },
    { name: 'Elderberry', price: 3.0, quantity: 7 }
];


function filterProducts(products){
    const result = [];
    for (let i = 0; i<products.length; i++){
        if(products[i].quantity>0){
            result.push(products[i]);
        }
    }
    return result;
}
console.log(filterProducts(products));
// function filterProducts(products) {
//     return products.filter((product) =>  product.quantity > 0);
// }
// console.log(filterProducts(products));