class Calculator {
    constructor(prevOpElement, currOpElement) {
        this.prevOpElement = prevOpElement;
        this.currOpElement = currOpElement;
        this.clear();
    }

    clear() {
        this.currOp = '0';
        this.prevOp = '';
        this.operation = undefined;
    }

    delete() {
        this.currOp = this.currOp.toString().slice(0, -1);
    }

    append(number) {
        if (number === '.' && this.currOp.includes('.')) return;
        this.currOp = `${this.currOp}${number}`; 
    }

    chooseOp(operation) {
        if (this.currOp === '') return;
        else this.compute();
        this.operation = operation;
        this.prevOp = this.currOp;
        this.currOp = '';
    }

    compute() {
        let result;
        const previous = parseFloat(this.prevOp);
        const current = parseFloat(this.currOp);

        if (isNaN(previous) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                console.log('* pressed');
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }
        this.currOp = result;
        this.operation = undefined;
        this.prevOp = '';
    }

    getDisplay(number) {
        const strNum = number.toString();
        const intDigits = parseFloat(strNum.split('.')[0]);
        const decimalDigits = strNum.split('.')[1];
        
        let integerDisplay;

        if (isNaN(intDigits)) {
            integerDisplay = '';
        } 
        else {
            integerDisplay = intDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        return decimalDigits != null ? `${integerDisplay}.${decimalDigits}` : integerDisplay;
    }

    update() {
        this.currOpElement.innerText = this.getDisplay(this.currOp);
        if (this.operation != null) {
            this.prevOpElement.innerText =
                `${this.getDisplay(this.prevOp)} ${this.operation}`;
        } 
        else {
            this.prevOpElement.innerText = '';
        }
    }
}

export default Calculator;