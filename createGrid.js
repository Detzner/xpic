// creates the text input box where you'll type your answer
function inputText () {
	const input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('size', '2');
	return input;
}
	
// creates the button you click on to check your answer
function inputImage () {
	const input = document.createElement('input');
	input.setAttribute('type', 'image');
	input.setAttribute('src', 'images/bluedot.jpg');	
	input.setAttribute('onclick','checkInput(this)');
	return input;
}

// creates a div with a data row, data column, and 2 inputs	. just a definition	
function makeDiv (r, c) {
	const div = document.createElement("div");
	div.setAttribute("class", "dynamicDiv");
	div.setAttribute("data-row", r);
	div.setAttribute("data-column", c);
	div.appendChild(inputText());
	div.appendChild(inputImage());		
	return div;
}		

// uses the code above to assemble the divs into a grid
function createGrid (rows, columns) {  // pass in 2 parameters for horiz and vertical
    const problems = document.getElementById('problems');		
	
	for (const row of rows) {
		for (const column of columns) {
			const element = makeDiv(row, column);
			problems.appendChild(element);    									
		}
	}
}

export { createGrid };

