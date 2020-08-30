[tstruct](../README.md) › [Globals](../globals.md) › ["Heap/Heap"](../modules/_heap_heap_.md) › [IHeap](_heap_heap_.iheap.md)

# Interface: IHeap ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IHeap**

  ↳ [IMaxHeap](_heap_heap_.imaxheap.md)

  ↳ [IMinHeap](_heap_heap_.iminheap.md)

## Implemented by

* [Heap](../classes/_heap_heap_.heap.md)
* [MaxHeap](../classes/_heap_heap_.maxheap.md)
* [MinHeap](../classes/_heap_heap_.minheap.md)

## Index

### Properties

* [size](_heap_heap_.iheap.md#readonly-size)

### Methods

* [[Symbol.iterator]](_heap_heap_.iheap.md#[symbol.iterator])
* [add](_heap_heap_.iheap.md#add)
* [extractRoot](_heap_heap_.iheap.md#extractroot)
* [getRoot](_heap_heap_.iheap.md#getroot)
* [remove](_heap_heap_.iheap.md#remove)
* [toArray](_heap_heap_.iheap.md#toarray)

## Properties

### `Readonly` size

• **size**: *number*

*Defined in [Heap/Heap.ts:11](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L11)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Defined in [Heap/Heap.ts:12](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L12)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`value`: T): *void*

*Defined in [Heap/Heap.ts:4](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  extractRoot

▸ **extractRoot**(): *T*

*Defined in [Heap/Heap.ts:7](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L7)*

**Returns:** *T*

___

###  getRoot

▸ **getRoot**(): *T*

*Defined in [Heap/Heap.ts:6](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L6)*

**Returns:** *T*

___

###  remove

▸ **remove**(`value`: T): *void*

*Defined in [Heap/Heap.ts:5](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Defined in [Heap/Heap.ts:9](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Heap/Heap.ts#L9)*

**Returns:** *T[]*
