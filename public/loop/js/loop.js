for(let a=0; a<10; a++){
    console.log(a);
}

const numbers = [45, 4, 9, 16, 25];
for(let c in numbers) {
    console.log(numbers[c]);
}

const cars = ["BMW", "RUSI", "MOTORSTANK"];
for(let car of cars){
    console.log(car);
}

const word = "The quick brown hotdog";
for(let letter of word){
    console.log(letter);
}

let b = 20;
while (b<30){
    console.log(b);
    b++;
}