const container = document.getElementById("container");
var startbtn = document.getElementById("startbtn");
const heading = document.getElementById("heading");
const question = document.getElementById("text");
const timeleft = document.getElementById("timer");
const stats = document.getElementById("stats");

// function definitions
function viewstats(){

}

function questionone(){
    var seconds = 91;
    var timerInterval = setInterval(function(){
        seconds--;
        timeleft.textContent = "Time Left: " + seconds;
        if(seconds === 0) {
            clearInterval(timerInterval);
            gameoverscreen();
        }
    }, 1000);
    heading.textContent = "Question 1";
    question.textContent = "Which language forms the foundation of a webpage?";
    var ansA = document.createElement("button");
    var ansB = document.createElement("button");
    var ansC = document.createElement("button");
    var ansD = document.createElement("button");
    ansA.classList.add("answerbtn");
    ansB.classList.add("answerbtn");
    ansC.classList.add("answerbtn");
    ansD.classList.add("answerbtn");
    container.appendChild(ansA);
    container.appendChild(ansB);
    container.appendChild(ansC);
    container.appendChild(ansD);
    ansA.textContent = "HTML";
    ansB.textContent = "CSS";
    ansC.textContent = "Javascript";
    ansD.textContent = "Latin";
    ansA.addEventListener("click", questiontwo);
    ansB.addEventListener("click", questiontwo);
    ansC.addEventListener("click", questiontwo);
    ansD.addEventListener("click", questiontwo);
    function questiontwo(){
        heading.textContent = "Question 2";
        question.textContent = "Which of the listed answers would you get in the console if you typed 'console.log(typeof 71)' into a linked javascript file?";
        ansA.textContent = "String";
        ansB.textContent = "Boolean";
        ansC.textContent = "Bouillon";
        ansD.textContent = "Number";
        ansA.addEventListener("click", questionthree);
        ansB.addEventListener("click", questionthree);
        ansC.addEventListener("click", questionthree);
        ansD.addEventListener("click", questionthree);
        function questionthree(){
            heading.textContent = "Question 3";
            question.textContent = "Which of these are not a semantic HTML elements";
            ansA.textContent = "Div";
            ansB.textContent = "Main";
            ansC.textContent = "Footer";
            ansD.textContent = "Figure";
            ansA.addEventListener("click", questionfour);
            ansB.addEventListener("click", questionfour);
            ansC.addEventListener("click", questionfour);
            ansD.addEventListener("click", questionfour);
            function questionfour(){
                heading.textContent = "Question 4";
                question.textContent = "How do you define a variable in a CSS file?";
                ansA.textContent = "var()";
                ansB.textContent = "var =";
                ansC.textContent = ".variable";
                ansD.textContent = "const =";
                ansA.addEventListener("click", questionfive);
                ansB.addEventListener("click", questionfive);
                ansC.addEventListener("click", questionfive);
                ansD.addEventListener("click", questionfive);
                function questionfive(){
                    heading.textContent = "Question 5";
                    question.textContent = "Which of the listed answers would you get in the console if you typed 'console.log(typeof 71)' into a linked javascript file?";
                    ansA.textContent = "String";
                    ansB.textContent = "Boolean";
                    ansC.textContent = "Bouillon";
                    ansD.textContent = "Number";
                    ansA.addEventListener("click", gameover);
                    ansB.addEventListener("click", gameover);
                    ansC.addEventListener("click", gameover);
                    ansD.addEventListener("click", gameover);
                    function gameover(){
                        ansA.remove();
                        ansB.remove();
                        ansC.remove();
                        ansD.remove();
                        gameoverscreen();
                        clearInterval(timerInterval);
                    }
                }
            }
        }
    }
};

function gamestart(){
    startbtn.remove();
    questionone();
};
function gameoverscreen(){
    heading.textContent = "Congratulations! You Scored: "
    text.textContent = "Sign your initials here and click Submit to save your score";
    var form = document.createElement("form");
    var input = document.createElement("input");
    var save = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "initials");
    input.setAttribute("placeholder", "Initial Here");
    save.setAttribute("type", "submit");
    save.setAttribute("value", "Submit");
    form.append(input);
    form.append(save);
    container.appendChild(form);
}
// starts the game when the button is clicked
startbtn.addEventListener("click", gamestart);
stats.addEventListener("click", viewstats);

// // when i select an answer, logs if it is the correct or incorrect answer and moves to second question

// if incorrect, incurs a small time penalty

// repeats till end of quiz or timer = 0 where score is shown and initials are input and saved with score

// maybe add a difficulty selector that determines length of quiz?
                       

// heading.textContent = "Coding Quiz Challenge";
// question.textContent = "You have one minute to complete this short challenge. Try to answer them all correctly for a perfect score. Be careful though, an inccorect answer will give you a small time penalty.Don't forget to save your highscores with your initials to show off your skills! Press the start button below to begin!";
// var startbtn = document.createElement("button");
// startbtn.textContent = "Start the Quiz!";
// startbtn.setAttribute("id", "startbtn");
// container.appendChild(startbtn);
// startbtn.addEventListener("click", gamestart)
