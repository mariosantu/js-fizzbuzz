//Creo range da 1 a 100 e stampo i numeri

for( var i = 1; i <= 100; i++) {
    var numeriDaUnoACento = i ; 

    if (numeriDaUnoACento % 3 === 0 && numeriDaUnoACento % 5 === 0) {
        var FizzBuzzMsg = numeriDaUnoACento;
        console.log('FizzBuzz');
    } else if (numeriDaUnoACento % 5 === 0 ) {
        console.log('Buzz');
    } else if (numeriDaUnoACento % 3 === 0 ) {
        console.log('Fizz');
    } else {
        console.log(numeriDaUnoACento);
    }
   
}


