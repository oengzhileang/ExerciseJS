const dates = ["2024-01-01", "2024-02-02", "2024-04-04"];

const FormateDate = dates.map((date) => {
    const path = date.split("-");
    console.log(path)
    return `${path[2]}/${path[1]}/${path[0]}`
});

console.log(FormateDate);