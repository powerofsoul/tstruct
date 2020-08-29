[tstruct](../README.md) › [Globals](../globals.md) › ["Queue/Queue"](../modules/_queue_queue_.md) › [IQueue](_queue_queue_.iqueue.md)

# Interface: IQueue ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IQueue**

## Implemented by

* [Queue](../classes/_queue_queue_.queue.md)

## Index

### Properties

* [isEmpty](_queue_queue_.iqueue.md#readonly-isempty)
* [size](_queue_queue_.iqueue.md#readonly-size)

### Methods

* [[Symbol.iterator]](_queue_queue_.iqueue.md#[symbol.iterator])
* [dequeue](_queue_queue_.iqueue.md#dequeue)
* [enqueue](_queue_queue_.iqueue.md#enqueue)
* [peek](_queue_queue_.iqueue.md#peek)

## Properties

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Defined in [Queue/Queue.ts:9](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L9)*

___

### `Readonly` size

• **size**: *number*

*Defined in [Queue/Queue.ts:8](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L8)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Defined in [Queue/Queue.ts:11](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L11)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  dequeue

▸ **dequeue**(): *T*

*Defined in [Queue/Queue.ts:5](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L5)*

**Returns:** *T*

___

###  enqueue

▸ **enqueue**(`item`: T): *void*

*Defined in [Queue/Queue.ts:4](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  peek

▸ **peek**(): *T*

*Defined in [Queue/Queue.ts:6](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L6)*

**Returns:** *T*
