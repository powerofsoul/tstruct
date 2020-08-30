[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/BinaryTree"](../modules/_binarytree_binarytree_.md) › [BinaryTree](_binarytree_binarytree_.binarytree.md)

# Class: BinaryTree ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **BinaryTree**

  ↳ [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md)

## Implements

* [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)‹T›

## Index

### Properties

* [_head](_binarytree_binarytree_.binarytree.md#protected-_head)

### Accessors

* [head](_binarytree_binarytree_.binarytree.md#head)

### Methods

* [add](_binarytree_binarytree_.binarytree.md#add)
* [findBottomNode](_binarytree_binarytree_.binarytree.md#private-findbottomnode)
* [findNode](_binarytree_binarytree_.binarytree.md#findnode)
* [remove](_binarytree_binarytree_.binarytree.md#remove)
* [toArray](_binarytree_binarytree_.binarytree.md#toarray)
* [valueExists](_binarytree_binarytree_.binarytree.md#valueexists)

## Properties

### `Protected` _head

• **_head**: *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:72](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L72)*

## Accessors

###  head

• **get head**(): *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:74](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L74)*

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

## Methods

###  add

▸ **add**(`value`: T): *void*

*Implementation of [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)*

*Defined in [BinaryTree/BinaryTree.ts:78](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

### `Private` findBottomNode

▸ **findBottomNode**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:126](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

___

###  findNode

▸ **findNode**(`value`: T, `node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:154](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L154)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | T | - |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› | this.head |

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

___

###  remove

▸ **remove**(`value`: T): *void*

*Implementation of [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)*

*Defined in [BinaryTree/BinaryTree.ts:103](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Implementation of [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)*

*Defined in [BinaryTree/BinaryTree.ts:131](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L131)*

**Returns:** *T[]*

___

###  valueExists

▸ **valueExists**(`value`: T): *boolean*

*Implementation of [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)*

*Defined in [BinaryTree/BinaryTree.ts:168](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*
