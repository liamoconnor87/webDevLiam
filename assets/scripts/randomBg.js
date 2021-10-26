// Need to add each one of 'bg-one' , 'bg-two' & 'bg-three' ...
// ... as a class so that it can add the BG colour class.
// Refer to JS_animations.css for what colours are added.

// Shuffles the Array bgColoursArray and returns its shuffled order.
function shufflesBgColours(newBgOrder) {

	// console.log("shufflesBgColours Triggered");

	// Ref - https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
	let curId = newBgOrder.length;
	while (0 !== curId) {
		let randId = Math.floor(Math.random() * curId);
		curId -=1;

		let tmp = newBgOrder[curId];
		newBgOrder[curId] = newBgOrder[randId];
		newBgOrder[randId] = tmp;
	}

	// console.log("shufflesBgColours completed");

	// Returns new Array of bgColoursArray
	return newBgOrder;
}

// Original order of array.
let bgColoursArray  = ["cyan", "lilac", "yellow", "green"];
bgColoursArray = shufflesBgColours(bgColoursArray);

// This will display new order of Array.
console.log(bgColoursArray);
let randBgOneArray =  bgColoursArray[0];
let randBgTwoArray = bgColoursArray[1];
let randBgThreeArray = bgColoursArray[2];

// Converts each new Arrays into Sting.
let randBgOne = randBgOneArray.toString();
let randBgTwo = randBgTwoArray.toString();
let randBgThree = randBgThreeArray.toString();


// Functions that determine which array sets which colour of background.
function backgroundOne() {

	console.log("backgroundOne Triggered");

	if (randBgOne == "cyan") {
		$(".bg-one").addClass("bg-cyan");
		// console.log("Cyan BG Success");
	} else if (randBgOne == "yellow") {
		$(".bg-one").addClass("bg-yel");
		// console.log("Yellow BG Success");
	} else if (randBgOne == "lilac") {
		$(".bg-one").addClass("bg-lilac");
		// console.log("Lilac BG Success");
	} else if (randBgOne == "green") {
		$(".bg-one").addClass("bg-green");
		// console.log("Green BG Success");
	} else {
		console.log("Error with BG One");
	}

}

function backgroundTwo() {

	console.log("backgroundTwo Triggered");

	if (randBgTwo == "cyan") {
		$(".bg-two").addClass("bg-cyan");
		// console.log("Cyan BG Success");
	} else if (randBgTwo == "yellow") {
		$(".bg-two").addClass("bg-yel");
		// console.log("Yellow BG Success");
	} else if (randBgTwo == "lilac") {
		$(".bg-two").addClass("bg-lilac");
		// console.log("Lilac BG Success");
	} else if (randBgTwo == "green") {
		$(".bg-two").addClass("bg-green");
		// console.log("Green BG Success");
	} else {
		console.log("Error with BG Two");
	}

}

function backgroundThree() {

	console.log("backgroundThree Triggered");

	if (randBgThree == "cyan") {
		$(".bg-three").addClass("bg-cyan");
		// console.log("Cyan BG Success");
	} else if (randBgThree == "yellow") {
		$(".bg-three").addClass("bg-yel");
		// console.log("Yellow BG Success");
	} else if (randBgThree == "lilac") {
		$(".bg-three").addClass("bg-lilac");
		// console.log("Lilac BG Success");
	} else if (randBgThree == "green") {
		$(".bg-three").addClass("bg-green");
		// console.log("Green BG Success");
	} else {
		console.log("Error with BG Three");
	}

}

(function bgGenerator(){

	// console.log("bgGenerator Triggered");

	backgroundOne();

	backgroundTwo();

	backgroundThree();

	// console.log("bgGenerator Completed");
	
})();