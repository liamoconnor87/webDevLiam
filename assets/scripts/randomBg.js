// Need to add each one of 'bg-one' , 'bg-two' & 'bg-three' ...
// ... as a class so that it can add the BG colour class.
// Refer to JS_animations.css for what colours are added.

// Shuffles the Array bgColoursArray and returns its shuffled order.
function shufflesBgColours(newBgOrder) {
	// Ref - https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
	let curId = newBgOrder.length;
	while (0 !== curId) {
		let randId = Math.floor(Math.random() * curId);
		curId -=1;

		let tmp = newBgOrder[curId];
		newBgOrder[curId] = newBgOrder[randId];
		newBgOrder[randId] = tmp;
	}
	// Returns new Array of bgColoursArray
	return newBgOrder;
}

// Original order of array.
let bgColoursArray  = ["cyan", "lilac", "yellow", "green", "red"];
bgColoursArray = shufflesBgColours(bgColoursArray);

// This will display new order of Array.
let randBgOneArray =  bgColoursArray[0];
let randBgTwoArray = bgColoursArray[1];
let randBgThreeArray = bgColoursArray[2];
let randBgFourArray = bgColoursArray[3];

// Converts each new Arrays into Sting.
let randBgOne = randBgOneArray.toString();
let randBgTwo = randBgTwoArray.toString();
let randBgThree = randBgThreeArray.toString();
let randBgFour = randBgFourArray.toString();


// Functions that determine which array sets which colour of background.
function backgroundOne() {
	if (randBgOne == "cyan") {
		$(".bg-one").addClass("bg-cyan");
	} else if (randBgOne == "yellow") {
		$(".bg-one").addClass("bg-yel");
	} else if (randBgOne == "lilac") {
		$(".bg-one").addClass("bg-lilac");
	} else if (randBgOne == "green") {
		$(".bg-one").addClass("bg-green");
	} else if (randBgOne == "red") {
		$(".bg-one").addClass("bg-red");
	} else {
		console.log("Error with BG One");
	}

}

function backgroundTwo() {
	if (randBgTwo == "cyan") {
		$(".bg-two").addClass("bg-cyan");
		$(".nav-icon-2").addClass("icon")
	} else if (randBgTwo == "yellow") {
		$(".bg-two").addClass("bg-yel");
		$(".nav-icon-2").addClass("icon-3")
	} else if (randBgTwo == "lilac") {
		$(".bg-two").addClass("bg-lilac");
		$(".nav-icon-2").addClass("icon-4")
	} else if (randBgTwo == "green") {
		$(".bg-two").addClass("bg-green");
		$(".nav-icon-2").addClass("icon-2")
	}else if (randBgTwo == "red") {
		$(".bg-two").addClass("bg-red");
		$(".nav-icon-2").addClass("icon-2")
	} else {
		console.log("Error with BG Two");
	}

}

function backgroundThree() {
	if (randBgThree == "cyan") {
		$(".bg-three").addClass("bg-cyan");
		$(".nav-icon-1").addClass("icon")
	} else if (randBgThree == "yellow") {
		$(".bg-three").addClass("bg-yel");
		$(".nav-icon-1").addClass("icon-3")
	} else if (randBgThree == "lilac") {
		$(".bg-three").addClass("bg-lilac");
		$(".nav-icon-1").addClass("icon-4")
	} else if (randBgThree == "green") {
		$(".bg-three").addClass("bg-green");
		$(".nav-icon-1").addClass("icon-2")
	}  else if (randBgThree == "red") {
		$(".bg-three").addClass("bg-red");
		$(".nav-icon-1").addClass("icon-2")
	} else {
		console.log("Error with BG Three");
	}

}

function backgroundFour() {

	if (randBgFour == "cyan") {
		$(".bg-four").addClass("bg-cyan");
	} else if (randBgFour == "yellow") {
		$(".bg-four").addClass("bg-yel");
	} else if (randBgFour == "lilac") {
		$(".bg-four").addClass("bg-lilac");
	} else if (randBgFour == "green") {
		$(".bg-four").addClass("bg-green");
	} else if (randBgFour == "red") {
		$(".bg-four").addClass("bg-red");
	} else {
		console.log("Error with BG Four");
	}

}

(function bgGenerator(){
	backgroundOne();
	backgroundTwo();
	backgroundThree();
	backgroundFour();
})();