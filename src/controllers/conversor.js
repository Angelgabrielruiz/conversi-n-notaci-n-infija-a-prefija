import { Stack } from "../models/Stacks.js";
class conversor {
    static isOperator(x) {
        switch (x) {
            case '+':
            case '-':
            case '/':
            case '*':
                return true;
        }
        return false;
    }

    static convertInfixToPrefix(infix) {
        let operators = new Stack();
        let prefix = [];
        for (let i = infix.length - 1; i >= 0; i--) {
            if (this.isOperator(infix[i])) {
                while (operators.top && operators.top.data !== '(') {
                    prefix.push(operators.pop());
                }
                operators.push(infix[i]);
            } else if (infix[i] === ')') {
                operators.push(infix[i]);
            } else if (infix[i] === '(') {
                while (operators.top && operators.top.data !== ')') {
                    prefix.push(operators.pop()); 
                }
                operators.pop();
            } else {
                prefix.push(infix[i]); 
            }
        }
        while (operators.top) {
            prefix.push(operators.pop()); 
        }
        return prefix.reverse().join(''); 
    }

    static calculatePrefix(prefix) {
        let stack = new Stack();
        for (let i = prefix.length - 1; i >= 0; i--) {
            if (this.isOperator(prefix[i])) {
                let op1 = stack.pop();
                let op2 = stack.pop();
                switch (prefix[i]) {
                    case '+':
                        stack.push(op1 + op2);
                        break;
                    case '-':
                        stack.push(op1 - op2);
                        break;
                    case '*':
                        stack.push(op1 * op2);
                        break;
                    case '/':
                        stack.push(op1 / op2);
                        break;
                }
            } else {
                stack.push(Number(prefix[i]));
            }
        }
        return stack.pop();
    }
}

export {conversor};
