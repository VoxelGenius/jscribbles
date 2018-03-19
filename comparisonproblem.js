
function deepEqual(val1, val2) {
	// body...
	if (val1 === val2) return true;
	var propsA = 0;

	for(prop in val1)
		propsA +=1;
	propsB = 0;
	for(prop in val2)
		propsB +=1;
		if(!(prop in A)) || (!deepEqual[val1[prop], val2[prop]])
			return false;
	return (propsB == propsA)
}
console.log(deepEqual(2,2));