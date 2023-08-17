




var shuffledArr;
let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function shuffle(array) {
	let shuffledArray = array.slice(0, array.length)
	var currentIndex = shuffledArray.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = shuffledArray[currentIndex];
		shuffledArray[currentIndex] = shuffledArray[randomIndex];
		shuffledArray[randomIndex] = temporaryValue;
	}

	return shuffledArray;
}

function cipher() {
	shuffledArr = shuffle(alphabetArr);
	console.log("Key : " + shuffledArr.join().replace(/,/g, '')); // Writes the created key on console

	var textArr = "".split(""); // Insert the plaintext to cipher in between first quotes, don't change the split method.

	for (let k = 0; k < textArr.length; k++) {
		if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase()) == -1)) {
			continue;

		} else
			textArr[k] = shuffledArr[alphabetArr.indexOf(textArr[k].toUpperCase())];
	}
	console.log(textArr.join().replace(/,/g, '')) // Writes the ciphering output on console
}


function decipher() {
	var textArr = "".split(""); // Insert the plaintext to decipher in between first quotes, don't change the split method.
	for (let k = 0; k < textArr.length; k++) {
		if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase()) == -1)) {
			continue;

		} else
			textArr[k] = alphabetArr[shuffledArr.indexOf(textArr[k].toUpperCase())];
	} console.log(textArr.join().replace(/,/g, '')) // Writes the deciphering output on console
}