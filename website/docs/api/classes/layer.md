---
id: "layer"
title: "Class: Layer"
sidebar_label: "Layer"
sidebar_position: 0
custom_edit_url: null
---

# Class: Layer

## Constructors

### constructor

\+ **new Layer**(`name?`: *string*): [*Layer*](layer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | *string* | "new layer" |

**Returns:** [*Layer*](layer.md)

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

### activeChildren

• get **activeChildren**(): *Shape*

**Returns:** *Shape*

• set **activeChildren**(`children`: *Shape*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | *Shape* |

**Returns:** *void*

___

### attributes

• get **attributes**(): *object*

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `id` | *string* |

• set **attributes**(`attributes`: { `id`: *string*  }): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | *object* |
| `attributes.id` | *string* |

**Returns:** *void*

___

### children

• get **children**(): *Shape*[]

**Returns:** *Shape*[]

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

___

### toObject

▸ **toObject**(): [*LayerObject*](../interfaces/layerobject.md)

**Returns:** [*LayerObject*](../interfaces/layerobject.md)
