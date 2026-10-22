function outlineShadowClass(colourName) {
	if (colourName == "cyan") return "outline-shadow-cyan";
	if (colourName == "yellow") return "outline-shadow-yellow";
	if (colourName == "lilac") return "outline-shadow-lilac";
	if (colourName == "green") return "outline-shadow-green";
	if (colourName == "red") return "outline-shadow-red";
	if (colourName == "teal") return "outline-shadow-teal";
	console.log("Error with outline shadow colour");
	return "";
}

function shuffleColours() {
	// Shuffles the Array bgColoursArray and returns its shuffled order.
	function shufflesColours() {
		let bgColoursArray  = ["cyan", "lilac", "yellow", "green", "red", "teal"];
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

	bgColoursArray = shufflesColours();

	// This will display new order of Array.
	let randBgOneArray =  bgColoursArray[0];
	let randBgTwoArray = bgColoursArray[1];
	let randBgThreeArray = bgColoursArray[2];
	let randBgFourArray = bgColoursArray[3];
	let randBgFiveArray = bgColoursArray[4];
	let randBgSixArray = bgColoursArray[5];

	// Converts each new Arrays into Sting.
	let randBgOne = randBgOneArray.toString();
	let randBgTwo = randBgTwoArray.toString();
	let randBgThree = randBgThreeArray.toString();
	let randBgFour = randBgFourArray.toString();
	let randBgFive = randBgFiveArray.toString();
	let randBgSix = randBgSixArray.toString();


	// Functions that determine which array sets which colour of text.
	function colourOne() {
		// Remove previous underline color classes from special title
		var $specialTitle = $(".trr-title-special");
		$specialTitle.removeClass("trr-underline-cyan trr-underline-yellow trr-underline-lilac trr-underline-green trr-underline-red trr-underline-teal");
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
			$(".nav-icon-3").addClass("icon-6");
			$specialTitle.addClass("trr-underline-red");
		} else if (randBgOne == "teal") {
			$(".text-one").addClass("text-teal");
			$(".nav-icon-3").addClass("icon-5");
			$specialTitle.addClass("trr-underline-teal");
		} else {
			console.log("Error with BG One");
		}

	}

	function colourTwo() {
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
			$(".nav-icon-2").addClass("icon-6");
			$(".ext-link-2").addClass("ext-icon-2");
		} else if (randBgTwo == "teal") {
			$(".text-two").addClass("text-teal");
			$(".nav-icon-2").addClass("icon-5");
			$(".ext-link-2").addClass("ext-icon-5");
		} else {
			console.log("Error with BG Two");
		}

	}

	function colourThree() {
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
			$(".nav-icon-1").addClass("icon-6");
			$(".ext-link-1").addClass("ext-icon-2");
		} else if (randBgThree == "teal") {
			$(".text-three").addClass("text-teal");
			$(".nav-icon-1").addClass("icon-5");
			$(".ext-link-1").addClass("ext-icon-5");
		} else {
			console.log("Error with BG Three");
		}

		$(".julies-demiplane-title-outline-word").addClass(outlineShadowClass(randBgThree));

	}

	function colourFour() {

		if (randBgFour == "cyan") {
			$(".text-four").addClass("text-cyan");
			$(".email").addClass("icon");
		} else if (randBgFour == "yellow") {
			$(".text-four").addClass("text-yel");
			$(".email").addClass("icon-3");
		} else if (randBgFour == "lilac") {
			$(".text-four").addClass("text-lilac");
			$(".email").addClass("icon-4");
		} else if (randBgFour == "green") {
			$(".text-four").addClass("text-green");
			$(".email").addClass("icon-2");
		} else if (randBgFour == "red") {
			$(".text-four").addClass("text-red");
			$(".email").addClass("icon-6");
		} else if (randBgFour == "teal") {
			$(".text-four").addClass("text-teal");
			$(".email").addClass("icon-5");
		} else {
			console.log("Error with BG Four");
		}

		$(".julies-demiplane-title-asterisk-word").addClass(outlineShadowClass(randBgFour));
	}

	function colourFive() {

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
		} else if (randBgFive == "teal") {
			$(".text-five").addClass("text-teal");
			$(".ext-link-3").addClass("ext-icon-5");
		} else {
			console.log("Error with BG Five");
		}

	}

	function colourSix() {
		if (randBgSix == "cyan") {
			$(".text-six").addClass("text-cyan");
		} else if (randBgSix == "yellow") {
			$(".text-six").addClass("text-yel");
		} else if (randBgSix == "lilac") {
			$(".text-six").addClass("text-lilac");
		} else if (randBgSix == "green") {
			$(".text-six").addClass("text-green");
		} else if (randBgSix == "red") {
			$(".text-six").addClass("text-red");
		} else if (randBgSix == "teal") {
			$(".text-six").addClass("text-teal");
		} else {
			console.log("Error with BG Six");
		}
	}

	function colourGenerator(){
		colourOne();
		colourTwo();
		colourThree();
		colourFour();
		colourFive();
		colourSix();
	}
	colourGenerator();
}

function reshuffleColours() {
	$(".text-five").removeClass("text-cyan text-yel text-lilac text-green text-red text-teal");
	$(".text-one").removeClass("text-cyan text-yel text-lilac text-green text-red text-teal");
	$(".nav-icon-3").removeClass("icon icon-2 icon-3 icon-4 icon-5 icon-6");
	$(".ext-link-1").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4 ext-icon-5");
	// Remove underline color classes from special title
	$(".trr-title-special").removeClass("trr-underline-cyan trr-underline-yellow trr-underline-lilac trr-underline-green trr-underline-red trr-underline-teal");
	$(".text-two").removeClass("text-cyan");
	$(".nav-icon-2").removeClass("icon");
	$(".ext-link-2").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4 ext-icon-5");
	$(".text-two").removeClass("text-yel");
	$(".nav-icon-2").removeClass("icon-3");
	$(".text-two").removeClass("text-lilac");
	$(".nav-icon-2").removeClass("icon-4");
	$(".text-two").removeClass("text-green");
	$(".nav-icon-2").removeClass("icon-2");
	$(".text-two").removeClass("text-red");
	$(".nav-icon-2").removeClass("icon-6");
	$(".text-two").removeClass("text-teal");
	$(".nav-icon-2").removeClass("icon-5");
	$(".text-three").removeClass("text-cyan");
	$(".nav-icon-1").removeClass("icon");
	$(".text-three").removeClass("text-yel");
	$(".nav-icon-1").removeClass("icon-3");
	$(".text-three").removeClass("text-lilac");
	$(".nav-icon-1").removeClass("icon-4");
	$(".text-three").removeClass("text-green");
	$(".nav-icon-1").removeClass("icon-2");
	$(".text-three").removeClass("text-red");
	$(".nav-icon-1").removeClass("icon-6");
	$(".text-three").removeClass("text-teal");
	$(".nav-icon-1").removeClass("icon-5");
	$(".julies-demiplane-title-outline-word").removeClass("outline-shadow-cyan outline-shadow-yellow outline-shadow-lilac outline-shadow-green outline-shadow-red outline-shadow-teal");
	$(".julies-demiplane-title-asterisk-word").removeClass("outline-shadow-cyan outline-shadow-yellow outline-shadow-lilac outline-shadow-green outline-shadow-red outline-shadow-teal");
	$(".text-four").removeClass("text-cyan");
	$(".text-four").removeClass("text-yel");
	$(".text-four").removeClass("text-lilac");
	$(".text-four").removeClass("text-green");
	$(".text-four").removeClass("text-red");
	$(".text-four").removeClass("text-teal");
	$(".text-six").removeClass("text-cyan text-yel text-lilac text-green text-red text-teal");
	$(".email").removeClass("icon icon-2 icon-3 icon-4 icon-5 icon-6");
	$(".ext-link-3").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4 ext-icon-5");
	shuffleColours();
};