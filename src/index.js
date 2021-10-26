/* START TASK 1 */
const div1 = document.getElementById('task1');
const allTd = document.querySelectorAll('td');
const allTr = document.querySelectorAll('tr');

div1.firstChild.nextSibling.style.backgroundColor = 'white';
Array.from(allTd).map((item2) => {
  item2.style.backgroundColor = 'white';
});

function spesialFuncCell() {
  if (div1.firstChild.nextSibling.style.backgroundColor === 'white') {
    div1.firstChild.nextSibling.style.backgroundColor = 'green';
    Array.from(allTd).map((item2) => {
      if (item2.style.backgroundColor === 'white') {
        item2.style.backgroundColor = 'green';
      }
    });
  }
}

Array.from(allTr).map((item1) => {
  item1.firstChild.nextSibling.onclick = function () {
    Array.from(item1.children).map((item2) => {
      if (item2.style.backgroundColor !== 'yellow') {
        item2.style.backgroundColor = 'blue';
      }
    });
  };
});

Array.from(allTr).map((item1) => {
  item1.firstChild.nextSibling.nextSibling.nextSibling.onclick = function (event) {
    const { target } = event;
    target.style.backgroundColor = 'yellow';
  };

  item1.lastChild.previousSibling.onclick = function (event) {
    const { target } = event;
    if (target.className === 'special') {
      return spesialFuncCell();
    }
    return target.style.backgroundColor = 'yellow';
  };
});
/* END TASK 1 */

/* START TASK 2 */
function validNum(num) {
  const match = String(num.match(/^\+380[0-9]{9}$/g));
  if (num === undefined || num === '' || match === 'null') {
    return '+380*********';
  }
  return match;
}

const div2 = document.querySelector('#task2');
const button = document.querySelector('.btn');
const divMessage = document.querySelector('.alert');

const input = document.querySelector('#validator');
input.placeholder = 'Type phone number in format +380*********';

input.onkeyup = function () {
  const val1 = validNum(input.value);
  if (val1 === '+380*********') {
    input.style.border = '1px solid red';
    divMessage.style.border = '1px solid black';
    divMessage.style.backgroundColor = 'red';
    divMessage.textContent = `Type number does not follow format\n+380*********`;
    div2.prepend(divMessage);
    return button.disabled = true;
  }
  return button.disabled = false;
};

button.onclick = function () {
  const val2 = validNum(input.value);
  if (val2 !== '+380*********') {
    input.style.border = '1px solid black';
    divMessage.style.border = '1px solid black';
    divMessage.style.backgroundColor = 'green';
    divMessage.textContent = 'Data was successfully sent';
  }
};
/* END TASK 2 */

/* START TASK 3 */
const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

const fieldCoordinates = field.getBoundingClientRect();

const HALF = 2;

const ballToCenter = () => {
  ball.style.left = `${fieldCoordinates.width / HALF - ball.clientWidth / HALF}px`;
  ball.style.top = `${fieldCoordinates.height / HALF - ball.clientHeight / HALF}px`;
};

ballToCenter();

field.addEventListener('click', (event) => {
  const ballCoordinates = {
    top: event.clientY - fieldCoordinates.top - field.clientTop - ball.clientHeight / HALF,
    left: event.clientX - fieldCoordinates.left - field.clientLeft - ball.clientWidth / HALF
  };

  if (ballCoordinates.top < 0) {
    ballCoordinates.top = 0;
  }

  if (ballCoordinates.left < 0) {
    ballCoordinates.left = 0;
  }

  if (ballCoordinates.left + ball.clientWidth > field.clientWidth) {
    ballCoordinates.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoordinates.top + ball.clientHeight > field.clientHeight) {
    ballCoordinates.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = `${ballCoordinates.left}px`;
  ball.style.top = `${ballCoordinates.top}px`;
});

let scoreA = 0;
let scoreB = 0;

const ONE_SECOND = 1000;
const TWO_SECONDS = 2000;

document.querySelector('.basket-zone-left').addEventListener('click', () => {
  scoreA += 1;
  setTimeout(() => {
    document.querySelector('.js-score-a').innerText = scoreA;
    document.querySelector('.score-for-team-a').classList.add('show');
    setTimeout(() => {
      document.querySelector('.score-for-team-a').classList.remove('show');
    }, TWO_SECONDS);
    ballToCenter();
  }, ONE_SECOND);
});

document.querySelector('.basket-zone-right').addEventListener('click', () => {
  scoreB += 1;
  setTimeout(() => {
    document.querySelector('.js-score-b').innerText = scoreB;
    document.querySelector('.score-for-team-b').classList.add('show');
    setTimeout(() => {
      document.querySelector('.score-for-team-b').classList.remove('show');
    }, TWO_SECONDS);
    ballToCenter();
  }, ONE_SECOND);
});
/* END TASK 3 */
