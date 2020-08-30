[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/BinarySearchTree"](../modules/_binarytree_binarysearchtree_.md) › [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md)

# Class: BinarySearchTree ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [BinaryTree](_binarytree_binarytree_.binarytree.md)‹T›

  ↳ **BinarySearchTree**

  ↳ [AVLTree](_binarytree_avltree_.avltree.md)

## Implements

* [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)‹T›
* [IBinarySearchTree](../interfaces/_binarytree_binarysearchtree_.ibinarysearchtree.md)‹T›

## Index

### Constructors

* [constructor](_binarytree_binarysearchtree_.binarysearchtree.md#constructor)

### Properties

* [_head](_binarytree_binarysearchtree_.binarysearchtree.md#protected-_head)
* [compareFunction](_binarytree_binarysearchtree_.binarysearchtree.md#protected-comparefunction)

### Accessors

* [head](_binarytree_binarysearchtree_.binarysearchtree.md#head)
* [max](_binarytree_binarysearchtree_.binarysearchtree.md#max)
* [min](_binarytree_binarysearchtree_.binarysearchtree.md#min)

### Methods

* [add](_binarytree_binarysearchtree_.binarysearchtree.md#add)
* [delete](_binarytree_binarysearchtree_.binarysearchtree.md#delete)
* [findNode](_binarytree_binarysearchtree_.binarysearchtree.md#findnode)
* [insertNode](_binarytree_binarysearchtree_.binarysearchtree.md#protected-insertnode)
* [remove](_binarytree_binarysearchtree_.binarysearchtree.md#remove)
* [toArray](_binarytree_binarysearchtree_.binarysearchtree.md#toarray)
* [valueExists](_binarytree_binarysearchtree_.binarysearchtree.md#valueexists)

## Constructors

###  constructor

\+ **new BinarySearchTree**(`compareFunction?`: [CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹T›): *[BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md)*

*Defined in [BinaryTree/BinarySearchTree.ts:22](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`compareFunction?` | [CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹T› |

**Returns:** *[BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md)*

## Properties

### `Protected` _head

• **_head**: *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[_head](_binarytree_binarytree_.binarytree.md#protected-_head)*

*Defined in [BinaryTree/BinaryTree.ts:72](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L72)*

___

### `Protected` compareFunction

• **compareFunction**: *[CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹T›* = descendingCompareFunction

*Defined in [BinaryTree/BinarySearchTree.ts:20](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L20)*

## Accessors

###  head

• **get head**(): *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[head](_binarytree_binarytree_.binarytree.md#head)*

*Defined in [BinaryTree/BinaryTree.ts:74](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L74)*

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

___

###  max

• **get max**(): *T*

*Defined in [BinaryTree/BinarySearchTree.ts:59](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L59)*

**Returns:** *T*

___

###  min

• **get min**(): *T*

*Defined in [BinaryTree/BinarySearchTree.ts:47](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L47)*

**Returns:** *T*

## Methods

###  add

▸ **add**(`value`: T, `callback`: function): *void*

*Overrides [BinaryTree](_binarytree_binarytree_.binarytree.md).[add](_binarytree_binarytree_.binarytree.md#add)*

*Defined in [BinaryTree/BinarySearchTree.ts:31](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L31)*

**Parameters:**

▪ **value**: *T*

▪`Default value`  **callback**: *function*= undefined

▸ (`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: T): *void*

*Defined in [BinaryTree/BinarySearchTree.ts:43](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  findNode

▸ **findNode**(`value`: T, `node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[findNode](_binarytree_binarytree_.binarytree.md#findnode)*

*Defined in [BinaryTree/BinaryTree.ts:154](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L154)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | T | - |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› | this.head |

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

___

### `Protected` insertNode

▸ **insertNode**(`value`: T, `node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinarySearchTree.ts:70](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

___

###  remove

▸ **remove**(`value`: T): *void*

*Implementation of [IBinarySearchTree](../interfaces/_binarytree_binarysearchtree_.ibinarysearchtree.md)*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[remove](_binarytree_binarytree_.binarytree.md#remove)*

*Defined in [BinaryTree/BinaryTree.ts:103](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Implementation of [IBinarySearchTree](../interfaces/_binarytree_binarysearchtree_.ibinarysearchtree.md)*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[toArray](_binarytree_binarytree_.binarytree.md#toarray)*

*Defined in [BinaryTree/BinaryTree.ts:131](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L131)*

**Returns:** *T[]*

___

###  valueExists

▸ **valueExists**(`value`: T): *boolean*

*Implementation of [IBinarySearchTree](../interfaces/_binarytree_binarysearchtree_.ibinarysearchtree.md)*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[valueExists](_binarytree_binarytree_.binarytree.md#valueexists)*

*Defined in [BinaryTree/BinaryTree.ts:168](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*
