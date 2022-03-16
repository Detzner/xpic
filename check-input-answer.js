function checkInput (elem) {	
 // get input value and convert to integer		 
 const div = elem.parentElement;			   
 const input = div.querySelector('input[type="text"]').value;
 const inputNumber = parseInt(input, 10);

 // calculate correct answer for row x column
 // const row = parseInt(div.getAttribute('data-row'),10);
 // const column = parseInt(div.getAttribute('data-column'),10);
 
 const row = parseInt(div.dataset.row, 10);
 const column = parseInt(div.dataset.column, 10);
 
// var row = array[1,2,3,4,5,6,7,8,9,10,11,12];
 const answer = row * column;		  

 console.log(row * column);
 console.log(elem.src);
 console.log(div.id);
 console.log(elem.tagName);

 // if answer is correct change display
 // id is inserted that matches the answer, because function showHideDiv() at the end will need to check each square by id to make sure it's blank before clearing the squares to show the image
 if (inputNumber === answer) {
   div.style.background ='none';
   div.innerHTML = `<h2 id='${answer}'>${answer}</h2>`;
 }	
 // if answer is incorrect, display error message		   
 else {
   alert("Try again!");
   answer = "";
 }		          	 	
}

