let num = 1;

for (; num < 101; num++) {
if ((num % 3 == 0) && (num % 5 == 0)) {
alert ( 'FizzBuzz' )
} else if (num % 3 == 0) {
alert( 'Fizz' );
} else if (num % 5 == 0) {
alert( 'Buzz' );
} else {
alert( num );
}
}