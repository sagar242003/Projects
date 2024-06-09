//Question bank
var questionBank= [
    {
        question : 'Which of the following CSS selectors are used to specify a group of elements?',
        option : ['tag','id','class','both class and tag'],
        answer : 'class'
    },
    {
        question : ' Which of the following CSS selector is used to specify a rule to bind a particular unique element?',
        option : ['tag','id','class','both class and tag'],
        answer : 'id'
    },
    {
        question : 'Which of the following CSS framework is used to create a responsive design?',
        option : ['Bootstrap','django','rails','larawell'],
        answer : 'Bootstrap'
    },
    {
        question : 'Which of the following CSS property is used to make the text bold?',
        option : [' text-decoration: bold','font-weight: bold','font-size: bold',' font-style: bold'],
        answer : 'font-weight: bold'
    },
    {
        question : 'What will be the output of following CSS code snippet? h1 {color: red text-decoration: underline; font-style: italic;} ',
        option : ['color: red, text-decoration: underline works','only font-style: italic works','color: red, text-decoration: underline and font-style: italic all works','text-decoration: underline and font-style: italic works'],
        answer : 'only font-style: italic works'
    },
    {
        question : 'Which of the following function defines a linear gradient as a CSS image?',
        option : ['gradient()','linear-gradient()','grayscale()',' image()'],
        answer : 'linear-gradient()'
    },
    {
    question : 'Which of the following is not the property of the CSS box model?',
    option : ['margin','color','width','height'],
    answer : 'color'
    },
    {
        question : 'Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?',
        option : ['text-style : capital;','transform : capitalize;','text-transform : capital;','text-transform : capitalize;'],
        answer : 'text-transform : capitalize;'
        },
    {
        question : ' What will be the output of the following CSS code snippet?  span { border: 1px solid red; outline: green dotted thick; }',
        option : ['All span elements will have a green thick border and a red outline','All span elements will have a red border and a green dotted outline','All span elements will have a outer green dotted border and an inner red border','All span elements will have an outer red border and inner green dotted border'],
        answer : 'All span elements will have a outer green dotted border and an inner red border'
        }
]


var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var back= document.querySelector('.back');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,10);
    
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//function to display previous question
function preQuestion(){
    if(i<questionBank.length-1)
    {
        i=i-1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);
back.addEventListener('click',preQuestion);


//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();