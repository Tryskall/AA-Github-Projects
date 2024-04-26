const arr = [5, 16, 31, 68];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
const names = ["Rebecca", "Rex", "Priyanka", "Roroy", "Kai", "Lana"];
for (let i = 1; i < names.length; i+=2) {
     {
        console.log(names[i]);
    }
}
const dishes = [0, 1, 2];

function cleanDishses() {
    for (let i = dishes.length -1; i >= 0; i--) {
        dishes.splice(i, 1);
    }
}
// const arr = [1,2,3,4,5,6,7,8,9];
// for (let i = 1; i < arr.length; i *= 2) {
//     console.log(arr[i]);
// }
