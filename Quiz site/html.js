//Question bank
var questionBank= [
    {
        question : ' Which of the following is the root tag of the HTML document?',
        option : ['body','head','title','html'],
        answer : 'html'
    },
    {
        question : 'What is DOM in HTML?',
        option : ['Language dependent application programming',' Hierarchy of objects in ASP.NET','Application programming interface','Convention for representing and interacting with objects in html documents'],
        answer : 'Convention for representing and interacting with objects in html documents'
    },
    {
        question : ' What is the work of "address" element in HTML5?',
        option : [' contains IP address',' contains home address','contains url','contains contact details for author'],
        answer : 'contains contact details for author'
    },
    {
        question : ' Which tag is used to create a blank line in HTML?',
        option : ['b','br','em','a'],
        answer : 'br'
    },
    {
        question : 'Which attribute specifies a unique alphanumeric identifier to be associated with an element?',
        option : ['type','article','id','class'],
        answer : 'id'
    },
    {
        question : 'Which HTML element is used for YouTube videos?',
        option : ['samp','small','iframe','frame'],
        answer : 'iframe'
    },
    {
        question : 'What is the purpose of using div tags in HTML?',
        option : ['	For creating Different styles','For creating different sections','	For adding headings','For adding titles'],
        answer : 'For creating different sections'
    },
    {
    question : 'Which of the following attributes is used to open an hyperlink in new tab?',
    option : ['tab','href','target','ref'],
    answer : 'target'
    },
    {
        question : 'Which of the following is not a difference between HTML and XHTML?',
        option : ['Charset in both html and xhtml is “text/html”','Tags and attributes are case-insensitive in HTML but not in XHTML','targe Special characters must be escaped using character entities in XHTML unlike HTML','Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”'],
        answer : 'Charset in both html and xhtml is “text/html”'
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
    setTimeout(nextQuestion,300);
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

// Fuction to display previous questions
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
back.addEventListener('click', preQuestion);
next.addEventListener('click',nextQuestion);

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