---
id: "drawfile"
title: "Class: DrawFile"
sidebar_label: "DrawFile"
sidebar_position: 0
custom_edit_url: null
---

# Class: DrawFile

## Constructors

### constructor

\+ **new DrawFile**(`name?`: *string*): [*DrawFile*](drawfile.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | *string* | "Untitled.svg" |

**Returns:** [*DrawFile*](drawfile.md)

## Accessors

### activeLayer

• get **activeLayer**(): [*Layer*](layer.md)

**Returns:** [*Layer*](layer.md)

• set **activeLayer**(`layer`: [*Layer*](layer.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [*Layer*](layer.md) |

**Returns:** *void*

___

### layers

• get **layers**(): [*Layer*](layer.md)[]

**Returns:** [*Layer*](layer.md)[]

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

### state

• get **state**(): *object*

**Returns:** *object*

• set **state**(`data`: {}): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *object* |

**Returns:** *void*

___

### uuid

• get **uuid**(): *string*

**Returns:** *string*

## Methods

### addLayer

▸ **addLayer**(`layer?`: [*Layer*](layer.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [*Layer*](layer.md) |

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

### toObject

▸ **toObject**(): [*DrawFileObject*](../interfaces/drawfileobject.md)

**Returns:** [*DrawFileObject*](../interfaces/drawfileobject.md)

___

### toSVG

▸ **toSVG**(): SVGElement

**Returns:** SVGElement
