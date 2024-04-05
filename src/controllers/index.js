import Stack from '../models/Stacks.js';

function handleCalculation() {
    let infix = document.getElementById('infix').value;
    let prefix = Stack.cambio(infix);
    document.getElementById('prefix').value = prefix;
    let result = Stack.calcularPrefijo(prefix);
    document.getElementById('result').value = result;
}

document.getElementById('calculate').addEventListener('click', handleCalculation);
