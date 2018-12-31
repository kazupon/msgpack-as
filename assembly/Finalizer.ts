export class Finalizer<T> {
  private handler: (data :T) => void
  private data: T

  constructor (handler: (data: T) => void, data: T) {
    this.handler = handler
    this.data = data
  }

  call (): void {
    this.handler(this.data)
  }
}