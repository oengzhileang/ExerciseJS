const names = "Geroge Richard Richard Martin"

function firstLetter(names){
    // return names.split(' ').map(word => word[0]).reduce((acc,current)=> acc+current);

    // [ 'Geroge', 'Richard', 'Richard', 'Martin' ]
    const splitname = names.split(" ");

    //[ 'G', 'R', 'R', 'M' ]
    const mapName = splitname.map(name => name[0])

    //GRRM
    const SumFirstLetter = mapName.reduce((accumilator, current)=> accumilator+current)
    return SumFirstLetter;
}

console.log(firstLetter(names));