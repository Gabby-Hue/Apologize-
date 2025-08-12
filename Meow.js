const questionContainer = document.getElementById('question-container');
const question2Container = document.getElementById('question2-container');
const resultContainer = document.getElementById('result-container');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const yes2Btn = document.getElementById('yes2-btn');
const no2Btn = document.getElementById('no2-btn');

const container = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none';
    question2Container.style.display = 'block';
});

yes2Btn.addEventListener('click', () => {
    question2Container.style.display = 'none';
    resultContainer.style.display = 'block';
    setTimeout(function() {
        location.reload();
    }, 6000);
});

function moveButton(btn) {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const newTop = Math.random() * (containerRect.height - btnRect.height);
    const newLeft = Math.random() * (containerRect.width - btnRect.width);

    btn.style.position = 'absolute';
    btn.style.top = `${newTop}px`;
    btn.style.left = `${newLeft}px`;
}

noBtn.addEventListener('mouseover', () => moveButton(noBtn));
noBtn.addEventListener('click', () => moveButton(noBtn));
no2Btn.addEventListener('mouseover', () => moveButton(no2Btn));
no2Btn.addEventListener('click', () => moveButton(no2Btn));