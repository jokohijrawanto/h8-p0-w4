function ubahHuruf(kata) {
	// you can only write your code here!
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"]
	var getNextLetter = letter => {
		for(let h = 0; h < letters.length; h++){
			if(letter === letters[h]){
				return letters[h+1];
			}
		}
	}
	
	var newKata = "";
	for(var i = 0; i < kata.length; i++){
		newKata += getNextLetter(kata[i]);
	}
	return newKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
