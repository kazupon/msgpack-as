declare module ASModule {
  type i8 = number;
  type i16 = number;
  type i32 = number;
  type u8 = number;
  type u16 = number;
  type u32 = number;
  type f32 = number;
  type f64 = number;
  type bool = any;
  function add(a: i32, b: i32): i32;
  class Zone {
    constructor();
    dispose(): void;
  }
  class SBuffer {
    constructor(length: i32);
    data: u32;
    write(data: u32): void;
    clear(): void;
    protected init(length: i32): void;
    length: i32;
  }
}
export default ASModule;
