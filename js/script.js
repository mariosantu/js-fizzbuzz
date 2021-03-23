//Creo range da 1 a 100 e stampo i numeri

for( var i = 1; i < 101; i++) {
    var numeriDaUnoACento = i ; 
    console.log(numeriDaUnoACento);

    if (numeriDaUnoACento % 3 === 0 ) {
        console.log('Fizz');
    } else if (numeriDaUnoACento % 5 === 0 ) {
        console.log('Buzz');
    } else if (numeriDaUnoACento % 3 === 0 && numeriDaUnoACento % 5 === 0 ) {
        console.log('FizzBuzz');
    }
   
}


