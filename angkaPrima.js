function angkaPrima(angka) {
  // you can only write your code here!

    var max = Math.sqrt(angka);
    for( var i = 2;  i <= max;  i++ ) {
        if( angka % i == 0 )
            return false;
    }
    return true;
}

for( var angka = 1;  angka< 33;  angka++ ) {
        if( angkaPrima(angka)) {
        
 }
}




// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false