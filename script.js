const questions = [
    {
        q: "What is HTML?",
        options: ["Programming", "Markup", "DB", "OS"],
        answer: 1
    },
    {
        q: "CSS is used for?",
        options: ["Logic", "Design", "Server", "Data"],
        answer: 1
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[current].q;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = questions[current].options[i];
    }
}

function checkAnswer(i) {
    if (i === questions[current].answer) score++;

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-box").innerHTML =
            "<h2>Finished!</h2><p>Score: " + score + "</p>";
    }

    document.getElementById("score").innerText = "Score: " + score;
}

loadQuestion();