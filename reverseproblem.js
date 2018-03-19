array = [1,2,3,4,5];
arr = ["c", "a", "t"];

function reverseArray(array) {
	var arr =[];
	for (var i = (array.length)-1; i >= 0; i--) {
		arr.push(array[i])
	}
	return arr;
}

console.log(reverseArray(array));

function reverseArrayInPlace(array) {

	for (var i = (array.length)-1; i >= 0; i--) {
		array.push(array[i]);
	}
	return array.slice((0.5 * array.length));
}

console.log(reverseArrayInPlace(arr));
