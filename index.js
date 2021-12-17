import Calculator from './models/calculator.js';

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const clrBtn = document.querySelector('[data-clear]');
const previousOpElement = document.querySelector('[data-prev-op]');
const currentOpElement = document.querySelector('[data-curr-op]');

const calculator = new Calculator(previousOpElement, currentOpElement);

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.append(btn.innerText);
        calculator.update();
    });
});

equalsBtn.addEventListener('click', btn => {
    calculator.compute();
    calculator.update();
});

operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOp(btn.innerText);
        calculator.update();
    });
});

clrBtn.addEventListener('click', btn => {
    calculator.clear();
    calculator.update();
});

deleteBtn.addEventListener('click', btn => {
    calculator.delete();
    calculator.update();
});

document.addEventListener('keydown', e => {
    if (e.key.match(/[0-9]/g)) {
        e.preventDefault();
        calculator.append(e.key);
        calculator.update();
    }
    if (e.key.match(/[+\-*\/]/g)) {
        e.preventDefault();
        calculator.chooseOp(e.key);
        calculator.update();
    }
    if (e.key === '.') {
        e.preventDefault();
        calculator.append(e.key);
        calculator.update();
    }
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
        calculator.update();
    }
    if (e.key === 'Backspace') {
        e.preventDefault();
        calculator.delete();
        calculator.update();
    }
    if (e.key === 'Delete') {
        e.preventDefault();
        calculator.clear();
        calculator.update();
    }
});