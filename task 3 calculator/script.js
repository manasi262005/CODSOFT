const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.btn');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');
const themeToggle = document.getElementById('themeToggle');

let expression = '';
let history = JSON.parse(localStorage.getItem('calcHistory')) || [];

function updateHistory() {
  historyList.innerHTML = history.map(item => `<li>${item.expression} = ${item.result}</li>`).join('');
  localStorage.setItem('calcHistory', JSON.stringify(history));
}

function evaluateExpression(expr) {
  let modifiedExpr = expr.replace(/×/g, '*').replace(/÷/g, '/')
                        .replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos');
  return eval(modifiedExpr);
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const value = e.target.innerHTML;
    handleInput(value);
  });
});

function handleInput(value) {
  if (value === '=') {
    try {
      let result = evaluateExpression(expression);
      result = Number.isFinite(result) ? result.toFixed(4) : 'Error';
      history.unshift({ expression, result });
      if (history.length > 10) history.pop();
      updateHistory();
      input.value = result;
      expression = result.toString();
    } catch {
      input.value = 'Error';
      expression = '';
    }
  } else if (value === 'AC') {
    expression = '';
    input.value = '';
  } else if (value === 'DEL') {
    expression = expression.slice(0, -1);
    input.value = expression;
  } else if (value === 'sin' || value === 'cos') {
    expression += value + '(';
    input.value = expression;
  } else {
    expression += value;
    input.value = expression;
  }
}

document.addEventListener('keydown', e => {
  const key = e.key;
  if (/\d|\.|[\+\-\*\/\%\(\)]/.test(key)) handleInput(key);
  if (key === 'Enter') handleInput('=');
  if (key === 'Backspace') handleInput('DEL');
  if (key === 'Escape') handleInput('AC');
});

clearHistoryBtn.addEventListener('click', () => {
  history = [];
  updateHistory();
});

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
});

updateHistory();