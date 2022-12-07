const rock = document.querySelector('.r');
const scissors = document.querySelector('.s');
const paper = document.querySelector('.p');
const button = document.getElementById('button');
const computer = document.querySelector('.computer');
const finalresult = document.querySelector('.result');

button.addEventListener('click', () => {
  const name = document.getElementsByName('rps');
  let result;
  name.forEach(el => {
    if (el.checked === true) {
      result = el;
    }
  });
  const resultFromComputer = byComputer();
  const [co, ko] = resultFromComputer;
  computer.textContent = ko;

  const { value } = result;

  let final;
  if (value === 'r') {
    if (co === 'r') {
      final = '비김';
    } else if (co === 's') {
      final = '이김';
    } else {
      final = '짐';
    }
  } else if (value === 's') {
    if (co === 'r') {
      final = '짐';
    } else if (co === 's') {
      final = '비김';
    } else {
      final = '이김';
    }
  } else {
    if (co === 'r') {
      final = '이김';
    } else if (co === 's') {
      final = '짐';
    } else {
      final = '비김';
    }
  }

  finalresult.textContent = final;
});

function byComputer() {
  const randomNo = Math.floor(Math.random() * 3);
  const arr = ['r', 's', 'p'];
  let result;
  if (arr[randomNo] === 'r') {
    result = '바위';
  } else if (arr[randomNo] === 's') {
    result = '가위';
  } else {
    result = '보';
  }
  return [arr[randomNo], result];
}
