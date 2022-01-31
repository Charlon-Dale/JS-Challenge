//for Challenge 1
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

//for Challenge 2
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media1.tenor.com/images/a862d2cb92bfbe6213e298871b1e8a9a/tenor.gif?itemid=15805236";
    div.appendChild(image);
}

//for Challenge 3
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberChoice(randomRpsInt());
    console.log('Computer choice', botChoice);
    results = decideWinner(humanChoice, botChoice); //returns result
    console.log(results);
    message = finalMessage(results); // returns a message
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
} 

function randomRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };
    
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color':'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'Draw!', 'color':'gray'};
    } else {
        return {'message': 'You won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //to remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
   
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px padding: 30px; '>" + finalMessage['message'] + "</h1>" 
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
// Challenge 4: Change the Color of All buttons
var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [];
for (let i = 0; i <all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if (buttonThingy.value === 'reset'){
        buttonsColorReset();
    }
    else if (buttonThingy.value === 'random'){
        randomColors();
    }
    
}

/*function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[1];
    }
}
*/

