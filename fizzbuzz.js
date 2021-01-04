function fizzbuzzCounter() {
	let value = parseInt(document.getElementById('count').value, 10);
	if (value >= 100) {
        value = 0;
    }
	value++;
	document.getElementById('count').value = value;
	let result = value;
	if ((value % 3 == 0) && (value % 5 == 0)) {
    document.getElementById('fb-result').innerHTML = 'FizzBuzz';
    } else if (result % 3 == 0) {
    document.getElementById('fb-result').innerHTML = 'Fizz';
    } else if (value % 5 == 0) {
    document.getElementById('fb-result').innerHTML = 'Buzz';
    } else {
	document.getElementById('fb-result').innerHTML = result;
	}
}



//original code using alert rather than a button//

/* let num = 1;

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
} */
