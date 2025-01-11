// 抽獎程式
function randomRaffleWithoutRemove(arr) {
	let randomIndex = Math.floor(Math.random() * arr[0].length);
	let selectedObject = arr[0][randomIndex];
	// console.log(arr);
	// console.log(selectedObject);
	return selectedObject;
}

// 抽獎程式(從List中移除已抽過的人)
function randomRaffleAndRemove(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let selectedObject = arr[randomIndex];
	arr.splice(randomIndex, 1); // Remove one item at randomIndex
	//console.log(arr);
	console.log(
		"Final Winner: " + selectedObject.name + " " + selectedObject.uid
	);
	return selectedObject;
}

function maskString(str, numUnmasked) {
	// Check if the string is shorter than the number of characters to leave unmasked
	if (str.length <= numUnmasked) {
		return str;
	}

	// Slice the string to keep the first 'numUnmasked' characters unaltered
	let unmaskedPart = str.slice(0, numUnmasked);

	// Replace the rest of the string with asterisks
	let maskedPart = str.slice(numUnmasked).replace(/./g, "*");

	return unmaskedPart + maskedPart;
}
