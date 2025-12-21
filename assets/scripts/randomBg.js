
// --- Refactored randomBg.js ---
// Maintainer notes:
// - Consider migrating to vanilla JS for future-proofing and performance.
// - This refactor uses a config mapping and a generic assignment function.
// - Chrome and Firefox links always match the color of text-three and text-five, respectively.

function shuffleColours() {
	// Color and class mapping for each project type
	const colorOrder = ["cyan", "lilac", "yellow", "green", "red"];
	const textClasses = {
		cyan: "text-cyan",
		lilac: "text-lilac",
		yellow: "text-yel",
		green: "text-green",
		red: "text-red"
	};
	const iconClasses = {
		one: ["icon-4", "icon", "icon-2", "icon-3", "icon-4"], // nav-icon-3
		two: ["icon", "icon-4", "icon-3", "icon-2", "icon-2"],   // nav-icon-2
		three: ["icon", "icon-4", "icon-3", "icon-2", "icon-2"], // nav-icon-1
	};
	const extLinkClasses = {
		one: ["ext-icon", "ext-icon-4", "ext-icon-3", "ext-icon-2", "ext-icon-2"],
		two: ["ext-icon", "ext-icon-4", "ext-icon-3", "ext-icon-2", "ext-icon-2"],
		three: ["ext-icon", "ext-icon-4", "ext-icon-3", "ext-icon-2", "ext-icon-4"]
	};
	// Shuffle color order
	function shuffleArray(arr) {
		let a = arr.slice();
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}
	const shuffledColors = shuffleArray(colorOrder);

	// Remove all color and icon classes
	const allTextClasses = Object.values(textClasses).join(" ");
	[1,2,3,4,5].forEach(i => {
		$(`.text-one, .text-two, .text-three, .text-four, .text-five`).removeClass(allTextClasses);
	});
	$(".nav-icon-1, .nav-icon-2, .nav-icon-3").removeClass("icon icon-2 icon-3 icon-4");
	$(".ext-link-1, .ext-link-2, .ext-link-3").removeClass("ext-icon ext-icon-2 ext-icon-3 ext-icon-4");
	$(".trr-title-special").removeClass("trr-underline-cyan trr-underline-yellow trr-underline-lilac trr-underline-green trr-underline-red");

	// Assign color classes
	function assignColor(idx, textSel, navSel, extSel, extSyncClass) {
		const color = shuffledColors[idx];
		const textClass = textClasses[color];
		$(textSel).addClass(textClass);
		if (navSel) $(navSel).addClass(iconClasses[navSel]?.[idx] || "");
		if (extSel) $(extSel).addClass(extLinkClasses[extSel]?.[idx] || "");
		// Special underline for trr
		if (textSel === ".text-one") {
			const underlineClass = `trr-underline-${color}`;
			$(".trr-title-special").addClass(underlineClass);
		}
		// Chrome link matches text-three
		if (extSyncClass === "chrome") {
			$(".ext-link-1").removeClass(allTextClasses).addClass(textClass);
		}
		// Firefox link matches text-five
		if (extSyncClass === "firefox") {
			$(".ext-link-2").removeClass(allTextClasses).addClass(textClass);
		}
	}
	assignColor(0, ".text-one", ".nav-icon-3", null);
	assignColor(1, ".text-two", ".nav-icon-2", ".ext-link-2");
	assignColor(2, ".text-three", ".nav-icon-1", ".ext-link-1", "chrome");
	assignColor(3, ".text-four");
	assignColor(4, ".text-five", null, ".ext-link-3", "firefox");
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