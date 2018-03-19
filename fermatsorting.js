function sortingarray(arr) {
	var newarr = [];
	for (var i = 0; i < arr.length; i++) {
		sortTimeout(arr[i]);
		
	}
	
	// body...
}

function sortTimeout(n) {
	setTimeout(function () {
		console.log(n);
		},(n*1000))
	// body...
}

sortingarray([1,10, 4, 6, 3, 2, 1, 8, 7, 6]);


