// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.textContent;

            if (value >= '0' && value <= '9' || value === '.') {
                currentInput += value;
                display.value = currentInput;
            } else if (value === 'C') {
                clear();
            } else if (value === '=' && firstValue !== '') {
                secondValue = currentInput;
                calculate();
            } else {
                operator = value;
                if (firstValue === '') {
                    firstValue = currentInput;
                }
                currentInput = '';
            }
        });
    });

    function clear() {
        currentInput = '';
        operator = '';
        firstValue = '';
        secondValue = '';
        display.value = '';
    }

    function calculate() {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);
        switch (operator) {
            case '+':
                display.value = num1 + num2;
                break;
            case '-':
                display.value = num1 - num2;
                break;
            case '*':
                display.value = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    display.value = num1 / num2;
                } else {
                    display.value = 'Error';
                }
                break;
        }
    }
});
