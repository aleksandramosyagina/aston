class SimpleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    const node = { value, next: null };

    if (!this.head) {
      this.head = node;
    } else {
      let currentItem = this.head;

      while (currentItem.next) {
        currentItem = currentItem.next;
      }
      currentItem.next = node;
    }
    this.length++;
  }
  size() {
    return this.length;
  }

  find(value) {
    let currentItem = this.head;

    while (currentItem) {
      if (currentItem.value === value) {
        return currentItem;
      }

      currentItem = currentItem.next;
    }
    return null;
  }

  remove(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      const removedValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      return removedValue;
    }

    let currentItem = this.head;

    while (currentItem.next) {
      if (currentItem.next.value === value) {
        const removedValue = currentItem.next.value;
        currentItem.next = currentItem.next.next;
        this.length--;
        return removedValue;
      }

      currentItem = currentItem.next;
    }
    return null;
  }
}

const list = new SimpleLinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.size());

list.find(2).value;
list.remove(2);

console.log(list.size());
