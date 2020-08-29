[tstruct](../README.md) › [Globals](../globals.md) › ["LinkedList/LinkedList"](../modules/_linkedlist_linkedlist_.md) › [LinkedList](_linkedlist_linkedlist_.linkedlist.md)

# Class: LinkedList ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **LinkedList**

## Implements

* [ILinkedList](../interfaces/_linkedlist_linkedlist_.ilinkedlist.md)‹T›
* Iterable‹T›

## Index

### Properties

* [_head](_linkedlist_linkedlist_.linkedlist.md#private-_head)
* [_length](_linkedlist_linkedlist_.linkedlist.md#private-_length)
* [_tail](_linkedlist_linkedlist_.linkedlist.md#private-_tail)

### Accessors

* [head](_linkedlist_linkedlist_.linkedlist.md#head)
* [isEmpty](_linkedlist_linkedlist_.linkedlist.md#isempty)
* [size](_linkedlist_linkedlist_.linkedlist.md#size)
* [tail](_linkedlist_linkedlist_.linkedlist.md#tail)

### Methods

* [[Symbol.iterator]](_linkedlist_linkedlist_.linkedlist.md#[symbol.iterator])
* [add](_linkedlist_linkedlist_.linkedlist.md#add)
* [get](_linkedlist_linkedlist_.linkedlist.md#get)
* [getNode](_linkedlist_linkedlist_.linkedlist.md#private-getnode)
* [remove](_linkedlist_linkedlist_.linkedlist.md#remove)

## Properties

### `Private` _head

• **_head**: *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:24](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L24)*

___

### `Private` _length

• **_length**: *number* = 0

*Defined in [LinkedList/LinkedList.ts:26](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L26)*

___

### `Private` _tail

• **_tail**: *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:25](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L25)*

## Accessors

###  head

• **get head**(): *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:28](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L28)*

**Returns:** *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [LinkedList/LinkedList.ts:36](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L36)*

**Returns:** *boolean*

___

###  size

• **get size**(): *number*

*Defined in [LinkedList/LinkedList.ts:94](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L94)*

**Returns:** *number*

___

###  tail

• **get tail**(): *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:32](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L32)*

**Returns:** *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [ILinkedList](../interfaces/_linkedlist_linkedlist_.ilinkedlist.md)*

*Defined in [LinkedList/LinkedList.ts:98](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L98)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`val`: T): *void*

*Implementation of [ILinkedList](../interfaces/_linkedlist_linkedlist_.ilinkedlist.md)*

*Defined in [LinkedList/LinkedList.ts:40](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *void*

___

###  get

▸ **get**(`index`: number): *T*

*Implementation of [ILinkedList](../interfaces/_linkedlist_linkedlist_.ilinkedlist.md)*

*Defined in [LinkedList/LinkedList.ts:70](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *T*

___

### `Private` getNode

▸ **getNode**(`index`: number): *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:54](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[ILinkedListNode](_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

___

###  remove

▸ **remove**(`index`: number): *void*

*Implementation of [ILinkedList](../interfaces/_linkedlist_linkedlist_.ilinkedlist.md)*

*Defined in [LinkedList/LinkedList.ts:74](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/LinkedList/LinkedList.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*
