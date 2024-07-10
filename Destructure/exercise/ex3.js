const user = { id: 1, name: "Sok", address: {street: "123 Main St", city: "pp" }}

const {address:{street,city}} = user

console.log(street,city);