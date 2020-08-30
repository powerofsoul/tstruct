[tstruct](../README.md) › [Globals](../globals.md) › ["UnionFind/UnionFind"](../modules/_unionfind_unionfind_.md) › [IUnionFind](_unionfind_unionfind_.iunionfind.md)

# Interface: IUnionFind ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IUnionFind**

## Implemented by

* [UnionFind](../classes/_unionfind_unionfind_.unionfind.md)

## Index

### Properties

* [numberOfComponents](_unionfind_unionfind_.iunionfind.md#readonly-numberofcomponents)

### Methods

* [add](_unionfind_unionfind_.iunionfind.md#add)
* [find](_unionfind_unionfind_.iunionfind.md#find)
* [isConnected](_unionfind_unionfind_.iunionfind.md#isconnected)
* [size](_unionfind_unionfind_.iunionfind.md#size)
* [union](_unionfind_unionfind_.iunionfind.md#union)

## Properties

### `Readonly` numberOfComponents

• **numberOfComponents**: *number*

*Defined in [UnionFind/UnionFind.ts:9](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/UnionFind/UnionFind.ts#L9)*

## Methods

###  add

▸ **add**(`item`: T): *void*

*Defined in [UnionFind/UnionFind.ts:2](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/UnionFind/UnionFind.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  find

▸ **find**(`item`: T): *T*

*Defined in [UnionFind/UnionFind.ts:4](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/UnionFind/UnionFind.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *T*

___

###  isConnected

▸ **isConnected**(`item1`: T, `item2`: T): *boolean*

*Defined in [UnionFind/UnionFind.ts:7](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/UnionFind/UnionFind.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`item1` | T |
`item2` | T |

**Returns:** *boolean*

___

###  size

▸ **size**(`item`: T): *number*

*Defined in [UnionFind/UnionFind.ts:5](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/UnionFind/UnionFind.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *number*

___

###  union

▸ **union**(`item1`: T, `item2`: T): *void*

*Defined in [UnionFind/UnionFind.ts:3](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/UnionFind/UnionFind.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`item1` | T |
`item2` | T |

**Returns:** *void*
