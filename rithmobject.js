
/**var programmingLanguages = {
    java: {
        yearCreated: 1995,
        creator: "James Gosling"
    },
    javaScript: {
        yearCreated: 1995,
        creator: "Brendan Eich"
    }
}

function addprog(lang, year, creat) {
	// body...
	programmingLanguages[lang] = {
		yearCreated: year, 
		creator: creat
	}

}

addprog('toks', 1996, 'tochukwu');
console.log(programmingLanguages);

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function displayCities() {
	var cities = instructorData.additionalData.moreDetails.citiesLivedIn;
	for (var i = 0; i <= (cities.length) - 1; i++) {
		console.log(cities[i]);
	}
	// body...
}
displayCities();
function displayHometownData() {
	var hometown = instructorData.additionalData.moreDetails.hometown;
	for (key in hometown) {
		console.log(hometown[key]);

	}
}

function addDetails(key, detail) {
	instructorData.additionalData.moreDetails[key] = detail;
	return instructorData.additionalData.moreDetails;

	// body...
}

displayHometownData();
addDetails('ishilarious', true);
console.log(instructorData.additionalData.moreDetails);
**/
/**
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

/**function addSpeaker(speaker) {
	nestedObject.speakers.push({name: speaker});
	return nestedObject.speakers;
	// body...
}
addSpeaker("toddvjds");
console.log(nestedObject.speakers);


var data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};

console.log(data.items[1].name);

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function total( nestedArr) {
	// body...
var sum = 0;
for (var i = 0; i < nestedArr.length; i++) {
	for (var j = 0; j < nestedArr[i].length; j++) {
		sum += nestedArr[i][j];
		
	}

}
return sum;
}
console.log(total(nestedArr));
**/
/**
var nestedArr = ['Elie', ['Maehlksnreeeeeett', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];
function countVowels(arr) {
	
	var vowel = ['a', 'i', 'e', 'o', 'u'];
	if(Array.isArray(arr)) {
		for (var i = 0; i < arr.length; i++) {
			countVowels(arr[i]);
		}
	} else {

		var vowel = arr.match(/[aeiou]/gi);
		console.log("for " + arr + " no of vowels are " + vowel.length);
		//return vowel === null ? 0: vowel.length;
		/**
		for (var j = 0; j < arr.length; j++) {
			if (vowel.indexOf(arr.charAt(j).toLowerCase()) > -1) 
				sum++;
			
		}
		return sum;
		console.log(sum, );
		
	}
	
	
		
}

	
console.log(countVowels(nestedArr));
function rotate(arr, num) {
	var old = [];

}

var nestedArr = ['Elie', ['Maehlksnreeeeeett', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];


function getVowels(arr) {
	var vowel = arr.toString().match(/[aeiou]/gi);
	return vowel === null ? 0: vowel.length;
	// body...
}

console.log(nestedArr.toString());
console.log(getVowels(nestedArr));


var fope = ['ervjkrev', 'fjvksdanr', 'ekvja rvaw'];
console.log(fope.toString());

 function rotate(arr, num) {
 	// body...
 	var loop = num % (arr.length);
 	for (var i = 1; i <= loop; i++) {
 		var popped = arr.pop();
 		arr.unshift(popped);
 	}
 	return arr;
 }

 console.log(rotate([1,2,3, 4], 15));

//Write a function called makeXOGrid which takes in two parameters, rows and columns, 
//and returns an array of arrays with the number of values in each subarray equal to the columns parameter
// and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
 function makeXOgrid(row, col) {
 	var arr = [];
 	var input = 'X';
 	for (var i = 0; i < row ; i++) {
 		arr[i] = [];
 		for (var j = 0; j < col; j++) {
 		 	arr[i].push(input);
 		if(input == 'X')
 			input = 'O';
 		else 
 			input = 'X';
		
 		
 		}
 		
 	}
 	return arr;

 }

console.log(makeXOgrid(9, 9));

function map(arr, fn) {
	var narr = [];
	for (var i = 0; i < arr.length; i++) {
		narr.push(fn(arr[i]));
	}
	return narr;
	// body...
}

console.log(map([1,2,3,4], function (val) {return (val * 2);}));

function reject(arr, fn) {
	var narr = [];
	for (var i = 0; i < arr.length; i++) {
		if(!(fn(arr[i]))) {
			narr.push(arr[i]);
		}
	}
	// body...
	return narr;
}

console.log(reject([1,2,3,4], function (argument) {return argument > 2;}));

var timerId = setInterval(function(){
    console.log("HI!");
},1000);


setTimeout(function(){
   clearTimeout(timerId);
},1000);


function counter() {
	var count = 0;

	return function () {
		return ++count;
		// body...
	}
	// body...
}

var firstcounter = counter();
console.log(firstcounter());
console.log(firstcounter());

function countdown(number) {

	var timerId = setInterval(function() {
		if (number == 0) {console.log("DONE")}
		else { console.log(number--);}
		

	}, 1000);

	setTimeout(function () {
		clearTimeout(timerId);
	}, ((number*1000) + 2000));
	// body...
}
countdown(4);

function randomGame() {
	var count = 0;

	var timerId = setInterval(function () {
		var rand = Math.random();
		count++;

	if(rand > 0.75)
		{
			clearInterval(timerId);
			console.log(count);
		}
	}, 1000);



}

randomGame();

function isEven(n) {
	if(n == 0) { return true;}
	else if(n == 1) {return false;}
	else { return isEven(n - 2);}
	}
	// body...


console.log(isEven(6));

function isOdd(n) {
	if(n == 0) { return false;}
	else if(n == 1) {return true;}
	else { return isOdd(n - 2);}
}

console.log(isOdd(56));

function isPrime(n) {
		var result = true;
		for (var i = 2; i < n; i++) {
		if(n%i == 0) {
			result =  false;
			break;
		}
		
	}
	
	return result;
	// body...
}

console.log(isPrime(97));

function numberFact(n, fn) {
	return fn(n);
	// body...
}

console.log(numberFact(59, isPrime));


function find(arr, fn) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		if(fn(arr[i])) { result = arr[i]; break;}
	}
	return result;
	// body...
}

console.log(find([1,2,3,4], function (n) {
	// body...
	return n > 1;
}));

function findIndex(arr, fn) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		if(fn(arr[i])) { result = i; break;}
	}
	return result;
	// body...
}

console.log(findIndex([1,2,3,4], function (n) {
	// body...
	return n > 5;
}));

function specialMultiply(a, b) {
	if (arguments.length ===1)
		return function (c) {
			return a*c;
			// body...
		}
	else return a*b;
}

console.log(specialMultiply(3)(4));


var container = document.querySelector('#container');
var second = document.getElementsByClassName('second');
var third = document.getElementsByClassName('ol .third');
var footdiv = document.querySelector('.footer');
footdiv.classList.add("main");
var footrem = document.querySelector('.footer');
footrem.classList.remove("main");
var newli = document.createElement("li");
newli.innerText = "four";
var ulist = document.querySelector('ul');
ulist.appendChild(newli);
oli = document.querySelectorAll('ol li');

for (var i = 0; i < oli.length; i++) {
	oli[i].style.background = "green";
}
var instructor = ["djdfs", "jdifs", "tabitha"];
if(typeof Storage != undefined) {
    localStorage.setItem("instructor", instructor);
    var display = document.querySelector(".footer");
    display.innerHTML= localStorage.getItem("instructor");
}

else {
    document.querySelector(".footer").innerHTML = "sorry don't work";

}


document.addEventListener("DOMContentLoaded", function () {
	var change = document.querySelector("#change_heading");
	change.innerText = "Hello World";
	var select = document.querySelector(".selected");
	var section = document.querySelector("section");
	section.addEventListener("mouseover", function (event) {
		select.innerText = event.target.className;
		// body...
	});
	var newdiv = document.createElement("div");
	newdiv.className = "purple";
	newdiv.style.backgroundColor = "purple";
	var section = document.querySelector("section");
	section.appendChild(newdiv);
   
	var car1 = document.querySelector(".car1");
	var car2 = document.querySelector(".car2");
	var button = document.querySelector("button");

	car1.style.marginLeft = 0;
	car2.style.marginLeft = 0;

	function reset(car1, car2) {
		clearTimeout(car1.timer);
		clearTimeout(car2.timer);
		car1.style.marginLeft = 0;
		car2.style.marginLeft = 0;
		button.disabled = false;
		
	}
	
	button.addEventListener("click", function () {
		button.disabled = true;
		car1.timer = setInterval(function () {
			car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 60) + "px";

			if(parseInt(car1.style.marginLeft) > window.innerWidth) {
			alert("car 1 wins");
			reset(car1, car2);
			}

		}, 60)

		car2.timer = setInterval(function () {
			car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 60) + "px";

			if(parseInt(car2.style.marginLeft)> window.innerWidth) {
			alert("car 2 wins");
			reset(car1, car2);
			}
		}, 60)
	})
	

})


function forEachtest(array, fn) {
	for (var i = 0; i < array.length; i++) {
		fn(array[i]);
	}
	// body...
}

var arr = [1,2,5];

forEachtest(arr, console.log);

function maptest(array, fun) {
	var newarr = [];
	for (var i = 0; i < Things.length; i++) {
		newarr.push(fn[array[i]])

	}
	return newarr
}
//filterExercises
function print(array) {
	array.forEach(function(val) { console.log(val[0] + val[val.length -1])})

	// body...
}
arrprint = ['awesome','example','of','forEach']
print(arrprint);

function keyandvalue(array, key, value) {
	array.forEach(function (val) {
		// body...
		val[key] = value; 
	})
	console.log(array);
}

keyandvalue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)


//mapexercises
function valtimesindex(array) {
	return array.map(function (val) {
		return val * array.indexOf(val);
	})

}

console.log(valtimesindex([1,2,3]));

function extractkey(arr, key) {
	return arr.map(function (val) {
		return val[key];
	})
}

console.log(extractkey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

//filter exercises
function filterkeys(array, key) {
	return array.filter(function (val) {
		return val[key] == true;
	})
}

console.log(filterkeys([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious"));

function filterletters(array, letter) {
	// body...
	var arr = array.filter(function (val) {
		return val.toLowerCase() == letter.toLowerCase();
	});
	console.log(arr.length);
}

filterletters(["a","a","b","a","A"], "a")

//reduce example
var arr = [1,2,3,4];
arr.reduce(function(acc,next){
    if(next >= 2){
        acc['key' + next] = next;
    } 
    return acc;
},{});


//reduce exercises

function extractkey(arr, key) {
	return arr.reduce(function (acc, next) {
	acc.push(next[key]);
	return acc;
	},[])
	
} 

console.log(extractkey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"))

function filterletters (arr, letter) {
	return arr.reduce(function (acc, next) {
		if (next.toLowerCase() == letter.toLowerCase()) {
			acc.push(next);
		}
		return acc;
	}, []).length;

}

console.log(filterletters(["a","a","b","c","A"], "a"));

function addkey(arr, key, val) {

	return arr.reduce(function (a,b, index) {
		a[index][key] = val;
		return a;
	}, arr)
	// body...
}

console.log(addkey([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));



//iterator exercises
var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]

function printEmails(arr) {
	arr.forEach(function (val) {
		console.log(val['email'])
		// body...
	})
	// body...
}

printEmails(users);

function printHobbies(arr) {
	// body...
	arr.forEach(function (val) {
		val['hobbies'].forEach(function (hob) {
			console.log(hob);
			// body...
		})
		// body...
	})
}

printHobbies(users);

function findhometownbystate(arr,sta) {

	return arr.filter(function (val) {
		return val['hometown']['state'] == sta;
		// body...
	})[0]

	// body...
}

console.log(findhometownbystate(users,'CA'));

function allLangs(arr) {
	var newarr = [];
	arr.forEach(function(val) {
		val['favoriteLanguages'].forEach(function (lang) {
			newarr.push(lang);

			// body...
		})	
	})
	return newarr.filter(function (value, index) {
		return newarr.indexOf(value) == index;
		
	});
}

console.log(allLangs(users));


function haseditor(arr, editor) {
	return arr.some(function (val) {
		return val['favoriteEditor'] == editor;
	})
	// body...
}

console.log(haseditor(users, 'Eclipse'));

function findbyusername (arr, username) {
	return arr.filter(function (val) {
		return val['username'] == username;
		// body...
	})

}[0]

console.log(findbyusername(users, 'david'));


function vowelcount(string) {

	function checkforvowel(letter) {
		var vowels = ['a','e','i','o','u'];
		return vowels.some(function (val) { return val == letter;});
	}
	function filtervowel(array, letter) {

		return array.filter(function (val) {
		return val == letter;
		// body...
		}).length;
	}
	var array = string.split('');
	// body...
	return array.reduce(function (acc, next, index) {
		if(checkforvowel(next)) {

			acc[next] = filtervowel(array, next);
		}
		return acc;
		
	}, {})
}

console.log(vowelcount('tochukwu'));

function findnotvowel(array, letter) {

		return array.find(function (val) {
		return val == letter;
		});
}
function removevowels(string) {
	var array = string.split('');
	function checkfornotvowel(letter) {
		var vowels = ['a','e','i','o','u'];
		return vowels.every(function (val) { return val != letter;});
	}
	return array.filter(function(val) {
		return checkfornotvowel(val);
	})
}

console.log(removevowels('tochukwu'));
/**
function checkfornotvowel(letter) {
		var vowels = ['a','e','i','o','u'];
		return vowels.every(function (val) { return val != letter;});
	}

console.log(checkfornotvowel('e'));


//Jquery 
let a = 4;
var b = 6;

console.log(a);

let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]
function addpop(arr) {
	// body...
	return arr.reduce(function (acc, next) {
	if(next.country != 'China') {
		acc += next.pop;
	}
	return acc;
	}, 0)
}


console.log(addpop(data));
**/
Math.sqrt();
