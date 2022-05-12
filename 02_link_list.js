class Node {
    constructor(val) {
        this.val = val;
        this.next = undefined;
    }

    get_data() {
        return this.val;
    }

    set_data(val) {
        this.val = val;
    }

    get_next() {
        return this.next;
    }

    set_next(next) {
        this.next = next;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
        this.count = 0;
    }

    get_count() {
        return this.count;
    }

    insert(data) {
        const new_node = new Node(data);
        new_node.set_next(this.head);
        this.head = new_node;
        this.count++;

    }

    find(val) {
        let item = this.head;
        while(item) {
            if (item.get_data() === val) {
                return item;
            } else {
                item = item.get_next();
            }
        }

        return undefined;
    }

    deleteAt(idx) {
        if (idx > this.count - 1) {
            return undefined;
        }

        if (idx === 0) {
            this.head = this.head.get_next();
        } else {
            let tempIdx = 0;
            let node = this.head;
            while (tempIdx < idx - 1) {
                node = node.get_next();
                tempIdx++;
            }
            node.set_next(node.get_next().get_next());
            this.count--;
        }
    }

    dump_list() {
        let tempnode = this.head;

        while(typeof tempnode !== "undefined") {
            console.log("Node: ", tempnode.get_data())
            tempnode = tempnode.get_next();
        }
    }
}

const itemlist = new LinkedList();
itemlist.insert(38);
itemlist.insert(49);
itemlist.insert(13);
itemlist.insert(15);
itemlist.dump_list();

itemlist.deleteAt(3);
console.log("Item count: ", itemlist.get_count());
console.log("Finding item: ", itemlist.find(38));
itemlist.dump_list();