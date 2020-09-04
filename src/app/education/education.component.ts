import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public imgsrc = './assets/img_quiz-night.jpg';

  public list = [
    { img: './assets/img_quiz-night.jpg' },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}


// function Quiz(questions) {
//   this.score = 0;
//   this.questions = questions;
//   this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionIndex = function() {
//   return this.questions[this.questionIndex];
// }

// Quiz.prototype.guess = function(answer) {
//   if(this.getQuestionIndex().isCorrectAnswer(answer)) {
//       this.score++;
//   }

//   this.questionIndex++;
// }

// Quiz.prototype.isEnded = function() {
//   return this.questionIndex === this.questions.length;
// }


// function Question(text, choices, answer) {
//   this.text = text;
//   this.choices = choices;
//   this.answer = answer;
// }

// Question.prototype.isCorrectAnswer = function(choice) {
//   return this.answer === choice;
// }


// function populate() {
//   if(quiz.isEnded()) {
//       showScores();
//   }
//   else {
//       // show question
//       var element = document.getElementById("question");
//       element.innerHTML = quiz.getQuestionIndex().text;

//       // show options
//       var choices = quiz.getQuestionIndex().choices;
//       for(var i = 0; i < choices.length; i++) {
//           var element = document.getElementById("choice" + i);
//           element.innerHTML = choices[i];
//           guess("btn" + i, choices[i]);
//       }

//       showProgress();
//   }
// };

// function guess(id, guess) {
//   var button = document.getElementById(id);
//   button.onclick = function() {
//       quiz.guess(guess);
//       populate();
//   }
// };


// function showProgress() {
//   var currentQuestionNumber = quiz.questionIndex + 1;
//   var element = document.getElementById("progress");
//   element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// };

// function showScores() {
//   var gameOverHTML = "<h1>Result</h1>";
//   gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
//   var element = document.getElementById("quiz");
//   element.innerHTML = gameOverHTML;
// };

// // create questions here
// var questions = [
//   new Question("choose the word which best expresses the meaning of the given word.- CANTANKEROUS", ["Quarrelsome", "Rash","Disrespectful", "Noisy"], "Quarrelsome"),
//   new Question("RANT", ["Praise inordinately", "Formalise", "To preach noisily", "Treat with screen"], "To preach noisily"),
//   new Question("ZANY", ["Clown", "Pet","Thief", "Magician"], "Clown"),
//   new Question("TACITURNITY", ["Dumbness", "Changeablemess", "Hesitation", "Reserve"], "Reserve"),
//   new Question("MASSACRE", ["Murder", "Stab", "Assassinate", "Slaughter"], "Slaughter"),
//   new Question("KEN", ["Ignorance", "Witness", "Trial", "Knowledge"], "Knowledge"),
//   new Question("BARE", ["Uncovered", "Tolerate", "Clear", "Neat"], "Uncovered"),
//   new Question("SALACITY", ["Bliss", "Depression", "Indecency", "Recession"], "Indecency"),
//   new Question("ECSTATIC", ["Animated", "Bewildered", "Enraptured", "Illful"], "Enraptured"),
//   new Question("DILIGENT", ["Progressive", "Brilliant", "Inventive", "Hard-working"], "Hard-working"),
//   new Question("PIOUS", ["Pure", "Pretentious", "Clean", "Devout"], "Devout"),
//   new Question("WARY", ["Sad", "vigilant", "Distorted", "Tired"], "vigilant"),
//   new Question("Antonym of ENORMOUS", ["Soft", "Average", "Tiny", "Weak"], "Tiny"),
//   new Question("Antonym of EXODUS", ["Influx", "Home-coming", "Return", "Restoration"], "Influx"),
//   new Question("Choose the correct meaning of proverb/idiom - To keeps one's temper ", ["To become hungry", "To be in good mood", "To preserve ones energy", "To be aloof from"], "To be in good mood"),
// ];

// // create quiz
// var quiz = new Quiz(questions);

// // display quiz
// populate();