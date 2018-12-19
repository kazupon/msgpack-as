(module
 (type $ii (func (param i32) (result i32)))
 (type $iiv (func (param i32 i32)))
 (type $iv (func (param i32)))
 (type $iii (func (param i32 i32) (result i32)))
 (type $iiFFFFFv (func (param i32 i32 f64 f64 f64 f64 f64)))
 (type $iiiiv (func (param i32 i32 i32 i32)))
 (type $v (func))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (import "env" "trace" (func $~lib/env/trace (param i32 i32 f64 f64 f64 f64 f64)))
 (import "env" "abort" (func $~lib/env/abort (param i32 i32 i32 i32)))
 (memory $0 1)
 (data (i32.const 8) "\03\00\00\00a\00d\00d")
 (data (i32.const 24) "\13\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 72) "\1c\00\00\00~\00l\00i\00b\00/\00i\00n\00t\00e\00r\00n\00a\00l\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (table $0 1 anyfunc)
 (elem (i32.const 0) $null)
 (global $~lib/allocator/arena/startOffset (mut i32) (i32.const 0))
 (global $~lib/allocator/arena/offset (mut i32) (i32.const 0))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "add" (func $assembly/index/add))
 (export "Unpacker#constructor" (func $assembly/Unpacker/Unpacker#constructor))
 (export "Unpacker#unpack" (func $assembly/Unpacker/Unpacker#unpack))
 (export "Unpacker#dispose" (func $assembly/Unpacker/Unpacker#dispose))
 (export "Zone#constructor" (func $assembly/Unpacker/Unpacker#constructor))
 (export "Zone#dispose" (func $assembly/Unpacker/Unpacker#dispose))
 (export "SimpleBuffer#constructor" (func $assembly/SimpleBuffer/SimpleBuffer#constructor))
 (export "SimpleBuffer#append" (func $assembly/SimpleBuffer/SimpleBuffer#append))
 (export "SimpleBuffer#grow" (func $assembly/SimpleBuffer/SimpleBuffer#grow))
 (export "SimpleBuffer#dispose" (func $assembly/Unpacker/Unpacker#dispose))
 (start $start)
 (func $~lib/allocator/arena/__memory_allocate (; 2 ;) (type $ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  get_local $0
  i32.const 1073741824
  i32.gt_u
  if
   unreachable
  end
  get_global $~lib/allocator/arena/offset
  tee_local $2
  get_local $0
  i32.const 1
  tee_local $1
  get_local $0
  get_local $1
  i32.gt_u
  select
  i32.add
  i32.const 7
  i32.add
  i32.const -8
  i32.and
  tee_local $3
  current_memory
  tee_local $1
  i32.const 16
  i32.shl
  i32.gt_u
  if
   get_local $1
   get_local $3
   get_local $2
   i32.sub
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   tee_local $0
   tee_local $4
   get_local $1
   get_local $4
   i32.gt_s
   select
   grow_memory
   i32.const 0
   i32.lt_s
   if
    get_local $0
    grow_memory
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
  end
  get_local $3
  set_global $~lib/allocator/arena/offset
  get_local $2
 )
 (func $assembly/Unpacker/Unpacker#constructor (; 3 ;) (type $ii) (param $0 i32) (result i32)
  get_local $0
  if (result i32)
   get_local $0
  else   
   i32.const 0
   call $~lib/allocator/arena/__memory_allocate
  end
 )
 (func $assembly/Unpacker/Unpacker#unpack (; 4 ;) (type $iiv) (param $0 i32) (param $1 i32)
  nop
 )
 (func $assembly/Unpacker/Unpacker#dispose (; 5 ;) (type $iv) (param $0 i32)
  nop
 )
 (func $assembly/index/add (; 6 ;) (type $iii) (param $0 i32) (param $1 i32) (result i32)
  i32.const 8
  i32.const 2
  get_local $0
  f64.convert_s/i32
  get_local $1
  f64.convert_s/i32
  f64.const 0
  f64.const 0
  f64.const 0
  call $~lib/env/trace
  get_local $0
  get_local $1
  i32.add
 )
 (func $~lib/internal/arraybuffer/allocateUnsafe (; 7 ;) (type $ii) (param $0 i32) (result i32)
  (local $1 i32)
  get_local $0
  i32.const 1073741816
  i32.gt_u
  if
   i32.const 0
   i32.const 72
   i32.const 26
   i32.const 2
   call $~lib/env/abort
   unreachable
  end
  i32.const 1
  i32.const 32
  get_local $0
  i32.const 7
  i32.add
  i32.clz
  i32.sub
  i32.shl
  call $~lib/allocator/arena/__memory_allocate
  tee_local $1
  get_local $0
  i32.store
  get_local $1
 )
 (func $~lib/internal/memory/memset (; 8 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  get_local $1
  i32.eqz
  if
   return
  end
  get_local $0
  i32.const 0
  i32.store8
  get_local $0
  get_local $1
  i32.add
  i32.const 1
  i32.sub
  i32.const 0
  i32.store8
  get_local $1
  i32.const 2
  i32.le_u
  if
   return
  end
  get_local $0
  i32.const 1
  i32.add
  i32.const 0
  i32.store8
  get_local $0
  i32.const 2
  i32.add
  i32.const 0
  i32.store8
  get_local $0
  get_local $1
  i32.add
  i32.const 2
  i32.sub
  i32.const 0
  i32.store8
  get_local $0
  get_local $1
  i32.add
  i32.const 3
  i32.sub
  i32.const 0
  i32.store8
  get_local $1
  i32.const 6
  i32.le_u
  if
   return
  end
  get_local $0
  i32.const 3
  i32.add
  i32.const 0
  i32.store8
  get_local $0
  get_local $1
  i32.add
  i32.const 4
  i32.sub
  i32.const 0
  i32.store8
  get_local $1
  i32.const 8
  i32.le_u
  if
   return
  end
  i32.const 0
  get_local $0
  i32.sub
  i32.const 3
  i32.and
  tee_local $2
  get_local $0
  i32.add
  tee_local $0
  i32.const 0
  i32.store
  get_local $1
  get_local $2
  i32.sub
  i32.const -4
  i32.and
  tee_local $1
  get_local $0
  i32.add
  i32.const 4
  i32.sub
  i32.const 0
  i32.store
  get_local $1
  i32.const 8
  i32.le_u
  if
   return
  end
  get_local $0
  i32.const 4
  i32.add
  i32.const 0
  i32.store
  get_local $0
  i32.const 8
  i32.add
  i32.const 0
  i32.store
  get_local $0
  get_local $1
  i32.add
  i32.const 12
  i32.sub
  i32.const 0
  i32.store
  get_local $0
  get_local $1
  i32.add
  i32.const 8
  i32.sub
  i32.const 0
  i32.store
  get_local $1
  i32.const 24
  i32.le_u
  if
   return
  end
  get_local $0
  i32.const 12
  i32.add
  i32.const 0
  i32.store
  get_local $0
  i32.const 16
  i32.add
  i32.const 0
  i32.store
  get_local $0
  i32.const 20
  i32.add
  i32.const 0
  i32.store
  get_local $0
  i32.const 24
  i32.add
  i32.const 0
  i32.store
  get_local $0
  get_local $1
  i32.add
  i32.const 28
  i32.sub
  i32.const 0
  i32.store
  get_local $0
  get_local $1
  i32.add
  i32.const 24
  i32.sub
  i32.const 0
  i32.store
  get_local $0
  get_local $1
  i32.add
  i32.const 20
  i32.sub
  i32.const 0
  i32.store
  get_local $0
  get_local $1
  i32.add
  i32.const 16
  i32.sub
  i32.const 0
  i32.store
  get_local $0
  i32.const 4
  i32.and
  i32.const 24
  i32.add
  tee_local $2
  get_local $0
  i32.add
  set_local $0
  get_local $1
  get_local $2
  i32.sub
  set_local $1
  loop $continue|0
   get_local $1
   i32.const 32
   i32.ge_u
   if
    get_local $0
    i64.const 0
    i64.store
    get_local $0
    i32.const 8
    i32.add
    i64.const 0
    i64.store
    get_local $0
    i32.const 16
    i32.add
    i64.const 0
    i64.store
    get_local $0
    i32.const 24
    i32.add
    i64.const 0
    i64.store
    get_local $1
    i32.const 32
    i32.sub
    set_local $1
    get_local $0
    i32.const 32
    i32.add
    set_local $0
    br $continue|0
   end
  end
 )
 (func $assembly/SimpleBuffer/SimpleBuffer#constructor (; 9 ;) (type $ii) (param $0 i32) (result i32)
  (local $1 i32)
  get_local $0
  i32.eqz
  if
   i32.const 8
   call $~lib/allocator/arena/__memory_allocate
   tee_local $0
   i32.const 0
   i32.store
   get_local $0
   i32.const 0
   i32.store offset=4
  end
  get_local $0
  i32.const 0
  i32.store offset=4
  i32.const 1024
  call $~lib/internal/arraybuffer/allocateUnsafe
  tee_local $1
  i32.const 8
  i32.add
  i32.const 1024
  call $~lib/internal/memory/memset
  get_local $0
  get_local $1
  i32.store
  get_local $0
 )
 (func $assembly/SimpleBuffer/SimpleBuffer#grow (; 10 ;) (type $ii) (param $0 i32) (result i32)
  i32.const 0
 )
 (func $assembly/SimpleBuffer/SimpleBuffer#append (; 11 ;) (type $iiv) (param $0 i32) (param $1 i32)
  (local $2 i32)
  get_local $1
  i32.load offset=4
  get_local $0
  i32.load offset=4
  i32.add
  tee_local $2
  get_local $0
  i32.load
  i32.load
  i32.gt_s
  drop
  get_local $0
  get_local $2
  i32.store offset=4
 )
 (func $start (; 12 ;) (type $v)
  i32.const 136
  set_global $~lib/allocator/arena/startOffset
  get_global $~lib/allocator/arena/startOffset
  set_global $~lib/allocator/arena/offset
 )
 (func $null (; 13 ;) (type $v)
  nop
 )
)
