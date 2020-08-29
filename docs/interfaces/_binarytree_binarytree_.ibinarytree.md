[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/BinaryTree"](../modules/_binarytree_binarytree_.md) › [IBinaryTree](_binarytree_binarytree_.ibinarytree.md)

# Interface: IBinaryTree ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IBinaryTree**

  ↳ [IBinarySearchTree](_binarytree_binarysearchtree_.ibinarysearchtree.md)

## Implemented by

* [AVLTree](../classes/_binarytree_avltree_.avltree.md)
* [BinarySearchTree](../classes/_binarytree_binarysearchtree_.binarysearchtree.md)
* [BinaryTree](../classes/_binarytree_binarytree_.binarytree.md)

## Index

### Properties

* [head](_binarytree_binarytree_.ibinarytree.md#optional-readonly-head)

### Methods

* [add](_binarytree_binarytree_.ibinarytree.md#add)
* [findNode](_binarytree_binarytree_.ibinarytree.md#findnode)
* [remove](_binarytree_binarytree_.ibinarytree.md#remove)
* [toArray](_binarytree_binarytree_.ibinarytree.md#toarray)
* [valueExists](_binarytree_binarytree_.ibinarytree.md#valueexists)

## Properties

### `Optional` `Readonly` head

• **head**? : *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:63](https://github.com/powerofsoul/tstruct/blob/722736b/src/BinaryTree/BinaryTree.ts#L63)*

## Methods

###  add

▸ **add**(`value`: T): *void*

*Defined in [BinaryTree/BinaryTree.ts:64](https://github.com/powerofsoul/tstruct/blob/722736b/src/BinaryTree/BinaryTree.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  findNode

▸ **findNode**(`value`: T): *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T› | undefined*

*Defined in [BinaryTree/BinaryTree.ts:66](https://github.com/powerofsoul/tstruct/blob/722736b/src/BinaryTree/BinaryTree.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T› | undefined*

___

###  remove

▸ **remove**(`value`: T): *void*

*Defined in [BinaryTree/BinaryTree.ts:68](https://github.com/powerofsoul/tstruct/blob/722736b/src/BinaryTree/BinaryTree.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  toArray

▸ **toArray**(): *T[]*

*Defined in [BinaryTree/BinaryTree.ts:65](https://github.com/powerofsoul/tstruct/blob/722736b/src/BinaryTree/BinaryTree.ts#L65)*

**Returns:** *T[]*

___

###  valueExists

▸ **valueExists**(`value`: T): *boolean*

*Defined in [BinaryTree/BinaryTree.ts:67](https://github.com/powerofsoul/tstruct/blob/722736b/src/BinaryTree/BinaryTree.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*
