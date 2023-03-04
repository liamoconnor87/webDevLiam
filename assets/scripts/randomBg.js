function shuffleColours() {
	// Need to add each one of 'bg-one' , 'bg-two' & 'bg-three' ...
	// ... as a class so that it can add the BG colour class.
	// Refer to JS_animations.css for what colours are added.

	// Shuffles the Array bgColoursArray and returns its shuffled order.
	function shufflesBgColours() {
		let bgColoursArray  = ["cyan", "lilac", "yellow", "green", "red"];
		// Ref - https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
		let curId = bgColoursArray.length;
		while (0 !== curId) {
			let randId = Math.floor(Math.random() * curId);
			curId -=1;

			let tmp = bgColoursArray[curId];
			bgColoursArray[curId] = bgColoursArray[randId];
			bgColoursArray[randId] = tmp;
		}
		// Returns new Array of bgColoursArray
		return bgColoursArray;
	}

	// Original order of array.

	bgColoursArray = shufflesBgColours();

	// This will display new order of Array.
	let randBgOneArray =  bgColoursArray[0];
	let randBgTwoArray = bgColoursArray[1];
	let randBgThreeArray = bgColoursArray[2];
	let randBgFourArray = bgColoursArray[3];
	let randBgFiveArray = bgColoursArray[4];

	// Converts each new Arrays into Sting.
	let randBgOne = randBgOneArray.toString();
	let randBgTwo = randBgTwoArray.toString();
	let randBgThree = randBgThreeArray.toString();
	let randBgFour = randBgFourArray.toString();
	let randBgFive = randBgFiveArray.toString();


	// Functions that determine which array sets which colour of background.
	function backgroundOne() {
		if (randBgOne == "cyan") {
			$(".bg-one").addClass("bg-cyan");
			$(".nav-icon-3").addClass("icon-4")
		} else if (randBgOne == "yellow") {
			$(".bg-one").addClass("bg-yel");
			$(".nav-icon-3").addClass("icon")
		} else if (randBgOne == "lilac") {
			$(".bg-one").addClass("bg-lilac");
			$(".nav-icon-3").addClass("icon-2")
		} else if (randBgOne == "green") {
			$(".bg-one").addClass("bg-green");
			$(".nav-icon-3").addClass("icon-3")
		} else if (randBgOne == "red") {
			$(".bg-one").addClass("bg-red");
			$(".nav-icon-3").addClass("icon-4")
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

	function backgroundFive() {

		if (randBgFive == "cyan") {
			$(".bg-five").addClass("bg-cyan");
		} else if (randBgFive == "yellow") {
			$(".bg-five").addClass("bg-yel");
		} else if (randBgFive == "lilac") {
			$(".bg-five").addClass("bg-lilac");
		} else if (randBgFive == "green") {
			$(".bg-five").addClass("bg-green");
		} else if (randBgFive == "red") {
			$(".bg-five").addClass("bg-red");
		} else {
			console.log("Error with BG Five");
		}

	}

	function bgGenerator(){
		backgroundOne();
		backgroundTwo();
		backgroundThree();
		backgroundFour();
		backgroundFive();
	}
	bgGenerator();
}

function reshuffleBgColours() {
	$(".bg-five").removeClass("bg-cyan");
	$(".bg-five").removeClass("bg-yel");
	$(".bg-five").removeClass("bg-lilac");
	$(".bg-five").removeClass("bg-green");
	$(".bg-five").removeClass("bg-red");
	$(".bg-one").removeClass("bg-cyan");
	$(".nav-icon-3").removeClass("icon-4")
	$(".bg-one").removeClass("bg-yel");
	$(".nav-icon-3").removeClass("icon")
	$(".bg-one").removeClass("bg-lilac");
	$(".nav-icon-3").removeClass("icon-2")
	$(".bg-one").removeClass("bg-green");
	$(".nav-icon-3").removeClass("icon-3")
	$(".bg-one").removeClass("bg-red");
	$(".nav-icon-3").removeClass("icon-4")
	$(".bg-two").removeClass("bg-cyan");
	$(".nav-icon-2").removeClass("icon")
	$(".bg-two").removeClass("bg-yel");
	$(".nav-icon-2").removeClass("icon-3")
	$(".bg-two").removeClass("bg-lilac");
	$(".nav-icon-2").removeClass("icon-4")
	$(".bg-two").removeClass("bg-green");
	$(".nav-icon-2").removeClass("icon-2")
	$(".bg-two").removeClass("bg-red");
	$(".nav-icon-2").removeClass("icon-2")
	$(".bg-three").removeClass("bg-cyan");
	$(".nav-icon-1").removeClass("icon")
	$(".bg-three").removeClass("bg-yel");
	$(".nav-icon-1").removeClass("icon-3")
	$(".bg-three").removeClass("bg-lilac");
	$(".nav-icon-1").removeClass("icon-4")
	$(".bg-three").removeClass("bg-green");
	$(".nav-icon-1").removeClass("icon-2")
	$(".bg-three").removeClass("bg-red");
	$(".nav-icon-1").removeClass("icon-2")
	$(".bg-four").removeClass("bg-cyan");
	$(".bg-four").removeClass("bg-yel");
	$(".bg-four").removeClass("bg-lilac");
	$(".bg-four").removeClass("bg-green");
	$(".bg-four").removeClass("bg-red");
	shuffleColours();
};