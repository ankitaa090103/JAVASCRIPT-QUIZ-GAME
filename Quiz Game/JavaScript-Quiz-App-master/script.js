const questions = [
    {

    question: "What does HTML stand for?",
     answer: [
      {text:"Hyper Text Preprocessor",correct:false},
      {text:"Hyper Text Markup Language",correct:true},
      {text:"Hyper Text Multiple Language",correct:false},
      {text:"Hyper Tool Multi Language",correct:false},
    ]
  },
    {
 
    question: "What does CSS stand for?",
    answer: [
      {text:"Common Style Sheet",correct:false},
      {text:"Colorful Style Sheet",correct:false},
      {text:"Computer Style Sheet",correct:false},
      {text:"Cascading Style Sheet",correct:true},
    ]
  },
    {

    question: "What does PHP stand for?",
    answer:[
      {text:"Hypertext Preprocessor",correct:true},
      {text:"Hypertext Programming",correct:false},
      {text:"Hypertext Preprogramming",correct:false},
      {text:"Hometext Preprocessor",correct:false},
    ]
  },
    {

    question: "What does SQL stand for?",
    answer: [
      {text:"Stylish Question Language",correct:false},
      {text:"Stylesheet Query Language",correct:false},
      {text:"Statement Question Language",correct:false},
      {text:"Structured Query Language",correct:true},
    ]
  },
    {
    
    question: "What does XML stand for?",
    answer:[
      {text:"eXtensible Markup Language",correct:true},
      {text:"eXecutable Multiple Language",correct:false},
      {text:"eXTra Multi-Program Language",correct:false},
      {text:"eXamine Multiple Language",correct:false},
    ]
  },
];

const questionelement =document.getElementById("questions");
const answerbuttons =document.getElementById("answer-buttons");
const nextbutton =document.getElementById("next-btn");

//when ever the game gets started the score and the question number gets increses
let currentquestionindex =0;
let score=0;

function startquiz()
{
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next"
    showquestion();
}
function showquestion(){
    resetState();
    let currentquestion = questions[currentquestionindex];
    let questionNo=currentquestionindex + 1;
    questionelement.innerHTML=questionNo + "." + currentquestion.question;
    currentquestion.answer.forEach(answers=>{
        const button = document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answers.correct.correct)
            {
                button.dataset.correct=answers.correct;
            }
        button.addEventListener("click",selectanswer);
    });
}
function resetState(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectanswer(e)
{
    const selectedbtn =e.target;
    const iscorrect = selectedbtn.dataset.correct==="true";
    if(iscorrect){
            selectedbtn.classList.add("correct");
            score++;
        }else{
            selectedbtn.classList.add("incorrect");
        }
        Array.from(answerbuttons.children).forEach(button =>
            {
                if(button.dataset.correct === "true")
                    {
                        button.classList.add("correct");
                    }
                    button.disabled = true;
            });
            nextbutton.style.display="block";
}
function showscore(){
    resetState();
    questionelement.innerHTML=`Your Scored ${score} out of ${questions.length}!!!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handlenextbutton();
    }
    else{
        startquiz();
    }
})
startquiz();
