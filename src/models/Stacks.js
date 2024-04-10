import { Node } from "../models/Node.js";

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
}

export {Stack};
