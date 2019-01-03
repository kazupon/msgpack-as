export class Chunk<T> {
  next: Chunk<T> | null
  data: Array<T>

  constructor (size: i32) {
    this.next = null
    this.data = new Array<T>(size)
  }

  // TODO: should be checked AssemblyScript memory releasing ...
  dispose (): void {
    memory.free(changetype<usize>(this))
  }
}