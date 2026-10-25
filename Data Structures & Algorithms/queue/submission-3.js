class ListNode {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class MyDeque {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.head.next === this.tail;
  }

  /**
   * @param {number} value
   */
  append(value) {
    let newNode = new ListNode(value, this.tail.prev, this.tail);
    newNode.prev.next = newNode;
    this.tail.prev = newNode;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  appendleft(value) {
    let newNode = new ListNode(value, this.head, this.head.next);
    this.head.next = newNode;
    newNode.next.prev = newNode;
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    let popped = this.tail.prev;
    popped.prev.next = this.tail;
    this.tail.prev = popped.prev;
    return popped.val;
  }

  /**
   * @return {number}
   */
  popleft() {
    if (this.isEmpty()) {
      return -1;
    }
    let popped = this.head.next;
    popped.next.prev = this.head;
    this.head.next = popped.next;
    return popped.val;
  }
}