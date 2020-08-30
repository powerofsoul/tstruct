[tstruct](../README.md) › [Globals](../globals.md) › ["SortingAlgorithms/SortingAlgorithms"](_sortingalgorithms_sortingalgorithms_.md)

# Module: "SortingAlgorithms/SortingAlgorithms"

## Index

### Type aliases

* [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)

### Functions

* [HeapSort](_sortingalgorithms_sortingalgorithms_.md#heapsort)
* [QuickSort](_sortingalgorithms_sortingalgorithms_.md#quicksort)
* [RadixSort](_sortingalgorithms_sortingalgorithms_.md#radixsort)

## Type aliases

###  GetComparisonValueFunc

Ƭ **GetComparisonValueFunc**: *function*

*Defined in [SortingAlgorithms/SortingAlgorithms.ts:7](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/SortingAlgorithms/SortingAlgorithms.ts#L7)*

#### Type declaration:

▸ (`e`: T): *K*

**Parameters:**

Name | Type |
------ | ------ |
`e` | T |

## Functions

###  HeapSort

▸ **HeapSort**‹**T**›(`elements`: T[], `getComparisonValue`: [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)‹T, any›, `compareFunction`: [CompareFunctionType](_comparefunction_.md#comparefunctiontype)‹any›): *T[]*

*Defined in [SortingAlgorithms/SortingAlgorithms.ts:9](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/SortingAlgorithms/SortingAlgorithms.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`elements` | T[] | - |
`getComparisonValue` | [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)‹T, any› | (e: T) => e |
`compareFunction` | [CompareFunctionType](_comparefunction_.md#comparefunctiontype)‹any› | ascendingCompareFunction |

**Returns:** *T[]*

___

###  QuickSort

▸ **QuickSort**‹**T**›(`elements`: T[], `getComparisonValue`: [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)‹T, any›, `compareFunction`: [CompareFunctionType](_comparefunction_.md#comparefunctiontype)‹any›): *T[]*

*Defined in [SortingAlgorithms/SortingAlgorithms.ts:29](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/SortingAlgorithms/SortingAlgorithms.ts#L29)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`elements` | T[] | - |
`getComparisonValue` | [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)‹T, any› | (e: T) => e |
`compareFunction` | [CompareFunctionType](_comparefunction_.md#comparefunctiontype)‹any› | ascendingCompareFunction |

**Returns:** *T[]*

___

###  RadixSort

▸ **RadixSort**‹**T**›(`elements`: T[], `getComparisonValue`: [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)‹T, number›): *T[]*

*Defined in [SortingAlgorithms/SortingAlgorithms.ts:69](https://github.com/powerofsoul/tstruct/blob/b1dd7f8/src/SortingAlgorithms/SortingAlgorithms.ts#L69)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`elements` | T[] | Array of T |
`getComparisonValue` | [GetComparisonValueFunc](_sortingalgorithms_sortingalgorithms_.md#getcomparisonvaluefunc)‹T, number› | Function that returns a !positive! number used in sorting based on an item from elements  |

**Returns:** *T[]*
