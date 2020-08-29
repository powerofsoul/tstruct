[tstruct](../README.md) › [Globals](../globals.md) › ["Stack/Stack"](../modules/_stack_stack_.md) › [Stack](_stack_stack_.stack.md)

# Class: Stack ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **Stack**

## Implements

* [IStack](../interfaces/_stack_stack_.istack.md)‹T›

## Index

### Constructors

* [constructor](_stack_stack_.stack.md#constructor)

### Properties

* [_list](_stack_stack_.stack.md#private-_list)

### Accessors

* [isEmpty](_stack_stack_.stack.md#isempty)
* [size](_stack_stack_.stack.md#size)

### Methods

* [[Symbol.iterator]](_stack_stack_.stack.md#[symbol.iterator])
* [pop](_stack_stack_.stack.md#pop)
* [push](_stack_stack_.stack.md#push)

## Constructors

###  constructor

\+ **new Stack**(): *[Stack](_stack_stack_.stack.md)*

*Defined in [Stack/Stack.ts:13](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L13)*

**Returns:** *[Stack](_stack_stack_.stack.md)*

## Properties

### `Private` _list

• **_list**: *[ILinkedList](../interfaces/_linkedlist_linkedlist_.ilinkedlist.md)‹T›*

*Defined in [Stack/Stack.ts:13](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L13)*

## Accessors

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [Stack/Stack.ts:19](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L19)*

**Returns:** *boolean*

___

###  size

• **get size**(): *number*

*Defined in [Stack/Stack.ts:23](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L23)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Implementation of [IStack](../interfaces/_stack_stack_.istack.md)*

*Defined in [Stack/Stack.ts:41](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L41)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  pop

▸ **pop**(): *T*

*Implementation of [IStack](../interfaces/_stack_stack_.istack.md)*

*Defined in [Stack/Stack.ts:31](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L31)*

**Returns:** *T*

___

###  push

▸ **push**(`val`: T): *void*

*Implementation of [IStack](../interfaces/_stack_stack_.istack.md)*

*Defined in [Stack/Stack.ts:27](https://github.com/powerofsoul/tstruct/blob/722736b/src/Stack/Stack.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *void*
