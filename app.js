


let jsQuestions = [
    {
        question: '1. Inside which HTML element do we put the JavaScript?',
        option1: '<script>',
        option2: '<javascript>',
        option3: '<js>',
        correctOption: '<script>'
    },
    {
        question: '2. Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section'
    },
    {
        question: '3. What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">'
    },
    {
        question: '4. The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        option3: 'none',
        correctOption: 'False'
    },
    {
        question: '5. How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        correctOption: 'alert("Hello World");'
    },
    {
        question: '6. How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()'
    },
    {
        question: '7 .How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()'
    },
    {
        question: '8. How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        correctOption: 'if(i == 5)'
    },
    {
        question: '9. How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        correctOption: 'if(i != 5)'
    },
    {
        question: '10. How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)'
    },
    {
        question: '11. How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        correctOption: 'for (i = 0; i <= 5; i++)'
    },
    {
        question: '12. How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment'
    },
    {
        question: '13. What is the correct way to write a JavaScript array?',
        option1: 'let colors = "red", "green", "blue"',
        option2: 'let colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'let colors = ["red", "green", "blue"]',
        correctOption: 'let colors = ["red", "green", "blue"]'
    },
    {
        question: '14. How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)',
        option2: 'Math.rnd(7.25)',
        option3: 'Math.round(7.25)',
        correctOption: 'Math.round(7.25)'
    },
    {
        question: '15. How do you find the number with the highest value of x and y?',
        option1: 'ceil(x, y)',
        option2: 'Math.ceil(x ,y)',
        option3: 'Math.max(x, y)',
        correctOption: 'Math.max(x, y)'
    },
    {
        question: '16. What is the correct JavaScript syntax for opening a new window called "w2" ?',
        option1: 'w2 = window.open("http://www.w3schools.com");',
        option2: 'w2 = window.new("http://www.w3schools.com");',
        option3: 'w2 = window.target("http://www.w3schools.com");',
        correctOption: 'w2 = window.open("http://www.w3schools.com");'
    },
    {
        question: '17. JavaScript is the same as Java.',
        option1: 'True',
        option2: 'False',
        option2: 'none',
        correctOption: "False"
    },
    {
        question: "18. How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName'
    },
    {
        question: '19. Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseclick',
        option3: 'onchange',
        correctOption: 'onclick'
    },
    {
        question: '20. How do you declare a JavaScript letiable?',
        option1: 'v carName;',
        option2: 'letiable carName;',
        option3: 'let carName;',
        correctOption: 'let carName;'
    }
]


let qustions = document.querySelector('.qustion')
let option1 = document.querySelector('.option1')
let option2 = document.querySelector('.option2')
let option3 = document.querySelector('.option3')
let btn = document.querySelector('.btn')
let quizWebsite = document.querySelector('.quiz_website')
let resultBox = document.querySelector('.result_box')
let timer = document.querySelector('.timer')
// let tryAgainbtn = document.querySelector('.tryAgainbtn')
let index = 0;
let score = 0;
 
//quiz timer
let min = 9;
let sec = 59;

let interval = setInterval(function(){
    timer.innerHTML = `${min} : ${sec}`
    sec--
    if(sec < 0){
        min--
        sec=59
    }
    if(min<0){
        clearInterval(interval)
        timer.innerHTML = 'Time up'
        timer.style.color = 'Red'
        showResultBox()
    }
},1000)








function nextQuestion(){
    let getOptions = document.getElementsByName('options')
    for(let i=0; i<getOptions.length; i++){
        if(getOptions[i].checked){
            let selectedValue = getOptions[i].value
            let selectQuestion = jsQuestions[index -1]['question']
            let selectedAnswer = jsQuestions[index -1][`option${selectedValue}`]
            let correctAnswer = jsQuestions[index -1]['correctOption']
            console.log((correctAnswer));
            if(selectedAnswer==correctAnswer){

                score++
            }
        }
        getOptions[i].checked = false;
    }
    
    
    if(index > jsQuestions.length -1){
        showResultBox()
        // console.log(`Your Percentage is ${(score / jsQuestions.length)*100}%` );
    }else{
        qustions.textContent = jsQuestions[index].question
    option1.textContent = jsQuestions[index].option1
    option2.textContent = jsQuestions[index].option2
    option3.textContent = jsQuestions[index].option3
    index++

    }
    btn.disabled = true;
    btn.style.color = 'black'

}
nextQuestion()



function clicked(){
    btn.disabled = false;
    btn.style.color = 'white'
}


function showResultBox (){
quizWebsite.classList.add('active')
resultBox.classList.add('active')

let ciecularProgress = document.querySelector('.ciecular_progress')
let percentageValue = document.querySelector('.percentage_value')
let result = document.querySelector('.result')
let percentageStartValue = -1;
let percentageEndValue = (score / jsQuestions.length) * 100;
let speed = 20;
let progress = setInterval(()=>{
    percentageStartValue++
    // console.log(percentageStartValue);
    percentageValue.textContent = `${percentageStartValue}%`
    // ciecularProgress.style.background = `conic-gradient(green ${percentageStartValue * 3.6}deg, rgba(74, 72, 72, 0.1) 0deg`
    if(percentageStartValue==percentageEndValue){
        clearInterval(progress)
    }
    if(percentageStartValue<70 ){
        ciecularProgress.style.background = `conic-gradient(red ${percentageStartValue * 3.6}deg, rgba(74, 72, 72, 0.1) 0deg`
        // result.classList.add('active')
        result.innerHTML = 'You Fail'
        result.style.color = 'red'
    }
    else if(percentageStartValue>70){
        ciecularProgress.style.background = `conic-gradient(green ${percentageStartValue * 3.6}deg, rgba(74, 72, 72, 0.1) 0deg`
        result.innerHTML = 'You Pass'
        result.style.color = 'green'
    }

},speed)


}


let home_btn = document.querySelector('.home_btn')
home_btn.addEventListener('click', ()=>{
    window.location = 'index.html'
})











