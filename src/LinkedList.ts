import {Sorter} from './Sorter'

type MaybeLinkedListNode = LinkedListNode | null

export class LinkedListNode {
  constructor(public value: number, public next: MaybeLinkedListNode = null) {}
}

export class LinkedList extends Sorter {
  constructor(public head: MaybeLinkedListNode = null) {
    super()
  }

  get length() {
    let count = 0
    this.traverse(() => {
      count += 1
    })

    return count
  }

  private traverse(callback?: (currentNode: MaybeLinkedListNode) => void): MaybeLinkedListNode {
    let currentNode = this.head

    if (currentNode) {
      callback?.(currentNode)

      while (currentNode.next) {
        currentNode = currentNode.next
        callback?.(currentNode)
      }
    }

    return currentNode
  }

  add(...values: number[]): void {
    for (const value of values) {
      const currentNode = this.traverse()
      const nextNode = new LinkedListNode(value)

      if (currentNode) {
        currentNode.next = nextNode
      }
      else {
        this.head = nextNode
      }
    }
  }

  at(index: number): MaybeLinkedListNode {
    let currentNode = this.head

    for (let i = 0; i < index; i += 1) {
      if (!currentNode) {
        throw new Error('index out of bounds')
      }
      currentNode = currentNode.next
    }

    return currentNode
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('list is empty')
    }

    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    if (!leftNode || !rightNode) {
      throw new Error('index out of bounds')
    }

    return leftNode.value > rightNode.value
  }

  prettyPrint(): void {
    const path: string[] = []

    this.traverse(currentNode => {
      path.push(currentNode ? String(currentNode.value) : 'null')
    })

    console.info(path.join(' -> '))
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    if (!leftNode || !rightNode) {
      throw new Error('index out of bounds')
    }

    ;[leftNode.value, rightNode.value] = [rightNode.value, leftNode.value]
  }
}
