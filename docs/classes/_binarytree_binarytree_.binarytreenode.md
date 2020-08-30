[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/BinaryTree"](../modules/_binarytree_binarytree_.md) › [BinaryTreeNode](_binarytree_binarytree_.binarytreenode.md)

# Class: BinaryTreeNode ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **BinaryTreeNode**

## Implements

* [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›

## Index

### Constructors

* [constructor](_binarytree_binarytree_.binarytreenode.md#constructor)

### Properties

* [left](_binarytree_binarytree_.binarytreenode.md#optional-left)
* [parent](_binarytree_binarytree_.binarytreenode.md#optional-parent)
* [right](_binarytree_binarytree_.binarytreenode.md#optional-right)
* [val](_binarytree_binarytree_.binarytreenode.md#val)

### Methods

* [copyTo](_binarytree_binarytree_.binarytreenode.md#copyto)
* [height](_binarytree_binarytree_.binarytreenode.md#height)
* [isBalanced](_binarytree_binarytree_.binarytreenode.md#isbalanced)
* [parentSide](_binarytree_binarytree_.binarytreenode.md#parentside)

## Constructors

###  constructor

\+ **new BinaryTreeNode**(`value`: T, `parent?`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›, `left?`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›, `right?`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *[BinaryTreeNode](_binarytree_binarytree_.binarytreenode.md)*

*Defined in [BinaryTree/BinaryTree.ts:47](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`parent?` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |
`left?` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |
`right?` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *[BinaryTreeNode](_binarytree_binarytree_.binarytreenode.md)*

## Properties

### `Optional` left

• **left**? : *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md).[left](../interfaces/_binarytree_binarytree_.ibinarytreenode.md#optional-left)*

*Defined in [BinaryTree/BinaryTree.ts:17](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L17)*

___

### `Optional` parent

• **parent**? : *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md).[parent](../interfaces/_binarytree_binarytree_.ibinarytreenode.md#optional-parent)*

*Defined in [BinaryTree/BinaryTree.ts:19](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L19)*

___

### `Optional` right

• **right**? : *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md).[right](../interfaces/_binarytree_binarytree_.ibinarytreenode.md#optional-right)*

*Defined in [BinaryTree/BinaryTree.ts:18](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L18)*

___

###  val

• **val**: *T*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md).[val](../interfaces/_binarytree_binarytree_.ibinarytreenode.md#val)*

*Defined in [BinaryTree/BinaryTree.ts:16](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L16)*

## Methods

###  copyTo

▸ **copyTo**(`node?`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)*

*Defined in [BinaryTree/BinaryTree.ts:21](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`node?` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

___

###  height

▸ **height**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *number*

*Defined in [BinaryTree/BinaryTree.ts:30](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› | this |

**Returns:** *number*

___

###  isBalanced

▸ **isBalanced**(): *boolean*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)*

*Defined in [BinaryTree/BinaryTree.ts:45](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L45)*

**Returns:** *boolean*

___

###  parentSide

▸ **parentSide**(): *"left" | "right"*

*Implementation of [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)*

*Defined in [BinaryTree/BinaryTree.ts:41](https://github.com/powerofsoul/tstruct/blob/c7939b3/src/BinaryTree/BinaryTree.ts#L41)*

**Returns:** *"left" | "right"*
