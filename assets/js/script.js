const container = document.getElementById("container");
var startbtn = document.getElementById("startbtn");
const heading = document.getElementById("heading");
const question = document.getElementById("text");
const timeleft = document.getElementById("timer");
const stats = document.getElementById("stats");
var score = 0;



// the game 
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
    ansA.addEventListener("click", correct)
        function correct(){
        score = Number(score) + 20;
        questiontwo();
        }
    ansB.addEventListener("click", wrong)
        function wrong(){
        seconds = Number(seconds) - 10;
        questiontwo();
        }
    ansC.addEventListener("click", wrong)
        function wrong(){
        seconds = Number(seconds) - 10;
        questiontwo();
        }
    ansD.addEventListener("click", wrong)
        function wrong(){
        seconds = Number(seconds) - 10;
        questiontwo();
        }
    function questiontwo(){
        heading.textContent = "Question 2";
        question.textContent = "Which of the listed answers would you get in the console if you typed 'console.log(typeof 71)' into a linked javascript file?";
        ansA.textContent = "String";
        ansB.textContent = "Boolean";
        ansC.textContent = "Bouillon";
        ansD.textContent = "Number";
        ansA.addEventListener("click", wrong)
            function wrong(){
                seconds = Number(seconds) - 10;
                questionthree();
            }
        ansB.addEventListener("click", wrong)
            function wrong(){
                seconds = Number(seconds) - 10;
                questionthree();
            }
        ansC.addEventListener("click", wrong)
            function wrong(){
                seconds = Number(seconds) - 10;
                questionthree();
            }
        ansD.addEventListener("click", correct)
            function correct(){
                score = Number(score) + 20;
                questionthree();
             }
        function questionthree(){
            heading.textContent = "Question 3";
            question.textContent = "Which of these are not a semantic HTML elements";
            ansA.textContent = "Div";
            ansB.textContent = "Main";
            ansC.textContent = "Footer";
            ansD.textContent = "Figure";
            ansA.addEventListener("click", correct)
                function correct(){
                    score = Number(score) + 20;
                    questionfour();
            }
            ansB.addEventListener("click", wrong)
                function wrong(){
                    seconds = Number(seconds) - 10;
                    questionfour();
            }
            ansC.addEventListener("click", wrong)
                function wrong(){
                    seconds = Number(seconds) - 10;
                    questionfour();
            }
            ansD.addEventListener("click", wrong)
                function wrong(){
                    seconds = Number(seconds) - 10;
                    questionfour();
            }
            function questionfour(){
                heading.textContent = "Question 4";
                question.textContent = "How do you define a variable in a CSS file?";
                ansA.textContent = "var()";
                ansB.textContent = "var =";
                ansC.textContent = ".variable";
                ansD.textContent = "const =";
                ansA.addEventListener("click", correct)
                    function correct(){
                        score = Number(score) + 20;
                        questionfive();
                    }
                ansB.addEventListener("click", wrong)
                    function wrong(){
                        seconds = Number(seconds) - 10;
                        questionfive();
                    }
                ansC.addEventListener("click", wrong)
                    function wrong(){
                        seconds = Number(seconds) - 10;
                        questionfive();
                    }
                ansD.addEventListener("click", wrong)
                    function wrong(){
                        seconds = Number(seconds) - 10;
                        questionfive();
                    }
                function questionfive(){
                    heading.textContent = "Question 5";
                    question.textContent = "To submit user text input you would start with what kind of HTML element?";
                    ansA.textContent = "Button";
                    ansB.textContent = "Figure";
                    ansC.textContent = "Form";
                    ansD.textContent = "Image";
                    ansA.addEventListener("click", wrong)
                        function wrong(){
                            seconds = Number(seconds) - 10;
                            gameover();
                        }
                    ansB.addEventListener("click", wrong)
                        function wrong(){
                            seconds = Number(seconds) - 10;
                            gameover();
                        }
                    ansC.addEventListener("click", correct)
                        function correct(){
                            score = Number(score) + 20;
                            gameover();
                        }
                    ansD.addEventListener("click", wrong)
                        function wrong(){
                            seconds = Number(seconds) - 10;
                            gameover();
                        }
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
// scorescreen
function gameoverscreen(){
    heading.textContent = "Congratulations! You Scored: " + score;
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
    save.addEventListener("click", submithandler);
    function submithandler(){
        localStorage.setItem("Initials", input.value)
        localStorage.setItem("Score", score)
    }
}
// starts the game when the button is clicked
startbtn.addEventListener("click", gamestart);

// views saved scores
stats.addEventListener("click", viewstats);


