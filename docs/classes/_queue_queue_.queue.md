[tstruct](../README.md) › [Globals](../globals.md) › ["Queue/Queue"](../modules/_queue_queue_.md) › [Queue](_queue_queue_.queue.md)

# Class: Queue ‹**T**›

Standard Queue based on Single Linked List

## Type parameters

▪ **T**

## Hierarchy

* **Queue**

## Implements

* [IQueue](../interfaces/_queue_queue_.iqueue.md)‹T›

## Index

### Constructors

* [constructor](_queue_queue_.queue.md#constructor)

### Properties

* [_list](_queue_queue_.queue.md#private-_list)

### Accessors

* [isEmpty](_queue_queue_.queue.md#isempty)
* [size](_queue_queue_.queue.md#size)

### Methods

* [[Symbol.iterator]](_queue_queue_.queue.md#[symbol.iterator])
* [dequeue](_queue_queue_.queue.md#dequeue)
* [enqueue](_queue_queue_.queue.md#enqueue)
* [peek](_queue_queue_.queue.md#peek)

## Constructors

###  constructor

\+ **new Queue**(): *[Queue](_queue_queue_.queue.md)*

*Defined in [Queue/Queue.ts:18](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L18)*

**Returns:** *[Queue](_queue_queue_.queue.md)*

## Properties

### `Private` _list

• **_list**: *[LinkedList](_linkedlist_linkedlist_.linkedlist.md)‹T›*

*Defined in [Queue/Queue.ts:18](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L18)*

## Accessors

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [Queue/Queue.ts:52](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L52)*

**Returns:** *boolean*

Determine if the queue is empty or not

___

###  size

• **get size**(): *number*

*Defined in [Queue/Queue.ts:59](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L59)*

**Returns:** *number*

Returns the size of the queue

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:66](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L66)*

Foreach Iterator

**Returns:** *Iterator‹T, any, undefined›*

___

###  dequeue

▸ **dequeue**(): *T*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:36](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L36)*

Gets and remove next item in queue.

**Returns:** *T*

___

###  enqueue

▸ **enqueue**(`item`: T): *void*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:28](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L28)*

Adds a new item to queue.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T |   |

**Returns:** *void*

___

###  peek

▸ **peek**(): *T*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:45](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/Queue/Queue.ts#L45)*

Gets next item in queue.

**Returns:** *T*
