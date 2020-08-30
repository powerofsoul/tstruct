[tstruct](../README.md) › [Globals](../globals.md) › ["Heap/Heap"](../modules/_heap_heap_.md) › [IMaxHeap](_heap_heap_.imaxheap.md)

# Interface: IMaxHeap ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [IHeap](_heap_heap_.iheap.md)‹T›

  ↳ **IMaxHeap**

## Implemented by

* [MaxHeap](../classes/_heap_heap_.maxheap.md)

## Index

### Properties

* [size](_heap_heap_.imaxheap.md#readonly-size)

### Methods

* [[Symbol.iterator]](_heap_heap_.imaxheap.md#[symbol.iterator])
* [add](_heap_heap_.imaxheap.md#add)
* [extractMax](_heap_heap_.imaxheap.md#extractmax)
* [extractRoot](_heap_heap_.imaxheap.md#extractroot)
* [getMax](_heap_heap_.imaxheap.md#getmax)
* [getRoot](_heap_heap_.imaxheap.md#getroot)
* [remove](_heap_heap_.imaxheap.md#remove)
* [toArray](_heap_heap_.imaxheap.md#toarray)

## Properties

### `Readonly` size

• **size**: *number*

*Inherited from [IHeap](_heap_heap_.iheap.md).[size](_heap_heap_.iheap.md#readonly-size)*

*Defined in [Heap/Heap.ts:11](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L11)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Inherited from [IHeap](_heap_heap_.iheap.md).[[Symbol.iterator]](_heap_heap_.iheap.md#[symbol.iterator])*

*Defined in [Heap/Heap.ts:12](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L12)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`value`: T): *void*

*Inherited from [IHeap](_heap_heap_.iheap.md).[add](_heap_heap_.iheap.md#add)*

*Defined in [Heap/Heap.ts:4](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  extractMax

▸ **extractMax**(): *T*

*Defined in [Heap/Heap.ts:16](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L16)*

**Returns:** *T*

___

###  extractRoot

▸ **extractRoot**(): *T*

*Inherited from [IHeap](_heap_heap_.iheap.md).[extractRoot](_heap_heap_.iheap.md#extractroot)*

*Defined in [Heap/Heap.ts:7](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L7)*

**Returns:** *T*

___

###  getMax

▸ **getMax**(): *T*

*Defined in [Heap/Heap.ts:17](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L17)*

**Returns:** *T*

___

###  getRoot

▸ **getRoot**(): *T*

*Inherited from [IHeap](_heap_heap_.iheap.md).[getRoot](_heap_heap_.iheap.md#getroot)*

*Defined in [Heap/Heap.ts:6](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L6)*

**Returns:** *T*

___

###  remove

▸ **remove**(`value`: T): *void*

*Inherited from [IHeap](_heap_heap_.iheap.md).[remove](_heap_heap_.iheap.md#remove)*

*Defined in [Heap/Heap.ts:5](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Inherited from [IHeap](_heap_heap_.iheap.md).[toArray](_heap_heap_.iheap.md#toarray)*

*Defined in [Heap/Heap.ts:9](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Heap/Heap.ts#L9)*

**Returns:** *T[]*
