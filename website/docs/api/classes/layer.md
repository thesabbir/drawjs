---
id: "layer"
title: "Class: Layer"
sidebar_label: "Layer"
sidebar_position: 0
custom_edit_url: null
---

# Class: Layer

## Hierarchy

- *ShapeContainer*

  ↳ **Layer**

## Constructors

### constructor

\+ **new Layer**(`name?`: *string*): [*Layer*](layer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | *string* | "New Layer" |

**Returns:** [*Layer*](layer.md)

Overrides: ShapeContainer.constructor

## Accessors

### active

• get **active**(): *boolean*

**Returns:** *boolean*

• set **active**(`active`: *boolean*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | *boolean* |

**Returns:** *void*

___

### attr

• get **attr**(): Attributes

**Returns:** Attributes

___

### children

• get **children**(): *Shape*[]

**Returns:** *Shape*[]

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

### addChildren

▸ **addChildren**(`children`: *Shape*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | *Shape* |

**Returns:** *void*

Inherited from: ShapeContainer.addChildren

___

### addShape

▸ **addShape**(`shape`: *Shape*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | *Shape* |

**Returns:** *void*

___

### draw

▸ **draw**(`shape`: *Shape*, `requestRender`: Function): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | *Shape* |
| `requestRender` | Function |

**Returns:** *void*

___

### drawShape

▸ **drawShape**(): *void*

**Returns:** *void*

Inherited from: ShapeContainer.drawShape

___

### onViewUpdate

▸ **onViewUpdate**(): *void*

**Returns:** *void*

Inherited from: ShapeContainer.onViewUpdate

___

### setAttributes

▸ **setAttributes**(`attr`: Attributes): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | Attributes |

**Returns:** *void*

Inherited from: ShapeContainer.setAttributes

___

### toObject

▸ **toObject**(): ShapeChildren

**Returns:** ShapeChildren

Inherited from: ShapeContainer.toObject

___

### transformAttributes

▸ **transformAttributes**(): Attributes

**Returns:** Attributes

Inherited from: ShapeContainer.transformAttributes
