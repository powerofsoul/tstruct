[tstruct](../README.md) › [Globals](../globals.md) › ["Heap/Heap"](../modules/_heap_heap_.md) › [MinHeap](_heap_heap_.minheap.md)

# Class: MinHeap ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [Heap](_heap_heap_.heap.md)‹T›

  ↳ **MinHeap**

## Implements

* [IHeap](../interfaces/_heap_heap_.iheap.md)‹T›
* [IMinHeap](../interfaces/_heap_heap_.iminheap.md)‹T›

## Index

### Constructors

* [constructor](_heap_heap_.minheap.md#constructor)

### Accessors

* [size](_heap_heap_.minheap.md#size)

### Methods

* [[Symbol.iterator]](_heap_heap_.minheap.md#[symbol.iterator])
* [add](_heap_heap_.minheap.md#add)
* [extractMin](_heap_heap_.minheap.md#extractmin)
* [extractRoot](_heap_heap_.minheap.md#extractroot)
* [getMin](_heap_heap_.minheap.md#getmin)
* [getRoot](_heap_heap_.minheap.md#getroot)
* [remove](_heap_heap_.minheap.md#remove)
* [toArray](_heap_heap_.minheap.md#toarray)

## Constructors

###  constructor

\+ **new MinHeap**(): *[MinHeap](_heap_heap_.minheap.md)*

*Overrides [Heap](_heap_heap_.heap.md).[constructor](_heap_heap_.heap.md#constructor)*

*Defined in [Heap/Heap.ts:137](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L137)*

**Returns:** *[MinHeap](_heap_heap_.minheap.md)*

## Accessors

###  size

• **get size**(): *number*

*Inherited from [Heap](_heap_heap_.heap.md).[size](_heap_heap_.heap.md#size)*

*Defined in [Heap/Heap.ts:27](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L27)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[[Symbol.iterator]](_heap_heap_.heap.md#[symbol.iterator])*

*Defined in [Heap/Heap.ts:117](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L117)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`value`: T): *void*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[add](_heap_heap_.heap.md#add)*

*Defined in [Heap/Heap.ts:53](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  extractMin

▸ **extractMin**(): *T*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Defined in [Heap/Heap.ts:142](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L142)*

**Returns:** *T*

___

###  extractRoot

▸ **extractRoot**(): *T*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[extractRoot](_heap_heap_.heap.md#extractroot)*

*Defined in [Heap/Heap.ts:44](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L44)*

**Returns:** *T*

___

###  getMin

▸ **getMin**(): *T*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Defined in [Heap/Heap.ts:146](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L146)*

**Returns:** *T*

___

###  getRoot

▸ **getRoot**(): *T*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[getRoot](_heap_heap_.heap.md#getroot)*

*Defined in [Heap/Heap.ts:40](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L40)*

**Returns:** *T*

___

###  remove

▸ **remove**(`value`: T): *void*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[remove](_heap_heap_.heap.md#remove)*

*Defined in [Heap/Heap.ts:74](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Implementation of [IMinHeap](../interfaces/_heap_heap_.iminheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[toArray](_heap_heap_.heap.md#toarray)*

*Defined in [Heap/Heap.ts:105](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L105)*

**Returns:** *T[]*
