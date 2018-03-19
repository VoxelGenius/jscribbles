function range(start, end, step) {
var arr = [];

for (var i = 0; i <= end; i++) {
	arr[i] = start;
	if (arr[i] >= end) break;
	else
	if(step == null) start++;
	else
	start += step; 
}
return arr;
}

console.log(range(3, 14, 4));