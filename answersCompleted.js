// simplify show hide function w 12 arrays of 12, check for boolean value if answer is correct

function getGridDivsArray () {
	const container = document.getElementById('problems');	
	const nodeList = container.querySelectorAll('div');	
	return Array.from(nodeList); // Array.from() is built-in Array method
}

function allAnswersCorrect () {
	function hasH2 (div) {
		return (div.firstElementChild.tagName === 'H2');
	}
	const divsArray = getGridDivsArray();
	return divsArray.every(hasH2);
}

function showHideDiv() { 
	const problems = document.getElementById('problems');
	problems.style.visibility = allAnswersCorrect() ? "hidden" : "visible";
}


function clearGrid() {
	const divs = getGridDivsArray();
	for (const div of divs) {
		div.innerHTML = '<h2>*</h2>';
	}
}
	