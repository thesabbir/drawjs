---
id: "path"
title: "Class: Path"
sidebar_label: "Path"
sidebar_position: 0
custom_edit_url: null
---

# Class: Path

## Hierarchy

- *Shape*

  ↳ **Path**

## Constructors

### constructor

\+ **new Path**(`d?`: *string*): [*Path*](path.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `d` | *string* | "" |

**Returns:** [*Path*](path.md)

Overrides: Shape.constructor

## Accessors

### attributes

• get **attributes**(): *Attributes*<any\>

**Returns:** *Attributes*<any\>

___

### d

• get **d**(): *any*

**Returns:** *any*

• set **d**(`d`: *any*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | *any* |

**Returns:** *void*

___

### fill

• set **fill**(`fill`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | *string* |

**Returns:** *void*

___

### stroke

• set **stroke**(`stroke`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stroke` | *number* |

**Returns:** *void*

___

### strokeWidth

• set **strokeWidth**(`strokeWidth`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strokeWidth` | *number* |

**Returns:** *void*

___

### transform

• set **transform**(`transform`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | *string* |

**Returns:** *void*

___

### type

• get **type**(): *string*

**Returns:** *string*

___

### uuid

• get **uuid**(): *string*

**Returns:** *string*

## Methods

### clone

▸ **clone**(): [*Path*](path.md)

**Returns:** [*Path*](path.md)

___

### onViewUpdate

▸ **onViewUpdate**(): *void*

**Returns:** *void*

Inherited from: Shape.onViewUpdate

___

### setAttributes

▸ **setAttributes**(`attributes`: *object*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | *object* |

**Returns:** *void*

Inherited from: Shape.setAttributes

___

### toObject

▸ **toObject**(): ShapeObject

**Returns:** ShapeObject

Inherited from: Shape.toObject

___

### transformAttributes

▸ **transformAttributes**(): *Attributes*<any\>

**Returns:** *Attributes*<any\>

Inherited from: Shape.transformAttributes
