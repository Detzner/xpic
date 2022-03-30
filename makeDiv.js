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

export { makeDiv };
