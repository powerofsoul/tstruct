[tstruct](../README.md) › [Globals](../globals.md) › ["Queue/PriorityQueue"](../modules/_queue_priorityqueue_.md) › [IPriorityQueue](_queue_priorityqueue_.ipriorityqueue.md)

# Interface: IPriorityQueue ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IPriorityQueue**

## Implemented by

* [PriorityQueue](../classes/_queue_priorityqueue_.priorityqueue.md)

## Index

### Properties

* [isEmpty](_queue_priorityqueue_.ipriorityqueue.md#readonly-isempty)
* [size](_queue_priorityqueue_.ipriorityqueue.md#readonly-size)

### Methods

* [[Symbol.iterator]](_queue_priorityqueue_.ipriorityqueue.md#[symbol.iterator])
* [dequeue](_queue_priorityqueue_.ipriorityqueue.md#dequeue)
* [enqueue](_queue_priorityqueue_.ipriorityqueue.md#enqueue)
* [peek](_queue_priorityqueue_.ipriorityqueue.md#peek)

## Properties

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Defined in [Queue/PriorityQueue.ts:10](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/PriorityQueue.ts#L10)*

___

### `Readonly` size

• **size**: *number*

*Defined in [Queue/PriorityQueue.ts:9](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/PriorityQueue.ts#L9)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Defined in [Queue/PriorityQueue.ts:12](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/PriorityQueue.ts#L12)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  dequeue

▸ **dequeue**(): *T*

*Defined in [Queue/PriorityQueue.ts:6](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/PriorityQueue.ts#L6)*

**Returns:** *T*

___

###  enqueue

▸ **enqueue**(`item`: T): *void*

*Defined in [Queue/PriorityQueue.ts:5](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/PriorityQueue.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  peek

▸ **peek**(): *T*

*Defined in [Queue/PriorityQueue.ts:7](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/PriorityQueue.ts#L7)*

**Returns:** *T*
