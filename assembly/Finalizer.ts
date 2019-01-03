export class Finalizer<T> {
  handler: (data :T) => void
  data: T

  constructor (handler: (data: T) => void, data: T) {
    this.handler = handler
    this.data = data
  }

  call (): void {
    this.handler(this.data)
  }

  // TODO: should be checked AssemblyScript memory releasing ...
  dispose (): void {
    memory.free(changetype<usize>(this))
  }
}