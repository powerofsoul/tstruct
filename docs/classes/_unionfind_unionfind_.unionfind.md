[tstruct](../README.md) › [Globals](../globals.md) › ["UnionFind/UnionFind"](../modules/_unionfind_unionfind_.md) › [UnionFind](_unionfind_unionfind_.unionfind.md)

# Class: UnionFind ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **UnionFind**

## Implements

* [IUnionFind](../interfaces/_unionfind_unionfind_.iunionfind.md)‹T›

## Index

### Constructors

* [constructor](_unionfind_unionfind_.unionfind.md#constructor)

### Properties

* [_arr](_unionfind_unionfind_.unionfind.md#private-_arr)
* [_idToObject](_unionfind_unionfind_.unionfind.md#private-_idtoobject)
* [_numberOfComponents](_unionfind_unionfind_.unionfind.md#private-_numberofcomponents)
* [_objectToId](_unionfind_unionfind_.unionfind.md#private-_objecttoid)
* [_sizes](_unionfind_unionfind_.unionfind.md#private-_sizes)

### Accessors

* [numberOfComponents](_unionfind_unionfind_.unionfind.md#numberofcomponents)

### Methods

* [add](_unionfind_unionfind_.unionfind.md#add)
* [find](_unionfind_unionfind_.unionfind.md#find)
* [findIndex](_unionfind_unionfind_.unionfind.md#private-findindex)
* [isConnected](_unionfind_unionfind_.unionfind.md#isconnected)
* [size](_unionfind_unionfind_.unionfind.md#size)
* [union](_unionfind_unionfind_.unionfind.md#union)

## Constructors

###  constructor

\+ **new UnionFind**(): *[UnionFind](_unionfind_unionfind_.unionfind.md)*

*Defined in [UnionFind/UnionFind.ts:18](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L18)*

**Returns:** *[UnionFind](_unionfind_unionfind_.unionfind.md)*

## Properties

### `Private` _arr

• **_arr**: *number[]*

*Defined in [UnionFind/UnionFind.ts:15](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L15)*

___

### `Private` _idToObject

• **_idToObject**: *Map‹number, T›*

*Defined in [UnionFind/UnionFind.ts:14](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L14)*

___

### `Private` _numberOfComponents

• **_numberOfComponents**: *number*

*Defined in [UnionFind/UnionFind.ts:18](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L18)*

___

### `Private` _objectToId

• **_objectToId**: *Map‹T, number›*

*Defined in [UnionFind/UnionFind.ts:13](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L13)*

___

### `Private` _sizes

• **_sizes**: *number[]*

*Defined in [UnionFind/UnionFind.ts:16](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L16)*

## Accessors

###  numberOfComponents

• **get numberOfComponents**(): *number*

*Defined in [UnionFind/UnionFind.ts:28](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L28)*

**Returns:** *number*

## Methods

###  add

▸ **add**(`item`: T): *void*

*Implementation of [IUnionFind](../interfaces/_unionfind_unionfind_.iunionfind.md)*

*Defined in [UnionFind/UnionFind.ts:32](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  find

▸ **find**(`item`: T): *T*

*Implementation of [IUnionFind](../interfaces/_unionfind_unionfind_.iunionfind.md)*

*Defined in [UnionFind/UnionFind.ts:64](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *T*

___

### `Private` findIndex

▸ **findIndex**(`item`: T): *number*

*Defined in [UnionFind/UnionFind.ts:70](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *number*

___

###  isConnected

▸ **isConnected**(`item1`: T, `item2`: T): *boolean*

*Implementation of [IUnionFind](../interfaces/_unionfind_unionfind_.iunionfind.md)*

*Defined in [UnionFind/UnionFind.ts:91](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`item1` | T |
`item2` | T |

**Returns:** *boolean*

___

###  size

▸ **size**(`item`: T): *number*

*Implementation of [IUnionFind](../interfaces/_unionfind_unionfind_.iunionfind.md)*

*Defined in [UnionFind/UnionFind.ts:86](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *number*

___

###  union

▸ **union**(`item1`: T, `item2`: T): *void*

*Implementation of [IUnionFind](../interfaces/_unionfind_unionfind_.iunionfind.md)*

*Defined in [UnionFind/UnionFind.ts:45](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/UnionFind/UnionFind.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`item1` | T |
`item2` | T |

**Returns:** *void*
