const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" }
  ];
const GroupObject = items.reduce((acc, item)=>{
        //acc,item  is callback function for reduce methoad

        //acc: the accumulator, which will hold the grouped items.
        //item: The current item being processed in the array.

        ///const category = item.category;: Extracts the category property from the current item and assigns it to the category variable.
        const category = item.category;


        //Checks if the accumulator object (acc) already has a property with the name of the current category.
        if(!acc[category]){

                //If the property does not exist (!acc[category]), it creates an empty array for that category (acc[category] = []).
                acc[category] = []
        }

        // Adds the name of the current item to the array corresponding to the current category in the accumulator object.
        acc[category].push(item.name);

        // Returns the accumulator object to be used in the next iteration.
        return acc

},{})    // First, you call the reduce method and pass an empty object {} as the initial accumulator value:

console.log(GroupObject);

// const groupObject = items.reduce((acc,item)=>{
// const category = item.category
//      if (acc[category]) {
//             acc[category].push(item.name);
//     } else {
//             acc[category] = [item.name];
//     }
//     return acc;

// },{})

// console.log(groupObject);

















//   const groupedItems = items.reduce((acc, item) => {
//     if (acc[item.category]) {
//             acc[item.category].push(item.name);
//     } else {
//             acc[item.category] = [item.name];
//     }
//     return acc;
//   }, {});

//   console.log(groupedItems);
