import { Finalizer } from './Finalizer'

export class FinalizerArray {
  private tail: Finalizer
  private end: Finalizer
  private arr: Array<Finalizer>
}