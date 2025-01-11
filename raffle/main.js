// 抽獎程式
function randomRaffleWithoutRemove(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let selectedObject = arr[randomIndex];
	// console.log(arr);
	// console.log(selectedObject);
	return selectedObject;
}

// 抽獎程式(從List中移除已抽過的人)
function randomRaffleAndRemove(arr) {
	console.log(arr);
	let randomIndex = Math.floor(Math.random() * arr.length);
	console.log(randomIndex);
	let selectedObject = arr[randomIndex];
	console.log("randomRaffleAndRemove 被呼叫了");
	console.log(selectedObject);
	arr.splice(randomIndex, 1); // Remove one item at randomIndex
	console.log(arr);
	return selectedObject ;
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
