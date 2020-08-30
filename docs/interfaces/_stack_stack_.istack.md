[tstruct](../README.md) › [Globals](../globals.md) › ["Stack/Stack"](../modules/_stack_stack_.md) › [IStack](_stack_stack_.istack.md)

# Interface: IStack ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IStack**

## Implemented by

* [Stack](../classes/_stack_stack_.stack.md)

## Index

### Properties

* [isEmpty](_stack_stack_.istack.md#readonly-isempty)
* [size](_stack_stack_.istack.md#readonly-size)

### Methods

* [[Symbol.iterator]](_stack_stack_.istack.md#[symbol.iterator])
* [pop](_stack_stack_.istack.md#pop)
* [push](_stack_stack_.istack.md#push)

## Properties

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Defined in [Stack/Stack.ts:4](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Stack/Stack.ts#L4)*

___

### `Readonly` size

• **size**: *number*

*Defined in [Stack/Stack.ts:5](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Stack/Stack.ts#L5)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator‹T, any, undefined›*

*Defined in [Stack/Stack.ts:9](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Stack/Stack.ts#L9)*

**Returns:** *Iterator‹T, any, undefined›*

___

###  pop

▸ **pop**(): *T*

*Defined in [Stack/Stack.ts:7](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Stack/Stack.ts#L7)*

**Returns:** *T*

___

###  push

▸ **push**(`val`: T): *void*

*Defined in [Stack/Stack.ts:6](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/Stack/Stack.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *void*
