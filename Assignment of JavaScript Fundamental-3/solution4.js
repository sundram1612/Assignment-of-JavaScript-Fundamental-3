function hasProperty(obj, propertyName){
    return obj.hasOwnProperty(propertyName);
}

const exampleObject = {name: 'Sundram', age: 21}
console.log(`Does exampleObject have 'age' Property : `, hasProperty(exampleObject, "age"));
console.log(`Does exampleObject have 'email' Property : `, hasProperty(exampleObject, "email"));
