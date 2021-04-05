// arguments object no longer boung with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a+b;
};

const addArrow = (a,b) => { 
    // console.log(arguments);  Reference Error: arguments is not defined 
    return a+b;
};
console.log(add(55,1, 100));

console.log(addArrow(55,1, 100));

const user = {
    name: 'Zeynep',
    cities: ['Ankara', 'Istanbul', 'Izmir'],
    printPlacesLived() { // equals to printPlacesLived : function() {
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);
        }, user);

        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in 2 ' + city);
        });

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in 3 ' + city);
        });

    }
};

user.printPlacesLived();