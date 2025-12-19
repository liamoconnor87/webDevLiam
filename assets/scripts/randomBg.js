function shuffleColours() {
	// Need to add each one of 'text-one' , 'text-two' & 'text-three' ...
	// ... as a class so that it can add the text colour class.
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


	// Functions that determine which array sets which colour of text.
	function backgroundOne() {
		// Remove previous underline color classes from special title
		var $specialTitle = $(".trr-title-special");
		$specialTitle.removeClass("trr-underline-cyan trr-underline-yellow trr-underline-lilac trr-underline-green trr-underline-red");
		if (randBgOne == "cyan") {
			$(".text-one").addClass("text-cyan");
			$(".nav-icon-3").addClass("icon-4");
			$specialTitle.addClass("trr-underline-cyan");
		} else if (randBgOne == "yellow") {
			$(".text-one").addClass("text-yel");
			$(".nav-icon-3").addClass("icon");
			$specialTitle.addClass("trr-underline-yellow");
		} else if (randBgOne == "lilac") {
			$(".text-one").addClass("text-lilac");
			$(".nav-icon-3").addClass("icon-2");
			$specialTitle.addClass("trr-underline-lilac");
		} else if (randBgOne == "green") {
			$(".text-one").addClass("text-green");
			$(".nav-icon-3").addClass("icon-3");
			$specialTitle.addClass("trr-underline-green");
		} else if (randBgOne == "red") {
			$(".text-one").addClass("text-red");
			$(".nav-icon-3").addClass("icon-4");
			$specialTitle.addClass("trr-underline-red");
		} else {
			console.log("Error with BG One");
		}

	}

	function backgroundTwo() {
		if (randBgTwo == "cyan") {
			$(".text-two").addClass("text-cyan");
			$(".nav-icon-2").addClass("icon");
			$(".ext-link-2").addClass("ext-icon");
		} else if (randBgTwo == "yellow") {
			$(".text-two").addClass("text-yel");
			$(".nav-icon-2").addClass("icon-3");
			$(".ext-link-2").addClass("ext-icon-3");
		} else if (randBgTwo == "lilac") {
			$(".text-two").addClass("text-lilac");
			$(".nav-icon-2").addClass("icon-4");
			$(".ext-link-2").addClass("ext-icon-4");
		} else if (randBgTwo == "green") {
			$(".text-two").addClass("text-green");
			$(".nav-icon-2").addClass("icon-2");
			$(".ext-link-2").addClass("ext-icon-2");
		}else if (randBgTwo == "red") {
			$(".text-two").addClass("text-red");
			$(".nav-icon-2").addClass("icon-2");
			$(".ext-link-2").addClass("ext-icon-2");
		} else {
			console.log("Error with BG Two");
		}

	}

	function backgroundThree() {
		if (randBgThree == "cyan") {
			$(".text-three").addClass("text-cyan");
			$(".nav-icon-1").addClass("icon");
			$(".ext-link-1").addClass("ext-icon");
		} else if (randBgThree == "yellow") {
			$(".text-three").addClass("text-yel");
			$(".nav-icon-1").addClass("icon-3");
			$(".ext-link-1").addClass("ext-icon-3");
		} else if (randBgThree == "lilac") {
			$(".text-three").addClass("text-lilac");
			$(".nav-icon-1").addClass("icon-4");
			$(".ext-link-1").addClass("ext-icon-4");
		} else if (randBgThree == "green") {
			$(".text-three").addClass("text-green");
			$(".nav-icon-1").addClass("icon-2");
			$(".ext-link-1").addClass("ext-icon-2");
		}  else if (randBgThree == "red") {
			$(".text-three").addClass("text-red");
			$(".nav-icon-1").addClass("icon-2");
			$(".ext-link-1").addClass("ext-icon-2");
		} else {
			console.log("Error with BG Three");
		}

	}

	function backgroundFour() {

		if (randBgFour == "cyan") {
			$(".text-four").addClass("text-cyan");
		} else if (randBgFour == "yellow") {
			$(".text-four").addClass("text-yel");
		} else if (randBgFour == "lilac") {
			$(".text-four").addClass("text-lilac");
		} else if (randBgFour == "green") {
			$(".text-four").addClass("text-green");
		} else if (randBgFour == "red") {
			$(".text-four").addClass("text-red");
		} else {
			console.log("Error with BG Four");
		}

	}

	function backgroundFive() {

		if (randBgFive == "cyan") {
			$(".text-five").addClass("text-cyan");
			$(".ext-link-3").addClass("ext-icon");
		} else if (randBgFive == "yellow") {
			$(".text-five").addClass("text-yel");
			$(".ext-link-3").addClass("ext-icon-3");
		} else if (randBgFive == "lilac") {
			$(".text-five").addClass("text-lilac");
			$(".ext-link-3").addClass("ext-icon-4");
		} else if (randBgFive == "green") {
			$(".text-five").addClass("text-green");
			$(".ext-link-3").addClass("ext-icon-2");
		} else if (randBgFive == "red") {
			$(".text-five").addClass("text-red");
			$(".ext-link-3").addClass("ext-icon-4");
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
	$(".text-five").removeClass("text-cyan text-yel text-lilac text-green text-red");
	$(".text-one").removeClass("text-cyan text-yel text-lilac text-green text-red");
	$(".nav-icon-3").removeClass("icon icon-2 icon-3 icon-4");
	$(".ext-link-1").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4");
	// Remove underline color classes from special title
	$(".trr-title-special").removeClass("trr-underline-cyan trr-underline-yellow trr-underline-lilac trr-underline-green trr-underline-red");
	$(".text-two").removeClass("text-cyan");
	$(".nav-icon-2").removeClass("icon");
	$(".ext-link-2").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4");
	$(".text-two").removeClass("text-yel");
	$(".nav-icon-2").removeClass("icon-3");
	$(".text-two").removeClass("text-lilac");
	$(".nav-icon-2").removeClass("icon-4");
	$(".text-two").removeClass("text-green");
	$(".nav-icon-2").removeClass("icon-2");
	$(".text-two").removeClass("text-red");
	$(".nav-icon-2").removeClass("icon-2");
	$(".text-three").removeClass("text-cyan");
	$(".nav-icon-1").removeClass("icon");
	$(".text-three").removeClass("text-yel");
	$(".nav-icon-1").removeClass("icon-3");
	$(".text-three").removeClass("text-lilac");
	$(".nav-icon-1").removeClass("icon-4");
	$(".text-three").removeClass("text-green");
	$(".nav-icon-1").removeClass("icon-2");
	$(".text-three").removeClass("text-red");
	$(".nav-icon-1").removeClass("icon-2");
	$(".text-four").removeClass("text-cyan");
	$(".text-four").removeClass("text-yel");
	$(".text-four").removeClass("text-lilac");
	$(".text-four").removeClass("text-green");
	$(".text-four").removeClass("text-red");
	$(".ext-link-3").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4");
	shuffleColours();
};