const object = {a:1, b:2, c:3, d:4}

function filterProps(object,...propsFilter){

    // Create a new object to hold the filtered properties
    const filterObj = {};


    // Iterate through each property in the original object
    for(const key in object){

        // If the property is not in the list of properties to filter, add it to the new object
        if(!propsFilter.includes(key)){
            filterObj[key] = object[key]
        }
    }

    return filterObj;
}

console.log(filterProps(object,"b","d"));