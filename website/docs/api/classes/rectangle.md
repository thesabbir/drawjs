---
id: "rectangle"
title: "Class: Rectangle"
sidebar_label: "Rectangle"
sidebar_position: 0
custom_edit_url: null
---

# Class: Rectangle

## Hierarchy

- *Shape*

  ↳ **Rectangle**

## Constructors

### constructor

\+ **new Rectangle**(`x?`: *number*, `y?`: *number*, `height?`: *number*, `width?`: *number*): [*Rectangle*](rectangle.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | *number* | 0 |
| `y` | *number* | 0 |
| `height` | *number* | 0 |
| `width` | *number* | 0 |

**Returns:** [*Rectangle*](rectangle.md)

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

### height

• get **height**(): *number*

**Returns:** *number*

• set **height**(`height`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | *number* |

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

### width

• get **width**(): *number*

**Returns:** *number*

• set **width**(`width`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | *number* |

**Returns:** *void*

___

### x

• set **x**(`x`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *number* |

**Returns:** *void*

___

### y

• set **y**(`y`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | *number* |

**Returns:** *void*

## Methods

### clone

▸ **clone**(): [*Rectangle*](rectangle.md)

**Returns:** [*Rectangle*](rectangle.md)

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
