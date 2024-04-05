import Node from '../models/Node.js';


class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
    }

    pop() {
        let data = this.top.data;
        this.top = this.top.next;
        return data;
    }

    static operaciones(x) {
        switch (x) {
            case '+':
            case '-':
            case '/':
            case '*':
                return true;
        }
        return false;
    }

    static cambio(infix) {
        let operators = new Stack();
        let prefix = [];
        for (let i = infix.length - 1; i >= 0; i--) {
            if (this.operaciones(infix[i])) {
                while (operators.top && operators.top.data !== '(') {
                    prefix.unshift(operators.pop());
                }
                operators.push(infix[i]);
            } else if (infix[i] === ')') {
                operators.push(infix[i]);
            } else if (infix[i] === '(') {
                while (operators.top && operators.top.data !== ')') {
                    prefix.unshift(operators.pop());
                }
                operators.pop();
            } else {
                prefix.unshift(infix[i]);
            }
        }
        while (operators.top) {
            prefix.unshift(operators.pop());
        }
        return prefix.join('');
    }

    static calcularPrefijo(prefix) {
        let stack = new Stack();
        for (let i = prefix.length - 1; i >= 0; i--) {
            if (this.operaciones(prefix[i])) {
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

export default Stack;
