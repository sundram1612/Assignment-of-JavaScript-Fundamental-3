function countProperties(obj){
    return Object.keys(obj).length;
}

const exampleObject = {a: 1, b: 2, c: 3}

console.log('Number of Properties in exapleObject = ', countProperties(exampleObject));