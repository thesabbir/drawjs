---
id: "draw"
title: "Class: Draw"
sidebar_label: "Draw"
sidebar_position: 0
custom_edit_url: null
---

# Class: Draw

Usage Example

```typescript
import { Draw } from '@thesabbir/drawjs';

const rootElement = document.queryeSlector('root');
const draw = new Draw(rootElement);

```

## Constructors

### constructor

\+ **new Draw**(`rootElm`: HTMLDivElement): [*Draw*](draw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootElm` | HTMLDivElement |

**Returns:** [*Draw*](draw.md)

## Properties

### \_activeFile

• `Private` **\_activeFile**: *DrawFile*

___

### \_files

• `Private` `Readonly` **\_files**: *Map*<DrawFile, DrawFile\>

___

### \_rootElm

• `Private` `Readonly` **\_rootElm**: HTMLDivElement

## Accessors

### activeFile

• get **activeFile**(): *DrawFile*

**Returns:** *DrawFile*

• set **activeFile**(`file`: *DrawFile*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | *DrawFile* |

**Returns:** *void*

___

### files

• get **files**(): *DrawFile*[]

**Returns:** *DrawFile*[]

## Methods

### \_renderDom

▸ `Private` **_renderDom**(`content?`: SVGElement): *undefined* \| Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | SVGElement |

**Returns:** *undefined* \| Error

___

### draw

▸ **draw**(`shape`: *Shape*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | *Shape* |

**Returns:** *void*

___

### newFile

▸ **newFile**(`name`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

___

### removeAllChildren

▸ `Private` **removeAllChildren**(): *void*

**Returns:** *void*
