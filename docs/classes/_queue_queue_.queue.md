[tstruct](../README.md) › [Globals](../globals.md) › ["Queue/Queue"](../modules/_queue_queue_.md) › [Queue](_queue_queue_.queue.md)

# Class: Queue ‹**T**›

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

*Defined in [Queue/Queue.ts:15](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L15)*

**Returns:** *[Queue](_queue_queue_.queue.md)*

## Properties

### `Private` _list

• **_list**: *[LinkedList](_linkedlist_linkedlist_.linkedlist.md)‹T›*

*Defined in [Queue/Queue.ts:15](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L15)*

## Accessors

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [Queue/Queue.ts:35](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L35)*

**Returns:** *boolean*

___

###  size

• **get size**(): *number*

*Defined in [Queue/Queue.ts:39](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L39)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:43](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L43)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  dequeue

▸ **dequeue**(): *T*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:25](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L25)*

**Returns:** *T*

___

###  enqueue

▸ **enqueue**(`item`: T): *void*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:21](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  peek

▸ **peek**(): *T*

*Implementation of [IQueue](../interfaces/_queue_queue_.iqueue.md)*

*Defined in [Queue/Queue.ts:31](https://github.com/powerofsoul/tstruct/blob/722736b/src/Queue/Queue.ts#L31)*

**Returns:** *T*
