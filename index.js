var readlinesync = require('readline-sync');
score=0
var userName = readlinesync.question("What's your Name? ")

console.log("Welcome", userName + " to a POP MUSIC QUIZ!!\n-------------\nINSTRUCTIONS\n1:You will need a minimum of 2 marks to enter the next level\nFollowing are the levels in order:\nLevel 1:80s POP QUIZ\nLEVEL 2:90s POP QUIZ\nLEVEL 3:00s POP QUIZ\n2:Type a,b,c or d as answer\n----------\nLet's Begin\n-------\nLEVEL 1-80s Quiz\n-----------")


// function Level 1
function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right answer!")
    score= score + 1
  } else {
    console.log("INCORECT!")
  
  }
  console.log("score:", score)
  console.log("-------------")
}

// calling function level 1

var questions = [{
  question: "Which 80s star is recognised by Guinness World Records as the best-selling female recording artist of all time?\na:Madonna\nb:Lady Gaga\nc:Elvis Presley\nd:Santana\nANS: ",
  answer: "a"
},{
  question: "Michael Jackson debuted his trademark moonwalk during which song in 1983?\na:Walking on the moon\nb:Beat it\nc:Billie Jean\nd:Thriller\nANS: ",
  answer: "c"
},{
 question: "The most awarded female act of all time goes to… which 80s sensation? \na:Tina Turner\nb:Whitney Houston\nc:Madonna\nd:Mariah Carey\nANS: ",
  answer: "b"

},{
 question: "Which band in the 80s informed everyone that another one had bit the dust? \na:u2\nb:Wham\nc:Def Leppard\nd:Queen\nANS:",
  answer: "d"

}]

// loop lvl 1
 for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
 

// condition for next level 2
if (score>=2)
{
  // function level 2
 function play(question, answer) 
 { 
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right answer!")
    score= score + 1
  } else {
    console.log("INCORRECT")
  
  }
  console.log("score is:", score)
  console.log("-------------")
 }

console.log("-----------")
console.log("CONGRATS!! You have successfully completed level 1!")
console.log("-----------")
console.log("WELCOME TO LEVEL 2-90s Quiz")
console.log("-----------")
// calling function level 2
play("How old was Britney Spears when her hit song ‘Baby One More Time’ came out in 1998?\na:20\nb:22\nc:17\nd:15\nANS: ", "c")
play("What is the other language that Celine Dion regularly sang in throughout the 90s?\na:French\nb:German\nc:Hindi\nd:Sweedish\nANS: ", "a")
play("Who won a grammy for best reggae album in 1995 with Boombastic?\na:MAGIC\nb:Shaggy\nc:Bob Marley\nd:The Marley Mob\nANS: ", "b")
play("It took Mariah Carey 15 minutes to write which holiday hit in 1994?\na:Without you\nb:All I Want for Christmas is You\nc:Christmas Magic\nd:Touch my body\nANS: ", "b")


} else {
  console.log("TRY AGAIN")
}

// condition for level 3
if (score >= 4) {
// function level 3
 function play(question, answer) 
 { 
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right answer!")
    score= score + 1
  } else {
    console.log("INCORRECT")
  
  }
  console.log("score is:", score)
  console.log("-------------")
 }

console.log("-----------")
console.log("CONGRATS!! You have successfully completed level 2!")
console.log("-----------")
console.log("WELCOME TO LEVEL 3-00s Quiz")
console.log("-----------")
// calling function level 2
play("Which artist released 3 prison-themed albums called Trouble, Konvicted and Freedom throughout the 00s?\na:Akon\nb:Usher\nc:Yves Larock\nd:Shaggy\nANS: ", "a");
play("3 of the top 15 best-selling albums of the 00s belong to which 4-piece band?\na:Linkin Park\nb:Coldplay\nc:Green Day\nd:Nickleback\nANS: ", "b");
play("Katy Perry’s first big hit ‘I Kissed a Girl’ came out in what year?\na:2008\nb:2012\nc:2002\nd:2005\nANS: ", "a");
play("Maroon 5 released their solo album in 2002 titled Songs About…who?\na:Anna\nb:Lilly\nc:Mary\nd:Jane\nANS: ", "b");


console.log("FINAL SCORE:", score)

} else {
  console.log("Game Over! TRY AGAIN!")
}


// data structure for HIGH SCORES

highScores = [{
  name: "don",
  score: 4
},{
  name: "wesley",
  score: 4
}
]
// consition if beat score
for (var i=0; i< highScores.length; i++) {
  if (score > highScores[i].score) {
    console.log("CONGRATS! You beat the high score!")
    break
  } else {
    break
  }
}

// push and display high scores
highScores.push({name:userName, score: score})

console.log("-----------\nHIGH SCORES")
for (var i=0; i< highScores.length; i++) {
  console.log(highScores[i].name, ":", highScores[i].score,"\n----------");
}

console.log("PLEASE SEND SCREENSHOT OF YOUR SCORE SO THAT I CAN UPDATE THE HIGHSCORE DATABASE")

console.log("THANK YOU AND SEE YOU AGAIN FOR THE NEXT SESSION!!")