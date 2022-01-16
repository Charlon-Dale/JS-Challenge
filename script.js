function  yourAge() {
    var birthYear = prompt('What is your birthyear?');
    var Age = (2022 - birthYear) * 365; //formula 

    
    var h1 = document.createElement('h1'); //to create an element 

    var textAnswer = document.createTextNode("You are " + Age + " days old");//to create and concatenate a text string
    
    // set an attribute and display the result
    h1.setAttribute('id', 'Age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

// to remove the value
function reset() {
    document.getElementById('Age').remove();
}
