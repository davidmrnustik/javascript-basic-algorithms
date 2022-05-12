class Queue {
    constructor() {
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(el) {
        this.items[this.tail] = el;
        this.tail++;
    }

    dequeue() {
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.items[this.head];
    }

    get length() {
        return this.tail - this.head;
    }

    get isEmpty() {
        return this.length === 0;
    }
    get q() {
        return this.items;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.length);

queue.dequeue();
queue.dequeue();
console.log(queue.length);
console.log(queue.q);
console.log(queue.peek());