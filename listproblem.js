function arrayToList(array) {
	// body...
	var list = null;
	for (var i = (array.length) -1 ; i >= 0; i--) {
		list = {value: array[i], rest: list};
	}
	return list;

	
}

console.log(arrayToList([1,2,3]));

function ListToArray(list) {
	// body...
	arr = [];
	for (var i =list; i;i =  i.rest) {
		arr.push(i.value);
	}
 	return arr;
}

console.log(ListToArray(arrayToList([1,2,3,4,5])));
  function prepend(element, list) {
  	var newlist = {};
  	newlist = {value: element, rest: list};
  	return newlist;
  }
function nth(n, list) {
	// body...
	if(!list)
		return undefined;
	else if (n == 0)
		return list.value;
	else return nth(n-1, list.rest);
}
