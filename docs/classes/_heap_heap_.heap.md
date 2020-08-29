[tstruct](../README.md) › [Globals](../globals.md) › ["Heap/Heap"](../modules/_heap_heap_.md) › [Heap](_heap_heap_.heap.md)

# Class: Heap ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **Heap**

  ↳ [MaxHeap](_heap_heap_.maxheap.md)

  ↳ [MinHeap](_heap_heap_.minheap.md)

## Implements

* [IHeap](../interfaces/_heap_heap_.iheap.md)‹T›

## Index

### Constructors

* [constructor](_heap_heap_.heap.md#constructor)

### Properties

* [_data](_heap_heap_.heap.md#private-_data)
* [compareFunction](_heap_heap_.heap.md#private-comparefunction)

### Accessors

* [size](_heap_heap_.heap.md#size)

### Methods

* [[Symbol.iterator]](_heap_heap_.heap.md#[symbol.iterator])
* [add](_heap_heap_.heap.md#add)
* [extractRoot](_heap_heap_.heap.md#extractroot)
* [getChildrenIndex](_heap_heap_.heap.md#private-getchildrenindex)
* [getParentIndex](_heap_heap_.heap.md#private-getparentindex)
* [getRoot](_heap_heap_.heap.md#getroot)
* [remove](_heap_heap_.heap.md#remove)
* [toArray](_heap_heap_.heap.md#toarray)

## Constructors

###  constructor

\+ **new Heap**(`compareFunction`: function): *[Heap](_heap_heap_.heap.md)*

*Defined in [Heap/Heap.ts:29](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L29)*

**Parameters:**

▪`Default value`  **compareFunction**: *function*= descendingCompareFunction

▸ (`e1`: T, `e2`: T): *-1 | 0 | 1*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | T |
`e2` | T |

**Returns:** *[Heap](_heap_heap_.heap.md)*

## Properties

### `Private` _data

• **_data**: *T[]*

*Defined in [Heap/Heap.ts:26](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L26)*

___

### `Private` compareFunction

• **compareFunction**: *function*

*Defined in [Heap/Heap.ts:32](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L32)*

#### Type declaration:

▸ (`e1`: T, `e2`: T): *-1 | 0 | 1*

**Parameters:**

Name | Type |
------ | ------ |
`e1` | T |
`e2` | T |

## Accessors

###  size

• **get size**(): *number*

*Defined in [Heap/Heap.ts:27](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L27)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IHeap](../interfaces/_heap_heap_.iheap.md)*

*Defined in [Heap/Heap.ts:117](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L117)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`value`: T): *void*

*Implementation of [IHeap](../interfaces/_heap_heap_.iheap.md)*

*Defined in [Heap/Heap.ts:53](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  extractRoot

▸ **extractRoot**(): *T*

*Implementation of [IHeap](../interfaces/_heap_heap_.iheap.md)*

*Defined in [Heap/Heap.ts:44](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L44)*

**Returns:** *T*

___

### `Private` getChildrenIndex

▸ **getChildrenIndex**(`index`: number): *number[]*

*Defined in [Heap/Heap.ts:113](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number[]*

___

### `Private` getParentIndex

▸ **getParentIndex**(`index`: number): *number*

*Defined in [Heap/Heap.ts:109](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number*

___

###  getRoot

▸ **getRoot**(): *T*

*Implementation of [IHeap](../interfaces/_heap_heap_.iheap.md)*

*Defined in [Heap/Heap.ts:40](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L40)*

**Returns:** *T*

___

###  remove

▸ **remove**(`value`: T): *void*

*Implementation of [IHeap](../interfaces/_heap_heap_.iheap.md)*

*Defined in [Heap/Heap.ts:74](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Implementation of [IHeap](../interfaces/_heap_heap_.iheap.md)*

*Defined in [Heap/Heap.ts:105](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/Heap/Heap.ts#L105)*

**Returns:** *T[]*
