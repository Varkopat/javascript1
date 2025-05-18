var numerot = [1, 2, 3, 4, 5, 6];
delete numerot[2]; //palauttaa true
typeof numerot[2]; //palauttaa ”undefined”
numerot[6] = 7; //nyt numerot on [1,2,3,4,5,6,7]
numerot[10] = 11; //nyt numero on [1,2,3,4,5,6,7,3xundefined,11];
console.log(numerot); //tulostaa koko taulukon
