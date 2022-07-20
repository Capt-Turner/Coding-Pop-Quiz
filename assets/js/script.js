const container = document.getElementById("container");
const startbtn = document.getElementById("startbtn");
const heading = document.getElementById("heading");
const question = document.getElementById("text");

// when i press start, the game begins

// when the game begins, a timer starts from 60 and the first question comes up
function questionone(){
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
};

function gamestart(){
    startbtn.remove();
    questionone();
};


startbtn.addEventListener('click', gamestart);

// // when i select an answer, logs if it is the correct or incorrect answer and moves to second question

// if incorrect, incurs a small time penalty

// repeats till end of quiz or timer = 0 where score is shown and initials are input and saved with score

// maybe add a difficulty selector that determines length of quiz?
