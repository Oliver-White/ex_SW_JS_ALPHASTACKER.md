var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var alphaLength = alphabet.length;
var stacked = [];

function stackLetters () {
   for (var i = 0; i < alphaLength; i++) {
   		stacked += alphabet[i];
   		console.log(stacked)
		if ( i % 3 === 2 ) {
			stacked += " ";
		}
   }
}





stackLetters(alphabet)









