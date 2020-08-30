[tstruct](../README.md) › [Globals](../globals.md) › ["LinkedList/LinkedList"](../modules/_linkedlist_linkedlist_.md) › [ILinkedList](_linkedlist_linkedlist_.ilinkedlist.md)

# Interface: ILinkedList ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **ILinkedList**

## Implemented by

* [LinkedList](../classes/_linkedlist_linkedlist_.linkedlist.md)

## Index

### Properties

* [head](_linkedlist_linkedlist_.ilinkedlist.md#readonly-head)
* [isEmpty](_linkedlist_linkedlist_.ilinkedlist.md#readonly-isempty)
* [size](_linkedlist_linkedlist_.ilinkedlist.md#readonly-size)
* [tail](_linkedlist_linkedlist_.ilinkedlist.md#readonly-tail)

### Methods

* [[Symbol.iterator]](_linkedlist_linkedlist_.ilinkedlist.md#[symbol.iterator])
* [add](_linkedlist_linkedlist_.ilinkedlist.md#add)
* [get](_linkedlist_linkedlist_.ilinkedlist.md#get)
* [remove](_linkedlist_linkedlist_.ilinkedlist.md#remove)

## Properties

### `Readonly` head

• **head**: *[ILinkedListNode](../classes/_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:16](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L16)*

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Defined in [LinkedList/LinkedList.ts:18](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L18)*

___

### `Readonly` size

• **size**: *number*

*Defined in [LinkedList/LinkedList.ts:15](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L15)*

___

### `Readonly` tail

• **tail**: *[ILinkedListNode](../classes/_linkedlist_linkedlist_.ilinkedlistnode.md)‹T›*

*Defined in [LinkedList/LinkedList.ts:17](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L17)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Defined in [LinkedList/LinkedList.ts:20](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L20)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  add

▸ **add**(`val`: T): *void*

*Defined in [LinkedList/LinkedList.ts:11](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *void*

___

###  get

▸ **get**(`index`: number): *T*

*Defined in [LinkedList/LinkedList.ts:13](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *T*

___

###  remove

▸ **remove**(`index`: number): *void*

*Defined in [LinkedList/LinkedList.ts:12](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/LinkedList/LinkedList.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*
