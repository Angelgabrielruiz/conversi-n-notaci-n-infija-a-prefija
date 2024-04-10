import { conversor } from "../controllers/conversor.js";

function handleCalculation() {
    let infix = document.getElementById('infix').value;
    let prefix = conversor.convertInfixToPrefix(infix);
    document.getElementById('prefix').value = prefix;
    let result = conversor.calculatePrefix(prefix);
    document.getElementById('result').value = result;
}

document.getElementById('calculate').addEventListener('click', handleCalculation);
