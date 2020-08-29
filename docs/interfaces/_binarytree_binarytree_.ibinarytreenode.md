[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/BinaryTree"](../modules/_binarytree_binarytree_.md) › [IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)

# Interface: IBinaryTreeNode ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **IBinaryTreeNode**

## Implemented by

* [BinaryTreeNode](../classes/_binarytree_binarytree_.binarytreenode.md)

## Index

### Properties

* [left](_binarytree_binarytree_.ibinarytreenode.md#optional-left)
* [parent](_binarytree_binarytree_.ibinarytreenode.md#optional-parent)
* [right](_binarytree_binarytree_.ibinarytreenode.md#optional-right)
* [val](_binarytree_binarytree_.ibinarytreenode.md#val)

### Methods

* [copyTo](_binarytree_binarytree_.ibinarytreenode.md#copyto)
* [height](_binarytree_binarytree_.ibinarytreenode.md#height)
* [isBalanced](_binarytree_binarytree_.ibinarytreenode.md#isbalanced)
* [parentSide](_binarytree_binarytree_.ibinarytreenode.md#parentside)

## Properties

### `Optional` left

• **left**? : *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:5](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L5)*

___

### `Optional` parent

• **parent**? : *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:7](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L7)*

___

### `Optional` right

• **right**? : *[IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Defined in [BinaryTree/BinaryTree.ts:6](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L6)*

___

###  val

• **val**: *T*

*Defined in [BinaryTree/BinaryTree.ts:4](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L4)*

## Methods

###  copyTo

▸ **copyTo**(`node?`: [IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Defined in [BinaryTree/BinaryTree.ts:10](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`node?` | [IBinaryTreeNode](_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

___

###  height

▸ **height**(): *number*

*Defined in [BinaryTree/BinaryTree.ts:11](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L11)*

**Returns:** *number*

___

###  isBalanced

▸ **isBalanced**(): *boolean*

*Defined in [BinaryTree/BinaryTree.ts:12](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L12)*

**Returns:** *boolean*

___

###  parentSide

▸ **parentSide**(): *"left" | "right"*

*Defined in [BinaryTree/BinaryTree.ts:8](https://github.com/powerofsoul/tstruct/blob/dbfba8e/src/BinaryTree/BinaryTree.ts#L8)*

**Returns:** *"left" | "right"*
