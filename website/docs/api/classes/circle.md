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

### attr

• get **attr**(): Attributes

**Returns:** Attributes

___

### fill

• set **fill**(`fill`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | *string* |

**Returns:** *void*

___

### name

• get **name**(): *string*

**Returns:** *string*

• set **name**(`name`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

___

### r

• get **r**(): *number*

**Returns:** *number*

• set **r**(`r`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | *number* |

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

• get **x**(): *number*

**Returns:** *number*

• set **x**(`x`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *number* |

**Returns:** *void*

___

### y

• get **y**(): *number*

**Returns:** *number*

• set **y**(`y`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | *number* |

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

▸ **setAttributes**(`attr`: Attributes): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | Attributes |

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
| `cx` | *undefined* \| *number* |
| `cy` | *undefined* \| *number* |
| `d?` | *string* |
| `fill?` | *string* |
| `height?` | *number* |
| `id?` | *string* |
| `r?` | *number* |
| `stroke?` | *number* |
| `strokeWidth?` | *number* |
| `transform?` | *string* |
| `width?` | *number* |

Overrides: Shape.transformAttributes
