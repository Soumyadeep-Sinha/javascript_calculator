let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let displayOutput = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText === 'X') {
            buttonText = '*';
            displayOutput += buttonText;
            screen.value = displayOutput;
        }
        else if (buttonText === 'C') {
            displayOutput = "";
            screen.value = displayOutput;
        }
        else if (buttonText === '=') {
            screen.value = eval(displayOutput);
        }
        else {
            displayOutput += buttonText;
            screen.value = displayOutput;
        }

    })
}