[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/BinarySearchTree"](../modules/_binarytree_binarysearchtree_.md) › [IBinarySearchTree](_binarytree_binarysearchtree_.ibinarysearchtree.md)

# Interface: IBinarySearchTree ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* [IBinaryTree](_binarytree_binarytree_.ibinarytree.md)‹T›

  ↳ **IBinarySearchTree**

## Implemented by

* [AVLTree](../classes/_binarytree_avltree_.avltree.md)
* [BinarySearchTree](../classes/_binarytree_binarysearchtree_.binarysearchtree.md)

## Index

### Properties

* [head](_binarytree_binarysearchtree_.ibinarysearchtree.md#optional-readonly-head)
* [max](_binarytree_binarysearchtree_.ibinarysearchtree.md#readonly-max)
* [min](_binarytree_binarysearchtree_.ibinarysearchtree.md#readonly-min)

### Methods

* [add](_binarytree_binarysearchtree_.ibinarysearchtree.md#add)
* [findNode](_binarytree_binarysearchtree_.ibinarysearchtree.md#findnode)
* [remove](_binarytree_binarysearchtree_.ibinarysearchtree.md#remove)
* [toArray](_binarytree_binarysearchtree_.ibinarysearchtree.md#toarray)
* [valueExists](_binarytree_binarysearchtree_.ibinarysearchtree.md#valueexists)

## Properties

### `Optional` `Readonly` head

• **head**? : *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Inherited from [IBinaryTree](_binarytree_binarytree_.ibinarytree.md).[head](_binarytree_binarytree_.ibinarytree.md#optional-readonly-head)*

*Defined in [BinaryTree/BinaryTree.ts:63](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L63)*

___

### `Readonly` max

• **max**: *T | undefined*

*Defined in [BinaryTree/BinarySearchTree.ts:14](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L14)*

___

### `Readonly` min

• **min**: *T | undefined*

*Defined in [BinaryTree/BinarySearchTree.ts:13](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L13)*

## Methods

###  add

▸ **add**(`value`: T): *void*

*Inherited from [IBinaryTree](_binarytree_binarytree_.ibinarytree.md).[add](_binarytree_binarytree_.ibinarytree.md#add)*

*Defined in [BinaryTree/BinaryTree.ts:64](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  findNode

▸ **findNode**(`value`: T): *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T› | undefined*

*Inherited from [IBinaryTree](_binarytree_binarytree_.ibinarytree.md).[findNode](_binarytree_binarytree_.ibinarytree.md#findnode)*

*Defined in [BinaryTree/BinaryTree.ts:66](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T› | undefined*

___

###  remove

▸ **remove**(`value`: T): *void*

*Inherited from [IBinaryTree](_binarytree_binarytree_.ibinarytree.md).[remove](_binarytree_binarytree_.ibinarytree.md#remove)*

*Defined in [BinaryTree/BinaryTree.ts:68](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Inherited from [IBinaryTree](_binarytree_binarytree_.ibinarytree.md).[toArray](_binarytree_binarytree_.ibinarytree.md#toarray)*

*Defined in [BinaryTree/BinaryTree.ts:65](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L65)*

**Returns:** *T[]*

___

###  valueExists

▸ **valueExists**(`value`: T): *boolean*

*Inherited from [IBinaryTree](_binarytree_binarytree_.ibinarytree.md).[valueExists](_binarytree_binarytree_.ibinarytree.md#valueexists)*

*Defined in [BinaryTree/BinaryTree.ts:67](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*
