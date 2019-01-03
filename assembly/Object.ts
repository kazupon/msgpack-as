export enum ObjectType {
  NIL = 0x00,
  BOOLEAN = 0x01,
  POSITIVE_INTEGER = 0x02,
  NEGATIVE_INTEGER = 0x03,
  FLOAT32 = 0x0a,
  FLOAT64 = 0x04,
  FLOAT = 0x04,
  STR = 0x05,
  ARRAY = 0x06,
  MAP = 0x07,
  BIN = 0x08,
  EXT = 0x09  
}

@unmanaged
export class ObjectKV {
  key: Object
  value: Object
}

@unmanaged
export class ObjectArray {
  size: u32
  ptr: Object
}

@unmanaged
export class ObjectMap {
  size: u32
  ptr: ObjectKV
}

@unmanaged
export class ObjectStr {
  size: u32
  ptr: u8[]
}

@unmanaged
export class ObjectBin {
  size: u32
  ptr: u8[]
}

@unmanaged
export class ObjectExt {
  size: u32
  ptr: u8[]
}

@unmanaged
export class Object {
  type: ObjectType
  via: usize
}