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


function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media1.tenor.com/images/a862d2cb92bfbe6213e298871b1e8a9a/tenor.gif?itemid=15805236";
    div.appendChild(image);
}


function rpsgame(yourChoice) {
    console.log(yourChoice);
    console.log(yourChoice.src);
    var humanChoice, botChoice;
    //humanChoice = yourChoice.id;
    //botChoice
    //results = decideWinner(humanChoice, botChoice);
    //message = finalMessage(results); // returns a message
    rpsFrontend(yourChoice.id, botChoice, message);


}  


