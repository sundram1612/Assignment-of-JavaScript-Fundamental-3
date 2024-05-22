const car = {
    make : 'Honda',
    model: 'City',
    year: 2024
}

function displayCarProperties(car){
    for(const property in car){
        console.log(`${property} : ${car[property]}`);
    }
}

displayCarProperties(car)