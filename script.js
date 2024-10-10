let memory = 0; 

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === 'Math.sqrt(') {
        display.value += 'Math.sqrt(';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        
        const expression = display.value.replace(/1\//g, '1/').replace(/%/g, '/100'); // Manejar el porcentaje
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}

function doNothing() {
    
}

function memoryAdd() {
    const display = document.getElementById('display');
    memory += parseFloat(display.value) || 0; 
    clearDisplay();
}

function memorySubtract() {
    const display = document.getElementById('display');
    memory -= parseFloat(display.value) || 0; 
    clearDisplay();
}

function toggleSign() {
    const display = document.getElementById('display');
    display.value = -parseFloat(display.value) || 0; 
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value += memory; 
}


document.querySelector('button:contains("MR")').onclick = memoryRecall;
