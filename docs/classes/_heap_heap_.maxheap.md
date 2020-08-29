[tstruct](../README.md) › [Globals](../globals.md) › ["Heap/Heap"](../modules/_heap_heap_.md) › [MaxHeap](_heap_heap_.maxheap.md)

# Class: MaxHeap ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [Heap](_heap_heap_.heap.md)‹T›

  ↳ **MaxHeap**

## Implements

* [IHeap](../interfaces/_heap_heap_.iheap.md)‹T›
* [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)‹T›

## Index

### Constructors

* [constructor](_heap_heap_.maxheap.md#constructor)

### Accessors

* [size](_heap_heap_.maxheap.md#size)

### Methods

* [[Symbol.iterator]](_heap_heap_.maxheap.md#[symbol.iterator])
* [add](_heap_heap_.maxheap.md#add)
* [extractMax](_heap_heap_.maxheap.md#extractmax)
* [extractRoot](_heap_heap_.maxheap.md#extractroot)
* [getMax](_heap_heap_.maxheap.md#getmax)
* [getRoot](_heap_heap_.maxheap.md#getroot)
* [remove](_heap_heap_.maxheap.md#remove)
* [toArray](_heap_heap_.maxheap.md#toarray)

## Constructors

###  constructor

\+ **new MaxHeap**(): *[MaxHeap](_heap_heap_.maxheap.md)*

*Overrides [Heap](_heap_heap_.heap.md).[constructor](_heap_heap_.heap.md#constructor)*

*Defined in [Heap/Heap.ts:123](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L123)*

**Returns:** *[MaxHeap](_heap_heap_.maxheap.md)*

## Accessors

###  size

• **get size**(): *number*

*Inherited from [Heap](_heap_heap_.heap.md).[size](_heap_heap_.heap.md#size)*

*Defined in [Heap/Heap.ts:27](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L27)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[[Symbol.iterator]](_heap_heap_.heap.md#[symbol.iterator])*

*Defined in [Heap/Heap.ts:117](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L117)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`value`: T): *void*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[add](_heap_heap_.heap.md#add)*

*Defined in [Heap/Heap.ts:53](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  extractMax

▸ **extractMax**(): *T*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Defined in [Heap/Heap.ts:128](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L128)*

**Returns:** *T*

___

###  extractRoot

▸ **extractRoot**(): *T*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[extractRoot](_heap_heap_.heap.md#extractroot)*

*Defined in [Heap/Heap.ts:44](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L44)*

**Returns:** *T*

___

###  getMax

▸ **getMax**(): *T*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Defined in [Heap/Heap.ts:132](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L132)*

**Returns:** *T*

___

###  getRoot

▸ **getRoot**(): *T*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[getRoot](_heap_heap_.heap.md#getroot)*

*Defined in [Heap/Heap.ts:40](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L40)*

**Returns:** *T*

___

###  remove

▸ **remove**(`value`: T): *void*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[remove](_heap_heap_.heap.md#remove)*

*Defined in [Heap/Heap.ts:74](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Implementation of [IMaxHeap](../interfaces/_heap_heap_.imaxheap.md)*

*Inherited from [Heap](_heap_heap_.heap.md).[toArray](_heap_heap_.heap.md#toarray)*

*Defined in [Heap/Heap.ts:105](https://github.com/powerofsoul/tstruct/blob/722736b/src/Heap/Heap.ts#L105)*

**Returns:** *T[]*
