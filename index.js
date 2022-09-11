var readlineSync = require('readline-sync');
var score = 0
var topScorers = [
  {
    name: "friend1",
    score: 5,
  },
  {
    name: "friend2",
    score: 3,
  }
];
var questions = [
  {
    question: 'What is my last name?\n',
    answer: 'Vij',
  },
  {
    question: '\nWhat is my favourite finance book?\n',
    answer: 'Coffee Can Investing',
  },
  {
    question: '\nWhat is my favourite movie?\n',
    answer: 'Devdas',
  },
  {
    question: '\nWhat is my favourite tech product?\n',
    answer: 'MacBook',
  },
  {
    question: '\nWhen is my Birthday?\n',
    answer: '22nd January',
  }
];
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Congratulations! You are correct!");
    score = score + 1;
  } else {
    console.log("That's wrong!")
  }
  console.log("Current score is " + score);
  console.log("*************")
}
function greeting() {
  var playerName = readlineSync.question("Enter your name : \n");
  console.log("\nGreetings, " + playerName + "!" + " This is the DO YOU KNOW PRIYANSHU? Quiz!\n");
}
function quiz() {
  for (var i = 0; i < questions.length; i++) {
    var questionNow = questions[i];
    play(questionNow.question, questionNow.answer)
  }
}
function displayScore() {
  console.log("Your score is = " + score);
  console.log("The high scores are : ")
  for (var i = 0; i < topScorers.length; i++) {
    var topScorern = topScorers[i]
    console.log(topScorern.name + " : " + topScorern.score);
  }
}
greeting();
quiz();
displayScore();