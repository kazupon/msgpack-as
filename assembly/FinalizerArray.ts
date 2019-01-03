import { Finalizer } from './Finalizer'

export class FinalizerArray<T> {
  private current: i32
  private items: Array<Finalizer<T>>

  constructor () {
    this.init()
  }

  init (): void {
    this.current = 0
    this.items = []
  }

  call (): void {
    for (let i = this.current; i > 0; i--) {
      this.items[i - 1].call()
    }
  }

  clear (): void {
    this.call()

    // release memory
    // TODO: should be checked AssemblyScript memory releasing ...
    for (let i = this.current; i > 0; i--) {
      let index = i - 1
      this.items[index].dispose()
    }

    // reset
    this.init()
  }

  push (handler: (data: T) => void, data: T): void {
    if (this.current == this.items.length) {
      this.pushExpand(handler, data)
    } else {
      this.items[this.current] = new Finalizer<T>(handler, data)
      this.current++
    }
  }

  private pushExpand (handler: (data: T) => void, data: T): void {
    let used = this.items.length
    let next = used == 0 ? 8 : used * 2

    this.items.length = next
    this.current = used

    this.items[this.current] = new Finalizer<T>(handler, data)
    this.current++
  }
}