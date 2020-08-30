[tstruct](../README.md) › [Globals](../globals.md) › ["BinaryTree/AVLTree"](../modules/_binarytree_avltree_.md) › [AVLTree](_binarytree_avltree_.avltree.md)

# Class: AVLTree ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

  ↳ [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md)‹T›

  ↳ **AVLTree**

## Implements

* [IBinaryTree](../interfaces/_binarytree_binarytree_.ibinarytree.md)‹T›
* [IBinarySearchTree](../interfaces/_binarytree_binarysearchtree_.ibinarysearchtree.md)‹T›

## Index

### Constructors

* [constructor](_binarytree_avltree_.avltree.md#constructor)

### Properties

* [_head](_binarytree_avltree_.avltree.md#protected-_head)
* [compareFunction](_binarytree_avltree_.avltree.md#protected-comparefunction)

### Accessors

* [head](_binarytree_avltree_.avltree.md#head)
* [max](_binarytree_avltree_.avltree.md#max)
* [min](_binarytree_avltree_.avltree.md#min)

### Methods

* [add](_binarytree_avltree_.avltree.md#add)
* [balanceNode](_binarytree_avltree_.avltree.md#private-balancenode)
* [delete](_binarytree_avltree_.avltree.md#delete)
* [findNode](_binarytree_avltree_.avltree.md#findnode)
* [insertNode](_binarytree_avltree_.avltree.md#protected-insertnode)
* [leftRightRotate](_binarytree_avltree_.avltree.md#leftrightrotate)
* [leftRotate](_binarytree_avltree_.avltree.md#leftrotate)
* [remove](_binarytree_avltree_.avltree.md#remove)
* [rightLeftRotate](_binarytree_avltree_.avltree.md#rightleftrotate)
* [rightRotate](_binarytree_avltree_.avltree.md#rightrotate)
* [toArray](_binarytree_avltree_.avltree.md#toarray)
* [valueExists](_binarytree_avltree_.avltree.md#valueexists)

## Constructors

###  constructor

\+ **new AVLTree**(`compareFunction?`: [CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹T›): *[AVLTree](_binarytree_avltree_.avltree.md)*

*Inherited from [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[constructor](_binarytree_binarysearchtree_.binarysearchtree.md#constructor)*

*Defined in [BinaryTree/BinarySearchTree.ts:22](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`compareFunction?` | [CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹T› |

**Returns:** *[AVLTree](_binarytree_avltree_.avltree.md)*

## Properties

### `Protected` _head

• **_head**: *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

*Inherited from [BinaryTree](_binarytree_binarytree_.binarytree.md).[_head](_binarytree_binarytree_.binarytree.md#protected-_head)*

*Defined in [BinaryTree/BinaryTree.ts:72](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinaryTree.ts#L72)*

___

### `Protected` compareFunction

• **compareFunction**: *[CompareFunctionType](../modules/_comparefunction_.md#comparefunctiontype)‹T›* = descendingCompareFunction

*Inherited from [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[compareFunction](_binarytree_binarysearchtree_.binarysearchtree.md#protected-comparefunction)*

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

*Inherited from [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[max](_binarytree_binarysearchtree_.binarysearchtree.md#max)*

*Defined in [BinaryTree/BinarySearchTree.ts:59](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L59)*

**Returns:** *T*

___

###  min

• **get min**(): *T*

*Inherited from [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[min](_binarytree_binarysearchtree_.binarysearchtree.md#min)*

*Defined in [BinaryTree/BinarySearchTree.ts:47](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L47)*

**Returns:** *T*

## Methods

###  add

▸ **add**(`value`: T): *void*

*Implementation of [IBinarySearchTree](../interfaces/_binarytree_binarysearchtree_.ibinarysearchtree.md)*

*Overrides [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[add](_binarytree_binarysearchtree_.binarysearchtree.md#add)*

*Defined in [BinaryTree/AVLTree.ts:5](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/AVLTree.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

### `Private` balanceNode

▸ **balanceNode**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Defined in [BinaryTree/AVLTree.ts:9](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/AVLTree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: T): *void*

*Inherited from [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[delete](_binarytree_binarysearchtree_.binarysearchtree.md#delete)*

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

*Inherited from [BinarySearchTree](_binarytree_binarysearchtree_.binarysearchtree.md).[insertNode](_binarytree_binarysearchtree_.binarysearchtree.md#protected-insertnode)*

*Defined in [BinaryTree/BinarySearchTree.ts:70](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/BinarySearchTree.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *[IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›*

___

###  leftRightRotate

▸ **leftRightRotate**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Defined in [BinaryTree/AVLTree.ts:56](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/AVLTree.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

___

###  leftRotate

▸ **leftRotate**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Defined in [BinaryTree/AVLTree.ts:36](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/AVLTree.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

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

###  rightLeftRotate

▸ **rightLeftRotate**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Defined in [BinaryTree/AVLTree.ts:81](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/AVLTree.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

**Returns:** *void*

___

###  rightRotate

▸ **rightRotate**(`node`: [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T›): *void*

*Defined in [BinaryTree/AVLTree.ts:61](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/BinaryTree/AVLTree.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [IBinaryTreeNode](../interfaces/_binarytree_binarytree_.ibinarytreenode.md)‹T› |

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
