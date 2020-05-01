import {Sorter} from './Sorter'

export class CharsCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].localeCompare(this.data[rightIndex], 'en', {caseFirst: 'upper'}) === 1
  }

  prettyPrint(): void {
    console.info(this.data)
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('')
    ;[chars[leftIndex], chars[rightIndex]] = [chars[rightIndex], chars[leftIndex]]

    this.data = chars.join('')
  }
}
