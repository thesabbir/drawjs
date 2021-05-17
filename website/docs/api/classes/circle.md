---
id: "circle"
title: "Class: Circle"
sidebar_label: "Circle"
sidebar_position: 0
custom_edit_url: null
---

# Class: Circle

## Hierarchy

- *Shape*

  ↳ **Circle**

## Constructors

### constructor

\+ **new Circle**(`x?`: *number*, `y?`: *number*, `r?`: *number*): [*Circle*](circle.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | *number* | 0 |
| `y` | *number* | 0 |
| `r` | *number* | 0 |

**Returns:** [*Circle*](circle.md)

Overrides: Shape.constructor

## Accessors

### attributes

• get **attributes**(): *Attributes*<any\>

**Returns:** *Attributes*<any\>

___

### fill

• set **fill**(`fill`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | *string* |

**Returns:** *void*

___

### r

• get **r**(): *any*

**Returns:** *any*

• set **r**(`r`: *any*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | *any* |

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

___

### x

• get **x**(): *any*

**Returns:** *any*

• set **x**(`x`: *any*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *any* |

**Returns:** *void*

___

### y

• get **y**(): *any*

**Returns:** *any*

• set **y**(`y`: *any*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | *any* |

**Returns:** *void*

## Methods

### clone

▸ **clone**(): [*Circle*](circle.md)

**Returns:** [*Circle*](circle.md)

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

▸ **transformAttributes**(): *object*

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `cx` | *any* |
| `cy` | *any* |

Overrides: Shape.transformAttributes
