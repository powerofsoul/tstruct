[tstruct](../README.md) › [Globals](../globals.md) › ["Queue/PriorityQueue"](../modules/_queue_priorityqueue_.md) › [PriorityQueue](_queue_priorityqueue_.priorityqueue.md)

# Class: PriorityQueue ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **PriorityQueue**

## Implements

* [IPriorityQueue](../interfaces/_queue_priorityqueue_.ipriorityqueue.md)‹T›

## Index

### Constructors

* [constructor](_queue_priorityqueue_.priorityqueue.md#constructor)

### Properties

* [_heap](_queue_priorityqueue_.priorityqueue.md#private-_heap)

### Accessors

* [isEmpty](_queue_priorityqueue_.priorityqueue.md#isempty)
* [size](_queue_priorityqueue_.priorityqueue.md#size)

### Methods

* [[Symbol.iterator]](_queue_priorityqueue_.priorityqueue.md#[symbol.iterator])
* [dequeue](_queue_priorityqueue_.priorityqueue.md#dequeue)
* [enqueue](_queue_priorityqueue_.priorityqueue.md#enqueue)
* [peek](_queue_priorityqueue_.priorityqueue.md#peek)

## Constructors

###  constructor

\+ **new PriorityQueue**(`getPriority`: function, `compareFunction`: [CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹any›): *[PriorityQueue](_queue_priorityqueue_.priorityqueue.md)*

*Defined in [Queue/PriorityQueue.ts:16](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L16)*

**Parameters:**

▪ **getPriority**: *function*

▸ (`value`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Default value`  **compareFunction**: *[CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹any›*= descendingCompareFunction

**Returns:** *[PriorityQueue](_queue_priorityqueue_.priorityqueue.md)*

## Properties

### `Private` _heap

• **_heap**: *[IHeap](../interfaces/_heap_heap_.iheap.md)‹T›*

*Defined in [Queue/PriorityQueue.ts:16](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L16)*

## Accessors

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [Queue/PriorityQueue.ts:44](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L44)*

**Returns:** *boolean*

___

###  size

• **get size**(): *number*

*Defined in [Queue/PriorityQueue.ts:40](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L40)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IPriorityQueue](../interfaces/_queue_priorityqueue_.ipriorityqueue.md)*

*Defined in [Queue/PriorityQueue.ts:48](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L48)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  dequeue

▸ **dequeue**(): *T*

*Implementation of [IPriorityQueue](../interfaces/_queue_priorityqueue_.ipriorityqueue.md)*

*Defined in [Queue/PriorityQueue.ts:32](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L32)*

**Returns:** *T*

___

###  enqueue

▸ **enqueue**(`item`: T): *void*

*Implementation of [IPriorityQueue](../interfaces/_queue_priorityqueue_.ipriorityqueue.md)*

*Defined in [Queue/PriorityQueue.ts:28](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  peek

▸ **peek**(): *T*

*Implementation of [IPriorityQueue](../interfaces/_queue_priorityqueue_.ipriorityqueue.md)*

*Defined in [Queue/PriorityQueue.ts:36](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Queue/PriorityQueue.ts#L36)*

**Returns:** *T*
