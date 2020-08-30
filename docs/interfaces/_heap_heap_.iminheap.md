[tstruct](../README.md) › [Globals](../globals.md) › ["Heap/Heap"](../modules/_heap_heap_.md) › [IMinHeap](_heap_heap_.iminheap.md)

# Interface: IMinHeap ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [IHeap](_heap_heap_.iheap.md)‹T›

  ↳ **IMinHeap**

## Implemented by

* [MinHeap](../classes/_heap_heap_.minheap.md)

## Index

### Properties

* [size](_heap_heap_.iminheap.md#readonly-size)

### Methods

* [[Symbol.iterator]](_heap_heap_.iminheap.md#[symbol.iterator])
* [add](_heap_heap_.iminheap.md#add)
* [extractMin](_heap_heap_.iminheap.md#extractmin)
* [extractRoot](_heap_heap_.iminheap.md#extractroot)
* [getMin](_heap_heap_.iminheap.md#getmin)
* [getRoot](_heap_heap_.iminheap.md#getroot)
* [remove](_heap_heap_.iminheap.md#remove)
* [toArray](_heap_heap_.iminheap.md#toarray)

## Properties

### `Readonly` size

• **size**: *number*

*Inherited from [IHeap](_heap_heap_.iheap.md).[size](_heap_heap_.iheap.md#readonly-size)*

*Defined in [Heap/Heap.ts:11](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L11)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Inherited from [IHeap](_heap_heap_.iheap.md).[[Symbol.iterator]](_heap_heap_.iheap.md#[symbol.iterator])*

*Defined in [Heap/Heap.ts:12](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L12)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`value`: T): *void*

*Inherited from [IHeap](_heap_heap_.iheap.md).[add](_heap_heap_.iheap.md#add)*

*Defined in [Heap/Heap.ts:4](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  extractMin

▸ **extractMin**(): *T*

*Defined in [Heap/Heap.ts:21](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L21)*

**Returns:** *T*

___

###  extractRoot

▸ **extractRoot**(): *T*

*Inherited from [IHeap](_heap_heap_.iheap.md).[extractRoot](_heap_heap_.iheap.md#extractroot)*

*Defined in [Heap/Heap.ts:7](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L7)*

**Returns:** *T*

___

###  getMin

▸ **getMin**(): *T*

*Defined in [Heap/Heap.ts:22](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L22)*

**Returns:** *T*

___

###  getRoot

▸ **getRoot**(): *T*

*Inherited from [IHeap](_heap_heap_.iheap.md).[getRoot](_heap_heap_.iheap.md#getroot)*

*Defined in [Heap/Heap.ts:6](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L6)*

**Returns:** *T*

___

###  remove

▸ **remove**(`value`: T): *void*

*Inherited from [IHeap](_heap_heap_.iheap.md).[remove](_heap_heap_.iheap.md#remove)*

*Defined in [Heap/Heap.ts:5](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Inherited from [IHeap](_heap_heap_.iheap.md).[toArray](_heap_heap_.iheap.md#toarray)*

*Defined in [Heap/Heap.ts:9](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L9)*

**Returns:** *T[]*
